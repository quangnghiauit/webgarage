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
    Col, Badge, Table
} from 'reactstrap';
import {addTransMaterial, getInfoMaterialUser} from "../../../api/TransManagement/transmanagement";
import {addClient} from "../../../api/UserManagement/userManagement";


const cellEditProp = {
    mode: 'click',
    blurToSave: true
};

const materials=['bánh xe','lốp xe','kính'];

class HandlingCar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            licensePlate: '',
            status: '',
            repairBillID: '',
            createdDate: '',
            list: [],

            modalAdd: false,
            nestedModalAdd: false,
            closeAllAdd: false,
            resultAdd: null,
        }

        this.options = {
            sortIndicator: true,
            hideSizePerPage: true,
            paginationSize: 3,
            hidePageListOnlyOnePage: true,
            clearSearch: true,
            alwaysShowAllBtns: false,
            withFirstAndLast: false,
            onRowClick: function(row) {
                alert(`You click row id: ${row.id}`);
            }
        }


        this.toggleAdd = this.toggleAdd.bind(this);
        this.toggleNestedAdd = this.toggleNestedAdd.bind(this);
        this.toggleAllAdd = this.toggleAllAdd.bind(this);
    }

    componentDidMount() {
        this.setState({
            licensePlate: this.props.match.params.id
        }, () => this.handleGetInfoMaterialUser(this.state.licensePlate));
        console.log("userIDDDDDlistcar", this.state.licensePlate)
    }

    handleGetInfoMaterialUser(licensePlate) {
        getInfoMaterialUser(licensePlate).then(response => {
            console.log('bleeeeee', response)
            this.setState({
                listTable: response.data,
                list: response.data.carHandleDTOList,
                repairBillID: response.data.repairBillID,
                createdDate: response.data.createdDate,
                status: response.data.status
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
            infoBill: this.state.displayname,
            materialID: this.state.phoneNumber,
            reqNum: this.state.address,
        };
        console.log("param", params);
        if (this.state.materialID && this.state.reqNum) {
            addTransMaterial(this.state.repairBillID,params).then(res => {
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
        const {list,resultAdd} = this.state;
        return (
            <div className="animated handle-car">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Xử lý xe
                    </CardHeader>
                    <CardBody>
                        <FormGroup row>
                            <Label htmlFor="licensePlate" sm={1}>Biển Số</Label>
                            <Col sm={3}>
                                <Input type="text" id="id"
                                       onChange={(e) => this.setState({licensePlate: e.target.value}, () => console.log(this.state.licensePlate))}
                                       value={this.state.licensePlate}
                                       disabled/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="repairBillID" sm={1}>Hóa đơn giao dịch</Label>
                            <Col sm={3}>
                                <Input type="text" id="id"
                                       onChange={(e) => this.setState({getInfoRepairBillID: e.target.value}, () => console.log(this.state.repairBillID))}
                                       value={this.state.repairBillID}
                                       disabled/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="createdDate" sm={1}>Ngày lập hóa đơn</Label>
                            <Col sm={3}>
                                <Input type="text" id="id"
                                       onChange={(e) => this.setState({createdDate: e.target.value}, () => console.log(this.state.createdDate))}
                                       value={this.state.createdDate}
                                       disabled/>
                            </Col>
                        </FormGroup>
                        <Button color="danger" onClick={this.toggleAdd}>Thêm mới</Button>
                        <Table responsive striped>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên phụ tùng</th>
                                <th>Số lượng</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                list ? list.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.materialName}</td>
                                            <td>{item.reqNum}</td>
                                        </tr>
                                    )

                                }) : null

                            }
                            </tbody>
                        </Table>
                    </CardBody>
                    <CardFooter>
                        <Button className="float-right" color="success">Lưu</Button>
                        Trạng thái :
                        {
                            (this.state.status == 0)
                                ?
                                <Badge color="primary" pill>Chẳng có gì hihi</Badge>
                                :
                                (
                                    (this.state.status == 1)
                                        ? (
                                            <Badge color="warning" pill>Đang xử lý</Badge>
                                        )

                                        :
                                        <Badge color="success" pill>Đã hoàn thành</Badge>
                                )

                        }

                    </CardFooter>
                </Card>

                <Modal isOpen={this.state.modalAdd} toggle={this.toggleAdd}
                       className={'modal-info modal-lg modal-lg-custom'
                       + this.props.className}>
                    <ModalHeader toggle={this.toggleAdd}>Thêm phụ tùng</ModalHeader>
                    <ModalBody>
                        {/*<FormGroup>*/}
                            {/*<Label htmlFor="name">Tên khách hàng</Label>*/}
                            {/*<Input type="text" id="name" value={this.state.displayname}*/}
                                   {/*onChange={(e) => this.setState({displayname: e.target.value}, () => console.log(this.state.displayname))}*/}
                                   {/*placeholder="Enter your name" required/>*/}
                            {/*<FormText className="help-block">Please enter your name</FormText>*/}
                        {/*</FormGroup>*/}

                        <FormGroup>
                            <Label htmlFor="address">Thông tin sửa chữa</Label>
                            <Input type="text" id="infoBill" value={this.state.infoBill}
                                   onChange={(e) => this.setState({infoBill: e.target.value}, () => console.log(this.state.infoBill))}
                                   placeholder="Enter your info bill" required/>
                            <FormText className="help-block">Please enter your infoBill</FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="reqNum">Số lượng</Label>
                            <Input type="text" id="reqNum" value={this.state.reqNum}
                                   onChange={(e) => this.setState({reqNum: e.target.value}, () => console.log(this.state.reqNum))}
                                   placeholder="Enter your reqNum" required/>
                            <FormText className="help-block">Please enter your reqNum</FormText>
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

export default HandlingCar;
