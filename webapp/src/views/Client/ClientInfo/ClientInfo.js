import React, {Component} from 'react';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    Label,
    FormGroup,
    Button,
    Table,
    
} from 'reactstrap';

class ClientInfo extends Component {
    constructor(props){
        super(props);

    }

    render() {
       
        return (
            <div className="animated fadeIn history-trans-user">
                <Row>
                    <Col xs="12" lg="6">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Thông tin khách hàng
                            </CardHeader>
                            <CardBody >
                                    <FormGroup>
                                        <Label htmlFor="id">Mã khách hàng</Label>
                                        <Input type="text" id="id" placeholder="Enter your id"
                                                disabled/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="name">Tên khách hàng</Label>
                                        <Input type="text" id="name" placeholder="Enter your name"
                                                />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="address">Địa chỉ</Label>
                                        <Input type="text" id="address" placeholder="Enter your address"
                                                />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="email">Email</Label>
                                        <Input type="email" id="email" name="email" placeholder="Enter Email.."
                                                />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="phone">Số điện thoại</Label>
                                        <Input type="text" id="phone" placeholder="Enter your phone"
                                                />
                                    </FormGroup>
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
                            <CardBody id="list-cars">
                            
                                    <Table id="table-cars" responsive striped>
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Biển số xe</th>
                                            <th>Trạng thái</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        
                                        </tbody>
                                    </Table>
                                    
                            </CardBody>
                            <CardFooter>
                                <Button className="float-right" color="success" onClick={this.toggleAdd}>Thêm xe</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>

            </div>

        )
    }
}

export default ClientInfo;
