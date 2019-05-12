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
    Label, Badge
} from 'reactstrap';
import {getInfoMaterialUser} from "../../../api/TransManagement/transmanagement";
import {getListCarHandling} from "../../../api/CarManagement/carmanagement";



class ListCarHandling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }

        this.state={ collapseCar:false, modalAddMaterials:false };
        this.toggleCar=this.toggleCar.bind(this);
        this.toggleMaterials=this.toggleMaterials.bind(this);

        this.handleGetListCarHandling = this.handleGetListCarHandling.bind(this);
    }

    componentDidMount() {
        this.handleGetListCarHandling()
    }

    handleGetListCarHandling() {
        getListCarHandling().then(response => {
            this.setState({
                listTable: response.data,
                list: response.data,
            })

        })
    }

    handleCar(id) {
        window.location.replace("http://localhost:8080/#/car-management/car-handle-list/"+id);
    }

    toggleCar(){
        this.setState({collapseCar:!this.state.collapseCar});
    }
    toggleMaterials(){
        this.setState({modalAddMaterials:!this.state.modalAddMaterials});
    }
    render() {
        const {list} = this.state;
        return (
            <div className="animated search-car-handling">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Danh sách xe đang xử lý
                    </CardHeader>
                    <CardBody>
                        <Table responsive striped>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Biển số xe</th>
                                <th>Tên khách hàng</th>
                                <th>Trạng thái</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                list ? list.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.licensePlate}</td>
                                            <td>{item.displayName}</td>
                                            <td>
                                                {item.status == 1
                                                    ?
                                                    <Badge color="warning" >Đang chờ xử lý</Badge>
                                                    :
                                                    <Badge color="success" >Xử lý</Badge>

                                                }
                                            </td>
                                            <td>
                                                {item.status == 1
                                                    ?
                                                    <Button color="danger" onClick={()=>this.handleCar(item.licensePlate)}>Xử lý</Button>
                                                    :
                                                    <Button color="success" onClick={this.toggleCar}>Xử lý</Button>

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

export default ListCarHandling;
