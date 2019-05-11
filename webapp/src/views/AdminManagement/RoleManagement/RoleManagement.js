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
import {getRole,addRole, deleteRole} from '../../../api/AdminManagement/RoleManagement/roleManagement'


class RoleManagement extends Component {
    constructor(props) {
        super(props);

        this.state={
            listRole:null,
            role:'',
            roleSelected:null,
            resultAdd:null,
            resultDelete:null,
            modalAddRole:false,
            modalDeleteRole:false,
            nestedModalAdd:false,
            closeAllAdd:false,
            nestedModalDelete:false,

        };
        this.toggleAddRole=this.toggleAddRole.bind(this);
        this.toggleDeleteRole=this.toggleDeleteRole.bind(this);
        this.loadRoles=this.loadRoles.bind(this);
        this.handleAddRole=this.handleAddRole.bind(this);
        this.toggleNestedAdd=this.toggleNestedAdd.bind(this);
        this.toggleAllAdd=this.toggleAllAdd.bind(this);
        this.toggleNestDelete=this.toggleNestDelete.bind(this);
        this.handleDeleteRole=this.handleDeleteRole.bind(this);
    }
    componentDidMount(){
        this.loadRoles();
    }
    loadRoles(){
        getRole().then(res=>{
            console.log(`getRole ${res}`);
            this.setState({
                listRole:res.data
            },()=>console.log(`listRole ${this.state.listRole}`)
            );
        })
    }
    toggleAddRole(){
        this.setState({modalAddRole:!this.state.modalAddRole});
    }
    
    handleAddRole(){
        const params = this.state.role;
        console.log("param", params);
        if (this.state.role) {
            addRole(params).then(res => {
                console.log('res addRole', res)
                this.setState({
                    resultAdd: res
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
    toggleDeleteRole(role){
        this.setState({
            modalDeleteRole:!this.state.modalDeleteRole,
            roleSelected:role
            },()=>{console.log("role delete ",this.state.roleSelected)}
        );
    }
    handleDeleteRole(){
        const params=this.state.roleSelected;
        console.log("params",params);
        deleteRole(params).then(res=>{
            console.log('res deleteRole',res);
            this.setState({
                resultDelete:res
            },()=>this.toggleNestDelete())
        })
    }
    toggleNestDelete(){
        this.setState({
            nestedModalDelete: !this.state.nestedModalDelete,
            closeAllAdd: false
        });
    }
    render() {
        const {listRole,resultAdd,resultDelete}=this.state;console.log("render() " +listRole);
        return (
            <div className="animated manage-account">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Quản lý role
                        <Button onClick={this.toggleAddRole} color="link" size="sm">Thêm role</Button>
                        <Modal isOpen={this.state.modalAddRole} toggle={this.toggleAddRole}
                               className={'modal-info ' + this.props.className}>
                            <ModalHeader toggle={this.toggleAddRole}>Thêm role</ModalHeader>
                            <ModalBody>
                                <FormGroup>
                                    <Label htmlFor="role">Tên role</Label>
                                    <Input type="text" id="role" value={this.state.role}
                                    onChange={(e)=>this.setState({role:e.target.value}, () => console.log(this.state.role))}
                                    placeholder="Enter role" required/>
                                    <FormText className="help-block">Please enter role</FormText>
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.handleAddRole}>Thêm</Button>{' '}
                                <Button color="secondary" onClick={this.toggleAddRole}>Thoát</Button>
                            </ModalFooter>
                        </Modal>
                    </CardHeader>
                    <CardBody>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listRole ? listRole.map((item,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{item.role}</td>
                                                <td><Button color="primary" onClick={()=>{this.toggleDeleteRole(item.role);console.log("item",item.role)}}>Xóa</Button></td>
                                            </tr>
                                        )
                                    }):null 
                                }
                            </tbody>
                        </Table>
                        <Modal isOpen={this.state.modalDeleteRole} toggle={this.toggleDeleteRole}
                               className='modal-warning'>
                            <ModalHeader toggle={this.toggleDeleteRole}>Warning!</ModalHeader>
                            <ModalBody>
                                Bạn có chắc muốn xóa role {this.state.roleSelected} ?
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.handleDeleteRole}>OK</Button>{' '}
                                <Button color="secondary" onClick={this.toggleDeleteRole}>Thoát</Button>{' '}
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
                            <p>Thêm thành công !</p> : <p>Thêm thất bại !</p>
                        }
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.nestedModalDelete}
                       toggle={() => this.toggleNestDelete()}
                       
                       className={'modal-info ' + this.props.className} centered>
                    <ModalHeader toggle={() => this.toggleAllAdd()}>Thông
                        báo</ModalHeader>
                    <ModalBody>
                        {resultDelete ?
                            "Xóa thành công !" : "Xóa thất bại !"
                        }
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default RoleManagement;