import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {TextMask, InputAdapter} from 'react-text-mask-hoc';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label,
    Input,
    InputGroup,
    FormGroup,
    FormText,
    Button, Table
} from 'reactstrap';
import {addClient, getAllClient} from "../../../api/UserManagement/userManagement";
import {addHistoryMaterial, getListMaterial} from "../../../api/materialManagement/materialManagement";

class HistoryMaterial extends Component {
    constructor(props) {
        super(props);

        this.state = {
            materialID:'',
            price:'',
            numInput:'',
            listTable: [],
            resultList: [],
            resultAdd: null,
            modalAdd: false,
            nestedModalAdd: false,
            closeAllAdd: false,
        }

        this.toggleAdd = this.toggleAdd.bind(this);
        this.toggleNestedAdd = this.toggleNestedAdd.bind(this);
        this.toggleAllAdd = this.toggleAllAdd.bind(this);
    }

    componentDidMount() {

        this.handleSearch()

    }

    handleSearch() {

        getListMaterial().then(response => {
            console.log('bleeeeee', response)
            this.setState({
                listTable: response.data,
                resultList: response.data
            }, () => console.log('hihihihi', this.state.listTable))

        })
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

    handleAddMaterial() {
        const params = {
            materialID: this.state.materialID,
            price: this.state.price,
            numInput: this.state.numInput,
        };
        console.log("param", params);
        if (this.state.materialID && this.state.price && this.state.numInput) {
            addHistoryMaterial(params).then(res => {
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
        const {resultList, resultAdd} = this.state;
        return (
            <div className="animated import-materials">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Phiếu nhập phụ tùng
                        <Button onClick={this.toggleAddMaterials} color="link" size="sm">Thêm phụ tùng</Button>
                    </CardHeader>
                    <CardBody>
                        <Table responsive striped>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên phụ tùng</th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                                <th>Ngày nhập</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                resultList ? resultList.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.materialName}</td>
                                            <td>{item.numInput}</td>
                                            <td>{item.price}</td>
                                            <td>{item.reqDate}</td>
                                        </tr>
                                    )

                                }) : null

                            }
                            </tbody>
                        </Table>
                    </CardBody>
                    <CardFooter>
                        <Button className="float-right" color="success">Lưu</Button>
                    </CardFooter>
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

export default HistoryMaterial;
