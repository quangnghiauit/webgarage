import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Table,
    Label,
    FormGroup,
    Input,
    Button,
    Row,
    Col
} from 'reactstrap';




class BillInfo extends Component {
    constructor(props){
        super(props);

        this.state={

        }
    }
    render() {
        return (
            <div className="animated bill-info">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Hóa đơn
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col sm={6}>
                                <FormGroup>
                                    <Label htmlFor="id">Số hóa đơn</Label>
                                    <Input type="id" disabled/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="date">Ngày lập</Label>
                                    <Input type="date" value="2013-01-08"/>
                                </FormGroup>
                            </Col>
                            <Col sm={6}>
                                <FormGroup>
                                    <Label htmlFor="customer-id">Mã khách hàng</Label>
                                    <Input type="text" id="customer-id" disabled />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="customer-name">Tên khách hàng</Label>
                                    <Input type="text" id="customer-name" disabled />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label htmlFor="table-bill">Chi tiết hóa đơn</Label>
                            <Table id="table-bill" responsive>
                                <thead>
                                    <tr>
                                        <th>Mã phụ tùng</th>
                                        <th>Tên phụ tùng</th>
                                        <th>Số lượng</th>
                                        <th>Giá bán</th>
                                        <th>Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Tổng</th>
                                        <td scope="row"></td>
                                        <td scope="row"></td>
                                        <td scope="row"></td>
                                        <th>10000</th>
                                    </tr>
                                </tfoot>
                            </Table>
                        </FormGroup>
                    </CardBody>
                    <CardFooter>
                    <Button id="btn-export-bill" color="success">Xuất hóa đơn</Button>
                    </CardFooter>
                </Card>
                
            </div>
        );
    }
}

export default BillInfo;
