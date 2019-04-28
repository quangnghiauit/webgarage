import React, {Component} from 'react';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    InputGroup,
    Label,
    FormGroup,
    Form,
    Button,
    Table,
    Badge,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormText,
    Collapse
} from 'reactstrap';
import ScrollArea from 'react-scrollbar'
import { TextMask, InputAdapter } from 'react-text-mask-hoc';

class HistoryTransUser extends Component {
    constructor(props){
        super(props);

        this.state={
            modalUpdate:false,
            modalAddCar:false,
            modalImportCar:false,
            collapseBill:false
        };
        this.toggleAddCar=this.toggleAddCar.bind(this);
        this.toggleImportCar=this.toggleImportCar.bind(this);
        this.toggleUpdate=this.toggleUpdate.bind(this);
        this.toggleBill=this.toggleBill.bind(this);
    }

    toggleAddCar(){
        this.setState({modalAddCar:!this.state.modalAddCar});
    }
    toggleImportCar(){
        this.setState({modalImportCar:!this.state.modalImportCar});
    }
    toggleUpdate(){
        this.setState({modalUpdate:!this.state.modalUpdate});
    }
    toggleBill(){
        this.setState({collapseBill:!this.state.collapseBill});
    }
    render() {
        return (
            <div className="animated fadeIn manage-customer">
                <Row>
                    <Col xs="12" lg="6">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Thông tin khách hàng
                            </CardHeader>
                            <CardBody >
                                <ScrollArea
                                    className="manage-customer-info">
                                    <FormGroup>
                                        <Label htmlFor="id">Mã khách hàng</Label>
                                        <Input type="text" id="id" placeholder="Enter your id" disabled/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="name">Tên khách hàng</Label>
                                        <Input type="text" id="name" placeholder="Enter your name" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="address">Địa chỉ</Label>
                                        <Input type="text" id="address" placeholder="Enter your address" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="email">Email</Label>
                                        <Input type="email" id="email" name="email" placeholder="Enter Email.." />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="phone">Số điện thoại</Label>
                                        <Input type="text" id="phone" placeholder="Enter your phone" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="bill-handling">Hóa đơn chờ</Label>
                                        <Input type="text" id="bill-handling" placeholder="Enter your bill-handling" disabled/>
                                    </FormGroup>
                                </ScrollArea>
                            </CardBody>
                            <CardFooter>
                                <Button className="float-right" color="success"  onClick={this.toggleUpdate}>Cập nhật</Button>
                                <Modal isOpen={this.state.modalUpdate} toggle={this.toggleUpdate}
                                       className='modal-info'>
                                    <ModalHeader toggle={this.toggleUpdate}>Thông báo</ModalHeader>
                                    <ModalBody>Cập nhật thành công !</ModalBody>
                                    <ModalFooter>
                                        <Button color="secondary" onClick={this.toggleUpdate}>Thoát</Button>
                                    </ModalFooter>
                                </Modal>
                            </CardFooter>
                        </Card>
                    </Col>

                    <Col xs="12" lg="6">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Danh sách xe
                            </CardHeader>
                            <CardBody>
                                <ScrollArea
                                    className="manage-customer-listcar">
                                    <Table>
                                        <thead>
                                        <tr>
                                            <th>Biển số xe</th>
                                            <th>Trạng thái</th>
                                            <th>Active</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>HE54631</td>
                                            <td><Badge color="success" pill>success</Badge></td>
                                            <td><Button color="link" onClick={this.toggleImportCar}>Tiếp nhận xe</Button></td>
                                        </tr>
                                        <tr>
                                            <td>BR24234</td>
                                            <td><Badge color="warning" pill>Đang xử lý</Badge></td>
                                            <td scope="row"></td>
                                        </tr>
                                        <tr>
                                            <td>HE54631</td>
                                            <td><Badge color="success" pill>success</Badge></td>
                                            <td><Button color="link" onClick={this.toggleImportCar}>Tiếp nhận xe</Button></td>
                                        </tr>
                                        <tr>
                                            <td>BR24234</td>
                                            <td><Badge color="warning" pill>Đang xử lý</Badge></td>
                                            <td scope="row"></td>
                                        </tr>
                                        <tr>
                                            <td>HE54631</td>
                                            <td><Badge color="success" pill>success</Badge></td>
                                            <td><Button color="link" onClick={this.toggleImportCar}>Tiếp nhận xe</Button></td>
                                        </tr>
                                        <tr>
                                            <td>BR24234</td>
                                            <td><Badge color="warning" pill>Đang xử lý</Badge></td>
                                            <td scope="row"></td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </ScrollArea>
                                <Modal isOpen={this.state.modalImportCar} toggle={this.toggleImportCar}
                                       className='modal-info'>
                                    <ModalHeader toggle={this.toggleImportCar}>Tiếp nhận xe</ModalHeader>
                                    <ModalBody>
                                        <FormGroup>
                                            <Label htmlFor="customer-id">Mã khách hàng</Label>
                                            <Input type="text" id="customer-id" placeholder="Enter your customer-id" disabled/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="car-id">Biển số xe</Label>
                                            <Input type="text" id="car-id" placeholder="Enter your car-id" disabled/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Ngày tiếp nhận</Label>
                                            <InputGroup>
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                                                </div>
                                                <TextMask
                                                    mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                                                    Component={InputAdapter}
                                                    className="form-control"
                                                />
                                            </InputGroup>
                                            <FormText color="muted">
                                                ex. 99/99/9999
                                            </FormText>
                                        </FormGroup>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.toggleImportCar}>Xác nhận</Button>{' '}
                                        <Button color="secondary" onClick={this.toggleImportCar}>Thoát</Button>
                                    </ModalFooter>
                                </Modal>
                            </CardBody>
                            <CardFooter>
                                <Button className="float-right" color="success" onClick={this.toggleAddCar}>Thêm xe</Button>
                                <Modal isOpen={this.state.modalAddCar} toggle={this.toggleAddCar}
                                       className='modal-info'>
                                    <ModalHeader toggle={this.toggleAddCar}>Thêm xe</ModalHeader>
                                    <ModalBody>
                                        <FormGroup>
                                            <Label htmlFor="id">Mã khách hàng</Label>
                                            <Input type="text" id="id" placeholder="Enter your id" disabled/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="car-id">Biển số xe</Label>
                                            <Input type="text" id="car-id" placeholder="Enter your car-id"/>
                                        </FormGroup>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.toggleAddCar}>Thêm</Button>{' '}
                                        <Button color="secondary" onClick={this.toggleAddCar}>Thoát</Button>
                                    </ModalFooter>
                                </Modal>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>

                <Card>
                    <CardHeader>
                        <i className="fa fa-align-justify"></i> Lịch sử giao dịch
                    </CardHeader>
                    <CardBody>
                        <Button color="link" onClick={this.toggleBill}>[ngày hóa đơn]</Button>
                        <Collapse isOpen={this.state.collapseBill}>
                            <Card>
                                <CardBody>
                                    <Table>
                                        <thead>
                                        <tr>
                                            <th>Biển số xe</th>
                                            <th>Phụ tùng</th>
                                            <th>Số lượng</th>
                                            <th>Đơn giá</th>
                                            <th>Thành tiền</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>HE234</td>
                                            <td>Bánh xe</td>
                                            <td>5</td>
                                            <td>20</td>
                                            <td>100</td>
                                        </tr>
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <th>Tổng hóa đơn</th>
                                            <td scope="row"></td>
                                            <td scope="row"></td>
                                            <td scope="row"></td>
                                            <th >0000</th>
                                        </tr>
                                        </tfoot>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Collapse>
                    </CardBody>
                </Card>
            </div>

        )
    }
}

export default HistoryTransUser;
