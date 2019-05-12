import React, {Component} from 'react';
import {InputAdapter, TextMask} from 'react-text-mask-hoc';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    FormGroup,
    FormText,
    Input,
    InputGroup,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Table,
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';
import {addClient, getAllClient} from "../../../api/UserManagement/userManagement";

class SearchUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listTable: [],
            userID :'',
            displayname: '',
            phoneNumber: '',
            address: '',
            userName: '',
            password: '',
            resultAdd: null,
            idUpdate: '',
            idDelete: '',
            pmcIDUpdate: '',
            pmcCodeUpdate: '',
            pmcNameUpdate: '',
            createdBy: '',
            createdDate: '',
            updatedBy: '',
            updatedDate: '',
            resultList: null,
            masterData: [],
            totalPages: 0,
            modalAdd: false,
            nestedModalAdd: false,
            closeAllAdd: false,
            offset: '0',
            curPage:1,
            maxRows: 5,
            definePa:[]
        };

        this.toggleAdd = this.toggleAdd.bind(this);
        this.toggleNestedAdd = this.toggleNestedAdd.bind(this);
        this.toggleAllAdd = this.toggleAllAdd.bind(this);
        this.filterPa=this.filterPa.bind(this);
        this.togglePa=this.togglePa.bind(this);
        this.toggleNext=this.toggleNext.bind(this);
        this.togglePre=this.togglePre.bind(this);
    }

    componentDidMount() {
        this.handleSearch();
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
      }
      getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate');
        return null;
      }
    handleUserBill(id) {
        window.location.replace("http://localhost:8080/#/user-management/history/"+id);
    }

    handleSearch(offset){
        const page = this.state.offset ? this.state.offset : '0';
        let data = [];
        getAllClient().then(response => {
            console.log('bleeeeee', response)
            this.setState({
                listTable: response.data,
                resultList: response.data
            }, () => {
                const table=document.getElementById('table-users');
                const tr=table.getElementsByTagName('tr');
                if(tr.length-1>this.state.maxRows)
                {
                    let temp=[];
                    for(let i=1;i<=Math.ceil((tr.length-1)/this.state.maxRows);i++)
                        temp.push(i);
                    this.setState({definePa:temp});
                }
                else
                    this.setState({definePa:[1]});

                this.filterPa();
            })
        })
        // getListPmc(page).then(res => {
        //         this.setState({
        //             data: res.data.content,
        //             resultListPmc: res.data.content,
        //             masterData: res.data.content,
        //             totalPages: res.data.totalPages,
        //             offset: offset ? offset : 0
        //         })
        //     }
        // )
    }

    // searchInResult = (input) => {
    //     let dataFilters = [];
    //     if (this.state.resultListPmc && input && input.target.value) {
    //         for (let i = 0; i < this.state.resultListPmc.length; i++) {
    //             if (this.state.resultListPmc[i].pmcCode.toLowerCase().indexOf(input.target.value.toLowerCase()) > -1) {
    //                 dataFilters.push(this.state.resultListPmc[i]);
    //             }
    //         }
    //         if (dataFilters) {
    //             this.setState({
    //                 resultListPmc: dataFilters
    //             });
    //         }
    //     }
    //
    //     if (!input || !input.target.value) {
    //         this.setState({
    //             resultListPmc: this.state.masterData
    //         });
    //     }
    // }
    filterTable(){
        let td,txtValue,display;
        const filter = document.getElementById("search").value.toUpperCase();
        const table = document.getElementById("table-users");
        const tr = table.getElementsByTagName("tr");
        for (let i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td");
            display=false;
            for(let j=0;j<td.length;j++){
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1)
                {
                    display=true;
                    break;
                }
            }
            if (display) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }

        }
    }

    filterPa(){
        const table=document.getElementById('table-users');
        const tr=table.getElementsByTagName('tr');
        for(let i=1;i<tr.length;i++)
        {
            if((i>=(this.state.curPage-1)*this.state.maxRows+1) && (i<=this.state.curPage*this.state.maxRows))
                tr[i].style.display='';
            else
                tr[i].style.display='none';
        }
    }
    togglePre(){
        if(this.state.curPage > 1)
        {
            this.setState({curPage:this.state.curPage-1},()=>{this.filterPa()});
        }
    }
    toggleNext(){
        if(this.state.curPage*this.state.maxRows<this.state.listTable.length)
        {
            this.setState({curPage:this.state.curPage+1},()=>{this.filterPa()});
        }
    }
    togglePa(i){
        this.setState({
            curPage:i
        },()=>{this.filterPa()}
        );
    }
    toggleNestedAdd() {
        this.setState({
            nestedModalAdd: !this.state.nestedModalAdd,
            closeAllAdd: false
        });
    }

    toggleAllAdd() {
        this.setState({
            nestedModalAdd: !this.state.nestedModalAdd,
            closeAllAdd: true
        });
        window.location.reload();
    }

    handleAddUser() {
        const params = {
            displayname: this.state.displayname,
            phoneNumber: this.state.phoneNumber,
            address: this.state.address,
            userName: this.state.userName,
            password: this.state.password,
        };
        console.log("param", params);
        if (this.state.displayname && this.state.phoneNumber && this.state.address && this.state.userName && this.state.password) {
            addClient(params).then(res => {
                console.log('truoc add', res)
                this.setState({
                    resultAdd: res.data
                }, () => this.toggleNestedAdd())

            })
        } else {
            alert("Vui lòng điền đầy đủ thông tin.")
        }
    }

    toggleAdd() {
        this.setState(prevState => ({
            modalAdd: !prevState.modalAdd
        }));
    }

    render() {
        const {resultList, resultAdd, totalPages} = this.state;console.log('cur render',this.state.curPage);
        const listPaItems=this.state.definePa.map(function(i,index){
            return this.state.curPage===i?
                <PaginationItem key={index} active id={'paItem'+i}>
                    <PaginationLink onClick={()=>this.togglePa(i)}>{i}</PaginationLink>
                </PaginationItem>
                :
                <PaginationItem key={index} id={'paItem'+i}>
                    <PaginationLink onClick={()=>this.togglePa(i)}>{i}</PaginationLink>
                </PaginationItem>;

        }.bind(this));
        return (
            <div className="animated search-customer">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Danh sách khách hàng
                        <Button onClick={this.toggleAdd} color="link" size="sm">Thêm khách hàng</Button>
                    </CardHeader>
                    <CardBody>
                        <InputGroup className="search">
                            <Input type="text" id="search" onKeyUp={this.filterTable} placeholder="Search..." title="Enter a search info" />
                            <div className="input-group-append">
                                <i className="fa fa-search form-control" aria-hidden="true"></i>
                            </div>
                        </InputGroup>
                        <Table id="table-users" responsive striped>
                            <thead>
                            <tr>
                                <th>LogID</th>
                                <th>Mã khách hàng</th>
                                <th>Tên khách hàng</th>
                                <th>Số điện thoại</th>
                                <th>Địa chỉ</th>
                                <th>Ngày tạo TK</th>
                                <th>Hóa đơn chờ</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                resultList ? resultList.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.userID}</td>
                                            <td>{item.displayname}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>{item.address}</td>
                                            <td>{item.createdDate}</td>
                                            <td>
                                                {item.isactive == 0
                                                    ?
                                                    <Button color="success" onClick={()=> this.handleUserBill(item.userID)}>Không có</Button>
                                                    :
                                                    <Button color="warning" onClick={()=> this.handleUserBill(item.userID)}>Đang xử lý</Button>
                                                }
                                            </td>
                                        </tr>
                                    )

                                }) : null

                            }
                            </tbody>
                        </Table>
                        <Pagination id="pagination">
                        <PaginationItem>
                            <PaginationLink previous onClick={this.togglePre}/>
                        </PaginationItem>
                            {listPaItems}
                        <PaginationItem>
                            <PaginationLink next onClick={this.toggleNext}/>
                        </PaginationItem>
                        </Pagination>
                    </CardBody>
                </Card>
                <Modal isOpen={this.state.modalAdd} toggle={this.toggleAdd}
                       className={'modal-info modal-lg modal-lg-custom'
                       + this.props.className}>
                    <ModalHeader toggle={this.toggleAdd}>Thêm khách hàng</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label htmlFor="name">Tên khách hàng</Label>
                            <Input type="text" id="name" value={this.state.displayname}
                                   onChange={(e) => this.setState({displayname: e.target.value}, () => console.log(this.state.displayname))}
                                   placeholder="Enter your name" required/>
                            <FormText className="help-block">Please enter your name</FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label>Số điện thoại</Label>
                            <InputGroup>
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-phone"></i></span>
                                </div>
                                <TextMask
                                    mask={['(', '+', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                                    Component={InputAdapter}
                                    value={this.state.phoneNumber}
                                    onChange={(e) => this.setState({phoneNumber: e.target.value}, () => console.log(this.state.phoneNumber))}
                                    className="form-control"
                                />
                            </InputGroup>
                            <FormText color="muted">
                                ex. (+84) 978-301-442
                            </FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="address">Địa chỉ</Label>
                            <Input type="text" id="address" value={this.state.address}
                                   onChange={(e) => this.setState({address: e.target.value}, () => console.log(this.state.address))}
                                   placeholder="Enter your address" required/>
                            <FormText className="help-block">Please enter your address</FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="address">Tên đăng nhập (UserName)</Label>
                            <Input type="text" id="username" value={this.state.userName}
                                   onChange={(e) => this.setState({userName: e.target.value}, () => console.log(this.state.userName))}
                                   placeholder="Enter your username" required/>
                            <FormText className="help-block">Please enter your username</FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Mật khẩu (Password)</Label>
                            <Input type="password" id="password" name="password"
                                   value={this.state.password}
                                   onChange={(e) => this.setState({password: e.target.value}, () => console.log(this.state.password))}
                                   placeholder="Enter password.."/>
                            <FormText className="help-block">Please enter password</FormText>
                        </FormGroup>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary"
                                onClick={() => this.handleAddUser()}>Submit</Button>{' '}
                        <Button color="secondary" onClick={this.toggleAdd}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.nestedModalAdd}
                       toggle={() => this.toggleNestedAdd()}
                       onClosed={this.state.closeAllAdd ? () => this.toggleAdd()
                           : undefined}
                       className={'modal-info ' + this.props.className} centered>
                    <ModalHeader toggle={() => this.toggleAllAdd()}>Thông
                        báo</ModalHeader>
                    <ModalBody>
                        {resultAdd ?
                            resultAdd.returnMessage : null
                        }
                    </ModalBody>
                </Modal>

            </div>
        );
    }
}

export default SearchUser;
