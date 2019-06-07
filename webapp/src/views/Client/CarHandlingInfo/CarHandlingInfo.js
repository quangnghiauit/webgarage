import React, {Component} from 'react';
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
    Badge,
    Table, Row
} from 'reactstrap';


class CarHandlingInfo extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="animated handle-car">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Chi tiết sử lý xe
                    </CardHeader>
                    <CardBody>
                        <FormGroup row>
                            <Label htmlFor="licensePlate" sm={2}>Biển Số</Label>
                            <Col sm={6}>
                                <Input type="text" id="id"
                                       disabled/>
                            </Col>
                        </FormGroup>
                                
                        <Table responsive striped>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên phụ tùng</th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                                <th>Thành tiền</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            
                            </tbody>
                        </Table>
                    </CardBody>
                    <CardFooter>
                        
                    </CardFooter>
                </Card>
            </div>
        );
    }
}

export default CarHandlingInfo;
