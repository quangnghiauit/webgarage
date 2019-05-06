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
import Select from 'react-select';
import '../../../../scss/vendors/react-select/react-select.scss';

const options=[
    {value:"/marketing-staff/search-customer",label: ' Tra cứu khách hàng'},
    {value:"/marketing-staff/search-car",label: ' Tra cứu xe'},
]

class RoleManagement extends Component {
    constructor(props) {
        super(props);


        this.state={
            modalAddRole:false,
            modalRole:false,
            value:[],
        };
        this.toggleAddRole=this.toggleAddRole.bind(this);
        this.toggleRole=this.toggleRole.bind(this);
        this.saveChanges = this.saveChanges.bind(this);

    }

    toggleAddRole(){
        this.setState({modalAddRole:!this.state.modalAddRole});
    }
    toggleRole(){
        this.setState({modalRole:!this.state.modalRole});
    }
    saveChanges(value) {
        this.setState({ value });
    }
    render() {
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
                                    <Label htmlFor="name">Tên role</Label>
                                    <Input type="text" id="name" placeholder="Enter your name" required/>
                                    <FormText className="help-block">Please enter name</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="name">Authorities</Label>
                                    <Select className='authorities'
                                            name="form-field-name2"
                                            value={this.state.value}
                                            options={options}
                                            onChange={this.saveChanges}
                                            multi
                                    />
                                    <FormText className="help-block">Please enter authorities</FormText>
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggleAddRole}>Thêm</Button>{' '}
                                <Button color="secondary" onClick={this.toggleAddRole}>Thoát</Button>
                            </ModalFooter>
                        </Modal>
                    </CardHeader>
                    <CardBody>
                        <Table responsive>
                            <thead>
                            <tr>
                                <th>Role</th>
                                <th>Authorities</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <td>Khách hàng</td>
                            <td>
                                <Select
                                    name="form-field-name2"
                                    value={this.state.value}
                                    options={options}
                                    onChange={this.saveChanges}
                                    multi
                                />
                            </td>
                            <td><Button color="link" onClick={this.toggleRole}>settings</Button></td>
                            </tbody>
                        </Table>
                        <Modal isOpen={this.state.modalRole} toggle={this.toggleRole}
                               className='modal-info'>
                            <ModalHeader toggle={this.toggleRole}>Settings</ModalHeader>
                            <ModalBody>
                                <FormGroup>
                                    <Label htmlFor="name">Tên role</Label>
                                    <Input type="text" id="name" placeholder="Enter your name" required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="name">Authorities</Label>
                                    <Select className='authorities'
                                            name="form-field-name2"
                                            value={this.state.value}
                                            options={options}
                                            onChange={this.saveChanges}
                                            multi
                                    />
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggleRole}>Xóa role</Button>{' '}
                                <Button color="primary" onClick={this.toggleRole}>Cập nhật</Button>{' '}
                                <Button color="secondary" onClick={this.toggleRole}>Thoát</Button>
                            </ModalFooter>
                        </Modal>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default RoleManagement;