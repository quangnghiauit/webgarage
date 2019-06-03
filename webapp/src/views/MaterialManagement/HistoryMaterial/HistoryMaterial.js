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
import {
    addHistoryMaterial, addMaterialName,
    getListMaterial,
    getListMaterialName
} from "../../../api/materialManagement/materialManagement";

class HistoryMaterial extends Component {
    constructor(props) {
        super(props);

        this.state = {
            materialID:'',
            materialName:'',
            newMaterialName:'',
            price:'',
            numInput:'',
            listTable: [],
            resultList: [],
            listMaterialName:[],
            resultAdd: null,
            modalAdd: false,
            nestedModalAdd: false,
            closeAllAdd: false,

            resultAddName: null,
            modalAddName: false,
            nestedModalAddName: false,
            closeAllAddName: false,
        }

        this.toggleAddMaterials= this.toggleAddMaterials.bind(this);
        this.toggleAdd = this.toggleAdd.bind(this);
        this.toggleNestedAdd = this.toggleNestedAdd.bind(this);
        this.toggleAllAdd = this.toggleAllAdd.bind(this);

        this.toggleAddName = this.toggleAddName.bind(this);
        this.toggleNestedAddName = this.toggleNestedAddName.bind(this);
        this.toggleAllAddName = this.toggleAllAddName.bind(this);
    }

    componentDidMount() {

        this.handleSearch()
        this.handleGetListMaterialName()

    }

    handleSearch() {

        getListMaterial().then(response => {
            this.setState({
                listTable: response.data,
                resultList: response.data
            })

        })
    }

    handleGetListMaterialName() {
        getListMaterialName().then(res => {
            this.setState({
                listMaterialName:res.data
            })
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

    toggleAddMaterials() {
        this.setState({
            modalAdd: !this.state.modalAdd
        });
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
        this.setState({
            modalAdd: !this.state.modalAdd
        });
    }

    toggleAddName() {
        this.setState({
            modalAddName: !this.state.modalAddName
        });
    }

    toggleNestedAddName() {
        this.setState({
            nestedModalAddName: !this.state.nestedModalAddName,
            closeAllAddName: false
        });
    }

    toggleAllAddName() {
        this.setState({
            nestedModalAddName: !this.state.nestedModalAddName,
            closeAllAddName: true
        });
        window.location.reload();
    }

    toggleAddNameMaterial() {
        this.setState({
            closeAllAdd: false,
            modalAddName: !this.state.modalAddName

        });
    }

    handleAddMaterialName() {
        if (this.state.newMaterialName) {
            addMaterialName(this.state.newMaterialName).then(res => {
                console.log('truoc add', res)
                this.setState({
                    resultAddName: res.data
                }, () => this.toggleNestedAddName())

            })
        } else {
            alert("Vui lòng điền đầy đủ thông tin.")
        }
    }

    render() {
        const {resultList, resultAdd,resultAddName,listMaterialName} = this.state;
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
                    {/*<CardFooter>*/}
                        {/*<Button className="float-right" color="success">Lưu</Button>*/}
                    {/*</CardFooter>*/}
                </Card>

                <Modal isOpen={this.state.modalAdd} toggle={this.toggleAdd}
                       className={'modal-info modal-lg modal-lg-custom'
                       + this.props.className}>
                    <ModalHeader toggle={this.toggleAdd}>Thêm phụ tùng</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label htmlFor="name">Tên phụ tùng</Label>
                            <Button color="success"
                                    onClick={() => this.toggleAddNameMaterial()}>+</Button>
                            <select
                                className="form-control"
                                id={"listMaterial"}
                                onChange={(e) => this.setState({materialID: e.target.value},()=>console.log(this.state.materialID))}>
                                <option value={null}>Chọn tên phụ tùng</option>
                                {listMaterialName.map(item => {
                                    return (
                                        <option key={item.id} value={item.materialID}>
                                            {
                                                item.materialName
                                            }
                                        </option>
                                    );
                                })}
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="reqNum">Số lượng</Label>
                            <Input type="text" id="reqNum" value={this.state.numInput}
                                   onChange={(e) => this.setState({numInput: e.target.value})}
                                   placeholder="Enter your reqNum" required/>
                            <FormText className="help-block">Please enter your reqNum</FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="reqNum">Đơn giá</Label>
                            <Input type="text" id="reqNum" value={this.state.price}
                                   onChange={(e) => this.setState({price: e.target.value})}
                                   placeholder="Enter your price" required/>
                            <FormText className="help-block">Please enter your price</FormText>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary"
                                onClick={() => this.handleAddMaterial()}>Submit</Button>{' '}
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


                <Modal isOpen={this.state.modalAddName} toggle={this.toggleAddName}
                       className={'modal-info modal-lg modal-lg-custom'
                       + this.props.className}>
                    <ModalHeader toggle={this.toggleAddName}>Thêm tên phụ tùng mới</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label htmlFor="name">Tên phụ tùng mới</Label>
                            <Input type="text" id="newMaterialName" value={this.state.newMaterialName}
                                   onChange={(e) => this.setState({newMaterialName: e.target.value})}
                                   placeholder="Enter your name new material" required/>
                            <FormText className="help-block">Please enter your name new material</FormText>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary"
                                onClick={() => this.handleAddMaterialName()}>Submit</Button>{' '}
                        <Button color="secondary" onClick={this.toggleAddName}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.nestedModalAddName}
                       toggle={() => this.toggleNestedAddName()}
                       onClosed={this.state.closeAllAddName ? () => this.toggleAddName()
                           : undefined}
                       className={'modal-info ' + this.props.className} centered>
                    <ModalHeader toggle={() => this.toggleAllAddName()}>Thông
                        báo</ModalHeader>
                    <ModalBody>
                        {resultAddName ?
                            "Thêm tên vật tư mới thành công" : null
                        }
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default HistoryMaterial;
