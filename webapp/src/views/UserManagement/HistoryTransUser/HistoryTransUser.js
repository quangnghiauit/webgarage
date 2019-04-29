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
import {addClient, getInfoClient, updateClient} from "../../../api/UserManagement/userManagement";
import {getListCarByUserID} from "../../../api/CarManagement/carmanagement";

class HistoryTransUser extends Component {
    constructor(props){
        super(props);

        this.state={
            userID :'',
            displayname:'' ,
            address:'',
            email:'',
            phoneNumber:'',
            user:[],
            resultUpdateUser: null,
            nestedModalUpdateUser: false,
            closeAllUpdateUser: false,
            modalUpdate:false,
            listCar:[],
            modalAddCar:false,
            modalImportCar:false,
            collapseBill:false
        };
        this.toggleAddCar=this.toggleAddCar.bind(this);
        this.toggleImportCar=this.toggleImportCar.bind(this);
        this.toggleUpdate=this.toggleUpdate.bind(this);
        this.toggleBill=this.toggleBill.bind(this);
        this.toggleNestedUpdateUser = this.toggleNestedUpdateUser.bind(this);

    }

    componentDidMount() {
        this.setState({
            userID:this.props.match.params.id
        },()=>this.handleGetInfoUser(this.state.userID));
        console.log("userIDDDDDlistcar",this.state.userID)
        // this.handleGetListCarByUserID(this.state.userID)
        // console.log("userIDDDDD",this.state.userID)
    }

    handleGetInfoUser(userID) {
        getInfoClient(userID).then(res=>{
            this.setState({
                userID :res.data.userID,
                displayname:res.data.displayname ,
                address:res.data.address,
                email:res.data.email,
                phoneNumber:res.data.phoneNumber,
                user : res.data
            })
        })

        getListCarByUserID(userID).then(res => {
            this.setState({
                listCar:res.data
            },()=>console.log("list car: ",this.state.listCar))
        })
    }

    // handleGetListCarByUserID(userID) {
    //
    // }

    handleUpdateUser(userID) {
        console.log("jfutruytytrtyeytr")
        const requestParams ={
            displayname : this.state.displayname,
            address:this.state.address,
            email:this.state.email,
            phoneNumber:this.state.phoneNumber

        }
        if (this.state.displayname && this.state.phoneNumber) {
            updateClient(userID,requestParams).then(res => {
                console.log("wesdufyusig",res)
                this.setState({
                    resultUpdateUser: res.data
                },()=>this.toggleNestedUpdateUser())

            })
        } else {
            alert("Vui lòng điền đầy đủ tên và số điện thoại.")
        }

    }

