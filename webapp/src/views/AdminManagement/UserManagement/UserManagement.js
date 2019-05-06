import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { TextMask, InputAdapter } from 'react-text-mask-hoc';
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
    Button,
    Col,
    Table
} from 'reactstrap';


class UserManagement extends Component {
    constructor(props) {
        super(props);


        this.state={modalAddAccount:false,modalAccount:false};
        this.toggleAddAccount=this.toggleAddAccount.bind(this);
        this.toggleAccount=this.toggleAccount.bind(this);
    }

    toggleAddAccount(){
        this.setState({modalAddAccount:!this.state.modalAddAccount});
    }
    toggleAccount(){
        this.setState({modalAccount:!this.state.modalAccount});
    }
    render() {
        return (
            <div className="animated manage-account">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Quản lý tài khoản
                        <Button onClick={this.toggleAddAccount} color="link" size="sm">Thêm tài khoản</Button>
                        <Modal isOpen={this.state.modalAddAccount} toggle={this.toggleAddAccount}
                               className={'modal-info ' + this.props.className}>
                            <ModalHeader toggle={this.toggleAddAccount}>Thêm tài khoản</ModalHeader>
                            <ModalBody>
                                <FormGroup>
                                    <Label htmlFor="name">Tên người dùng</Label>
                                    <Input type="text" id="name" placeholder="Enter your name" required/>
                                    <FormText className="help-block">Please enter your name</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="address">Địa chỉ</Label>
                                    <Input type="text" id="address" placeholder="Enter your address" required/>
                                    <FormText className="help-block">Please enter your address</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="email" id="email" name="email" placeholder="Enter Email.."/>
                                    <FormText className="help-block">Please enter your email</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Số điện thoại</Label>
                                    <InputGroup>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-phone"></i></span>
                                        </div>
                                        <TextMask
                                            mask={['(','+', /[1-9]/, /\d/,')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                                            Component={InputAdapter}
                                            className="form-control"
                                        />
                                    </InputGroup>
                                    <FormText color="muted">
                                        ex. (+84) 978-301-442
                                    </FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="select-car">Role</Label>
                                    <Input type="select" id="select-car" >
                                        <option value="0">Select role</option>
                                        <option value="1">Khách hàng</option>
                                        <option value="2">Nhân viên tiếp tân</option>
                                        <option value="3">Nhân viên kỹ thuật</option>
                                        <option value="4">Nhân viên kế toán</option>
                                    </Input>
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggleAddAccount}>Thêm</Button>{' '}
                                <Button color="secondary" onClick={this.toggleAddAccount}>Thoát</Button>
                            </ModalFooter>
                        </Modal>
                    </CardHeader>
                    <CardBody>
                        <Table>
                            <thead>
                            <tr>
                                <th>Tên đăng nhập</th>
                                <th>Tên hiển thị</th>
                                <th>Mật khẩu</th>
                                <th>Địa chỉ</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <td>tnd</td>
                            <td>Nguyen A</td>
                            <td>560651</td>
                            <td>A B C</td>
                            <td>A@gmail.com</td>
                            <td>0132456789</td>
                            <td>Nhân viên kỹ thuật</td>
                            <td><Button color="link" onClick={this.toggleAccount}>settings</Button></td>
                            </tbody>
                        </Table>
                        <Modal isOpen={this.state.modalAccount} toggle={this.toggleAccount}
                               className='modal-info'>
                            <ModalHeader toggle={this.toggleAccount}>Settings</ModalHeader>
                            <ModalBody>
                                <FormGroup>
                                    <Label htmlFor="username">Tên đăng nhập</Label>
                                    <Input type="text" id="username" placeholder="Enter your name" disabled/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="display-name">Tên hiển thị</Label>
                                    <Input type="text" id="display-name" placeholder="Enter your name" disabled/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Mật khẩu</Label>
                                    <Input type="text" id="password" placeholder="Enter your password" required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="address">Địa chỉ</Label>
                                    <Input type="text" id="address" placeholder="Enter your address" required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="email" id="email" name="email" placeholder="Enter Email.."/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Số điện thoại</Label>
                                    <InputGroup>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-phone"></i></span>
                                        </div>
                                        <TextMask
                                            mask={['(','+', /[1-9]/, /\d/,')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                                            Component={InputAdapter}
                                            className="form-control"
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="select-car">Role</Label>
                                    <Input type="select" id="select-car" >
                                        <option value="0">Select role</option>
                                        <option value="1">Khách hàng</option>
                                        <option value="2">Nhân viên tiếp tân</option>
                                        <option value="3">Nhân viên kỹ thuật</option>
                                        <option value="4">Nhân viên kế toán</option>
                                    </Input>
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggleAccount}>Xóa tài khoản</Button>{' '}
                                <Button color="primary" onClick={this.toggleAccount}>Cập nhật</Button>{' '}
                                <Button color="secondary" onClick={this.toggleAccount}>Thoát</Button>
                            </ModalFooter>
                        </Modal>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default UserManagement;