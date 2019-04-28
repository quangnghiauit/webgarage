import React, {Component} from 'react';
import { TextMask, InputAdapter } from 'react-text-mask-hoc';
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
    InputGroup
} from 'reactstrap';

class SearchUser extends Component {
    constructor(props) {
        super(props);

        this.table = data.rows;
        this.options = {
            sortIndicator: true,
            hideSizePerPage: true,
            paginationSize: 3,
            hidePageListOnlyOnePage: true,
            clearSearch: true,
            alwaysShowAllBtns: false,
            withFirstAndLast: false,
            onRowClick: function(row) {
                window.location.replace("http://localhost:8080/#/marketing-staff/manage-customer");
            }
        }
        this.state={ modelAddCustomer:false };
        this.toggleAddCustomer=this.toggleAddCustomer.bind(this);
    }
    toggleAddCustomer() {
        this.setState({
            modelAddCustomer: !this.state.modelAddCustomer
        });
    }
    render() {
        return (
            <div className="animated search-customer">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Danh sách khách hàng
                        <Button onClick={this.toggleAddCustomer} color="link" size="sm">Thêm khách hàng</Button>
                        <Modal isOpen={this.state.modelAddCustomer} toggle={this.toggleAddCustomer}
                               className={'modal-info ' + this.props.className}>
                            <ModalHeader toggle={this.toggleAddCustomer}>Thêm khách hàng</ModalHeader>
                            <ModalBody>
                                <FormGroup>
                                    <Label htmlFor="name">Tên khách hàng</Label>
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
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggleAddCustomer}>Thêm</Button>{' '}
                                <Button color="secondary" onClick={this.toggleAddCustomer}>Thoát</Button>
                            </ModalFooter>
                        </Modal>
                    </CardHeader>
                    <CardBody>
                        <BootstrapTable data={this.table} version="4" striped hover pagination search options={this.options}>
                            <TableHeaderColumn isKey dataField="id" dataSort>Mã khách hàng</TableHeaderColumn>
                            <TableHeaderColumn dataField="name">Tên khách hàng</TableHeaderColumn>
                            <TableHeaderColumn dataField="address" >Địa chỉ</TableHeaderColumn>
                            <TableHeaderColumn dataField="email" >Email</TableHeaderColumn>
                            <TableHeaderColumn dataField="phone" >Số điện thoại</TableHeaderColumn>
                            <TableHeaderColumn dataField="bill-handling" dataSort>Hóa đơn chờ</TableHeaderColumn>
                        </BootstrapTable>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default SearchUser;
