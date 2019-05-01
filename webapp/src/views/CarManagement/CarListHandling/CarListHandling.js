import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Table,
    Collapse,
    Input,
    FormGroup,
    Form,
    Label
} from 'reactstrap';



class CarListHandling extends Component {
    constructor(props) {
        super(props);

        this.state={ collapseCar:false, modalAddMaterials:false };
        this.toggleCar=this.toggleCar.bind(this);
        this.toggleMaterials=this.toggleMaterials.bind(this);
    }
    toggleCar(){
        this.setState({collapseCar:!this.state.collapseCar});
    }
    toggleMaterials(){
        this.setState({modalAddMaterials:!this.state.modalAddMaterials});
    }
    render() {
        return (
            <div className="animated search-car-handling">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Danh sách xe đang xử lý
                    </CardHeader>
                    <CardBody>
                        <Table responsive>
                            <thead>
                            <tr>
                                <th>Biển số xe</th>
                                <th>Khách hàng</th>
                                <th>Số điện thoại</th>
                                <th>Trạng thái</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>HE343</td>
                                <td>A</td>
                                <td>0123456789</td>
                                <td><Button color="success" onClick={this.toggleCar}>Đang xử lý</Button></td>
                            </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
                <Collapse isOpen={this.state.collapseCar}>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Xử lý xe
                            <Button onClick={this.toggleMaterials} color="link" size="sm">Thêm</Button>
                            <Modal isOpen={this.state.modalAddMaterials} toggle={this.toggleMaterials}
                                   className={'modal-info ' + this.props.className}>
                                <ModalHeader toggle={this.toggleMaterials}>Thêm phụ tùng</ModalHeader>
                                <ModalBody>
                                    <FormGroup>
                                        <Label>Phụ tùng</Label>
                                        <Input type="select" id="select-materials" >
                                            <option value="0">Please select</option>
                                            <option value="1">Kính</option>
                                            <option value="2">Lốp</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Số lượng</Label>
                                        <Input type="number" placeholder="0"/>
                                    </FormGroup>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggleMaterials}>Thêm</Button>{' '}
                                    <Button color="secondary" onClick={this.toggleMaterials}>Thoát</Button>
                                </ModalFooter>
                            </Modal>
                        </CardHeader>
                        <CardBody>
                            <Table responsive>
                                <thead>
                                <tr>
                                    <th>Phụ tùng</th>
                                    <th>Số lượng</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Kính</td>
                                    <td>15</td>
                                </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                        <CardFooter>
                            <Button onClick={this.toggleCar} color="success">Lưu</Button>{' '}
                            <Button onClick={this.toggleCar} color="secondary">Thoát</Button>
                        </CardFooter>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

export default CarListHandling;