    toggleNestedUpdateUser() {
        this.setState({
            nestedModalUpdateUser: !this.state.nestedModalUpdateUser,
        });
    }
    toggleAllUpdateUser() {
        this.setState({
            nestedModalUpdateUser: !this.state.nestedModalUpdateUser,
        });
        window.location.reload();
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
        const {user,resultUpdateUser,listCar} = this.state;
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
                                        <Input type="text" id="id" placeholder="Enter your id"
                                               onChange={(e) => this.setState({userID: e.target.value}, () => console.log(this.state.userID))}
                                               value={this.state.userID}
                                                disabled/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="name">Tên khách hàng</Label>
                                        <Input type="text" id="name" placeholder="Enter your name"
                                               onChange={(e) => this.setState({displayname: e.target.value}, () => console.log(this.state.displayname))}
                                               value={this.state.displayname}
                                                />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="address">Địa chỉ</Label>
                                        <Input type="text" id="address" placeholder="Enter your address"
                                               onChange={(e) => this.setState({address: e.target.value}, () => console.log(this.state.address))}
                                               value={this.state.address}
                                                />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="email">Email</Label>
                                        <Input type="email" id="email" name="email" placeholder="Enter Email.."
                                               onChange={(e) => this.setState({email: e.target.value}, () => console.log(this.state.email))}
                                               value={this.state.email}
                                                />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="phone">Số điện thoại</Label>
                                        <Input type="text" id="phone" placeholder="Enter your phone"
                                               onChange={(e) => this.setState({phoneNumber: e.target.value}, () => console.log(this.state.phoneNumber))}
                                               value={this.state.phoneNumber}
                                                />
                                    </FormGroup>
                                </ScrollArea>
                            </CardBody>
                            <CardFooter>
                                <Button className="float-right" color="success"  onClick={()=>this.handleUpdateUser(this.state.userID)}>Cập nhật</Button>
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
                                    <Table responsive striped>
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Biển số xe</th>
                                            <th>Trạng thái</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            listCar ? listCar.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.id}</td>
                                                        <td>{item.licensePlate}</td>
                                                        <td>{ (item.status == 0)
                                                            ?(
                                                                (item.status == 1)
                                                            ?
                                                                    <Badge color="danger">Đang xử lý</Badge>
                                                                    :
                                                                    <Badge color="success">Đã xử lý</Badge>
                                                            )
                                                            :
                                                            <Badge color="secondary">Chưa xử lý</Badge>
                                                        }</td>
                                                        <td>
                                                            {
                                                                (item.status == 0)
                                                                    ?(
                                                                        (item.status == 1)
                                                                            ?
                                                                            <Button color="success" >Không có</Button>
                                                                            :
                                                                            <Button color="success" >Không có</Button>
                                                                    )
                                                                    :
                                                                    <Button color="success" >Không có</Button>
                                                            }
                                                        </td>
                                                    </tr>
                                                )

                                            }) : null

                                        }
                                        </tbody>
                                    </Table>
                                    {/*<Table>*/}
                                        {/*<thead>*/}
                                        {/*<tr>*/}
                                            {/*<th>Biển số xe</th>*/}
                                            {/*<th>Trạng thái</th>*/}
                                            {/*<th>Active</th>*/}
                                        {/*</tr>*/}
                                        {/*</thead>*/}
                                        {/*<tbody>*/}
                                        {/*<tr>*/}
                                            {/*<td>HE54631</td>*/}
                                            {/*<td><Badge color="success" pill>success</Badge></td>*/}
                                            {/*<td><Button color="link" onClick={this.toggleImportCar}>Tiếp nhận xe</Button></td>*/}
                                        {/*</tr>*/}
                                        {/*<tr>*/}
                                            {/*<td>BR24234</td>*/}
                                            {/*<td><Badge color="warning" pill>Đang xử lý</Badge></td>*/}
                                            {/*<td scope="row"></td>*/}
                                        {/*</tr>*/}
                                        {/*<tr>*/}
                                            {/*<td>HE54631</td>*/}
                                            {/*<td><Badge color="success" pill>success</Badge></td>*/}
                                            {/*<td><Button color="link" onClick={this.toggleImportCar}>Tiếp nhận xe</Button></td>*/}
                                        {/*</tr>*/}
                                        {/*<tr>*/}
                                            {/*<td>BR24234</td>*/}
                                            {/*<td><Badge color="warning" pill>Đang xử lý</Badge></td>*/}
                                            {/*<td scope="row"></td>*/}
                                        {/*</tr>*/}
                                        {/*<tr>*/}
                                            {/*<td>HE54631</td>*/}
                                            {/*<td><Badge color="success" pill>success</Badge></td>*/}
                                            {/*<td><Button color="link" onClick={this.toggleImportCar}>Tiếp nhận xe</Button></td>*/}
                                        {/*</tr>*/}
                                        {/*<tr>*/}
                                            {/*<td>BR24234</td>*/}
                                            {/*<td><Badge color="warning" pill>Đang xử lý</Badge></td>*/}
                                            {/*<td scope="row"></td>*/}
                                        {/*</tr>*/}
                                        {/*</tbody>*/}
                                    {/*</Table>*/}
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
                <Modal isOpen={this.state.nestedModalUpdateUser}
                       toggle={() => this.toggleNestedUpdateUser()}
                       onClosed={() => this.toggleAllUpdateUser()}
                       className={'modal-info ' + this.props.className} centered>
                    <ModalHeader toggle={() => this.toggleNestedUpdateUser()}>Thông
                        báo</ModalHeader>
                    <ModalBody>
                        {resultUpdateUser ?
                            resultUpdateUser.returnMessage : null
                        }
                    </ModalBody>
                </Modal>
            </div>

        )
    }
}

export default HistoryTransUser;
