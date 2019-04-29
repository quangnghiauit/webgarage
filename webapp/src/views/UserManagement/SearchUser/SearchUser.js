import React, {Component} from 'react';
import {TextMask, InputAdapter} from 'react-text-mask-hoc';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import data from './_data';
import {
    Card,
    CardHeader,
    CardBody,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label,
    FormGroup,
    Input,
    FormText,
    InputGroup, Badge, Table
} from 'reactstrap';
import {addClient, getAllClient} from "../../../api/UserManagement/userManagement";
import {toast} from "react-toastify";
import { Alert } from 'reactstrap';

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
            resultAddPmc: null,
            offset: '0'

        };

        this.options = {
            sortIndicator: true,
            hideSizePerPage: true,
            paginationSize: 3,
            hidePageListOnlyOnePage: true,
            clearSearch: true,
            alwaysShowAllBtns: false,
            withFirstAndLast: false,
            onRowClick: function (row) {
                window.location.replace("http://localhost:8080/#/marketing-staff/manage-customer");
            }
        }
        // this.state={ modelAddCustomer:false };
        this.toggleAddCustomer = this.toggleAddCustomer.bind(this);
        this.toggleAdd = this.toggleAdd.bind(this);
        this.toggleNestedAdd = this.toggleNestedAdd.bind(this);
        this.toggleAllAdd = this.toggleAllAdd.bind(this);
    }

    componentDidMount() {

        this.handleSearch()

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
            }, () => console.log('hihihihi', this.state.listTable))

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

    toggleAddCustomer() {
        this.setState({
            modelAddCustomer: !this.state.modelAddCustomer
        });
    }

    render() {
        const {resultList, resultAdd, totalPages} = this.state;
        return (
            <div className="animated search-customer">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Danh sách khách hàng
                        <Button onClick={this.toggleAdd} color="link" size="sm">Thêm khách hàng</Button>
                    </CardHeader>
                    <CardBody>
                        <Table responsive striped>
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
