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
import {getRole}from '../../../api/AdminManagement/RoleManagement/roleManagement'
import {getUsers, getUsersRole, addUser, deleteUser} from '../../../api/AdminManagement/UserManagement/userManagement'


class UserManagement extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            listRole:null,
            listUser:null,
            user:null,
            displayname:'',
            address:'',
            email:'',
            phoneNumber: '84',
            role:'',
            userName:'',
            password:'',
            resultAdd:null,
            modalAddUser:false,
            modalUser:false,
            nestedModalAdd:false,
            closeAllAdd:false,
        };
        this.toggleAddUser=this.toggleAddUser.bind(this);
        this.toggleUser=this.toggleUser.bind(this);
        this.loadRole=this.loadRole.bind(this);
        this.loadUser=this.loadUser.bind(this);
        this.handleAddUser=this.handleAddUser.bind(this);
        this.toggleNestedAdd=this.toggleNestedAdd.bind(this);
        this.toggleAllAdd=this.toggleAllAdd.bind(this);
        this.toggleDeleteUser=this.toggleDeleteUser.bind(this);
    }
    
    componentDidMount(){
        this.loadRole();
        this.loadUser();
    }
    loadRole(){
        getRole().then(res=>{
            this.setState({
                listRole:res.data
            },()=>{console.log("listRole",this.state.listRole)});
        })
    }
    loadUser(){
        getUsers().then(resGetUsers=>{
            getUsersRole().then(resGetUserRole=>{
                console.log('resGetUsers',resGetUsers);
                console.log('resGetUserRole',resGetUserRole);
                let listUser=resGetUsers.data;console.log('listUser',listUser);
                listUser.forEach(user=>{
                    resGetUserRole.data.forEach(userrole=>{
                        if(user.userName===userrole.username)
                        {
                            user.role=userrole.role;
                            return true;
                        }
                    })
                })                
                console.log('after listUser',listUser);
                this.setState({
                    listUser:listUser
                    },()=>{console.log('this.state.listUser',this.state.listUser)}
                );
            })
        })
        
    }
    handleAddUser(){
        const params={
            displayname:this.state.displayname,
            address:this.state.address,
            email:this.state.email,
            phoneNumber: this.state.phoneNumber,
            role:this.state.role,
            userName:this.state.userName,
            password:this.state.password
        }
        console.log('params adduser',params);
        if (this.state.displayname && this.state.address 
            && this.state.phoneNumber && this.state.role 
            && this.state.userName && this.state.password) {
            addUser(params).then(res => {
                console.log('res addUser', res)
                this.setState({
                    resultAdd: res.data
                }, () => this.toggleNestedAdd())
            })
        } else {
            alert("Vui lòng điền đầy đủ thông tin.")
        }
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
    toggleAddUser(){
        this.setState({modalAddUser:!this.state.modalAddUser});
    }
    toggleUser(user){
        this.setState({
            user:user,
            modalUser:!this.state.modalUser
        });
    }
    toggleDeleteUser(){ 
        const params=this.state.user.userID;
        console.log('params',params);
        deleteUser(params).then(res=>{
            console.log('res deleteuser',res);
            
        })
    }
    render() {
        const {listRole,listUser,user,resultAdd}=this.state;console.log("listUser render",listUser);
        return (
            <div className="animated manage-account">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Quản lý tài khoản
                        <Button onClick={this.toggleAddUser} color="link" size="sm">Thêm tài khoản</Button>
                        <Modal isOpen={this.state.modalAddUser} toggle={this.toggleAddUser}
                               className={'modal-info ' + this.props.className}>
                            <ModalHeader toggle={this.toggleAddUser}>Thêm tài khoản</ModalHeader>
                            <ModalBody>
                                <FormGroup>
                                    <Label htmlFor="name">Tên người dùng</Label>
                                    <Input type="text" id="name" value={this.state.displayname}
                                        onChange={e=>this.setState({displayname:e.target.value},()=>console.log(this.state.displayname))}
                                        placeholder="Enter your name" required/>
                                    <FormText className="help-block">Please enter your name</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="address">Địa chỉ</Label>
                                    <Input type="text" id="address" value={this.state.address}
                                        onChange={e=>this.setState({address:e.target.value},()=>console.log(this.state.address))}
                                        placeholder="Enter your address" required/>
                                    <FormText className="help-block">Please enter your address</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="email" id="email" name="email" value={this.state.email}
                                        onChange={e=>this.setState({email:e.target.value},()=>console.log(this.state.email))}
                                        placeholder="Enter Email.."/>
                                    <FormText className="help-block">Please enter your email</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Số điện thoại</Label>
                                    <InputGroup>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-phone"></i></span>
                                        </div>
                                        <TextMask
                                            Component={InputAdapter}
                                            value={this.state.phoneNumber}
                                            mask={['(','+', /[1-9]/, /\d/,')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                                            guide={false}
                                            onChange={e => {this.setState({phoneNumber: e.target.value})}}
                                            className="form-control"
                                        />
                                    </InputGroup>
                                    <FormText color="muted">
                                        ex. (+84) 978-301-442
                                    </FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="select-role">Role</Label>
                                    <Input type="select" id="select-role" value={this.state.role} onChange={e=>this.setState({role:e.target.value},()=>console.log(this.state.role))}>
                                        <option value="">Select Role</option>
                                        {
                                            listRole ? listRole.map((item,index)=>
                                                <option value={item.role} key={index}>{item.role}</option>
                                            ):null
                                        }
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="username">Tên đăng nhập (UserName)</Label>
                                    <Input type="text" id="username" value={this.state.userName}
                                        onChange={(e) => this.setState({userName: e.target.value}, () => console.log(this.state.userName))}
                                        placeholder="Enter your username" required/>
                                    <FormText className="help-block">Please enter your username</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Mật khẩu (Password)</Label>
                                    <Input type="password" id="password" name="password"
                                        value={this.state.password}
                                        onChange={(e) => this.setState({password: e.target.value}, () => console.log(this.state.password))}
                                        placeholder="Enter password.."/>
                                    <FormText className="help-block">Please enter password</FormText>
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.handleAddUser}>Thêm</Button>{' '}
                                <Button color="secondary" onClick={this.toggleAddUser}>Thoát</Button>
                            </ModalFooter>
                        </Modal>
                    </CardHeader>
                    <CardBody>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên đăng nhập</th>
                                    <th>Tên hiển thị</th>
                                    {/* <th>Mật khẩu</th>
                                    <th>Địa chỉ</th>
                                    <th>Email</th> */}
                                    <th>Số điện thoại</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listUser ? listUser.map((item,index)=>
                                        <tr key={index}>
                                            <td>{item.userID}</td>
                                            <td>{item.userName}</td>
                                            <td>{item.displayname}</td>
                                            {/* <td>{item.password}</td>
                                            <td>{item.address}</td>
                                            <td>{item.email}</td> */}
                                            <td>{item.phoneNumber}</td>
                                            <td>{item.role}</td>
                                            <td>{<Button color="primary" onClick={()=>{this.toggleUser(item);console.log("toggleUser",item)}}>setting</Button>}</td>
                                        </tr>
                                    ):null
                                }
                            </tbody>
                        </Table>
                        <Modal isOpen={this.state.modalUser} toggle={this.toggleUser}
                               className='modal-info'>
                            <ModalHeader toggle={this.toggleUser}>Settings</ModalHeader>
                            {
                                user&&
                                <ModalBody>
                                    <FormGroup>
                                        <Label htmlFor="userID">ID</Label>
                                        <Input type="text" id="user-id" placeholder={user.userID} disabled/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="username">Tên đăng nhập</Label>
                                        <Input type="text" id="username" placeholder={user.userName} disabled/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="display-name">Tên hiển thị</Label>
                                        <Input type="text" id="display-name" placeholder={user.displayname} required/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="password">Mật khẩu</Label>
                                        <Input type="text" id="password" placeholder={user.password} required/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="address">Địa chỉ</Label>
                                        <Input type="text" id="address" placeholder={user.address} required/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="email">Email</Label>
                                        <Input type="email" id="email" name="email" placeholder={user.email}/>
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
                                                placeholder={user.phoneNumber}
                                                required
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="select-role">Role</Label>
                                        <Input type="select" id="select-role" >
                                            {
                                                listRole ? listRole.map((item,index)=>
                                                    item.role===user.role?<option value={item.id} key={index} selected>{item.role}</option>
                                                    :<option value={item.id} key={index}>{item.role}</option>
                                                ):null
                                            }
                                        </Input>
                                    </FormGroup>
                                </ModalBody>
                            }
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggleDeleteUser}>Xóa tài khoản</Button>{' '}
                                <Button color="primary" onClick={this.toggleUpdateUser}>Cập nhật</Button>{' '}
                                <Button color="secondary" onClick={this.toggleUser}>Thoát</Button>
                            </ModalFooter>
                        </Modal>
                    </CardBody>
                </Card>
                <Modal isOpen={this.state.nestedModalAdd}
                       toggle={() => this.toggleNestedAdd()}
                       
                       className={'modal-info ' + this.props.className} centered>
                    <ModalHeader toggle={() => this.toggleAllAdd()}>Thông
                        báo</ModalHeader>
                    <ModalBody>
                        {resultAdd ?
                            resultAdd.returnMessage:null
                        }
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default UserManagement;