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



class ClientBillInfo extends Component {
    constructor(props){
        super(props);

    }
    
    render() {
        return (
            <div className="animated bill-info" id="bill-info">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Hóa đơn
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col sm={6}>
                                <FormGroup>
                                    <Label htmlFor="id">Số hóa đơn</Label>
                                    <Input type="text"  disabled/>
                                </FormGroup>
                            </Col>
                            <Col sm={6}>
                                <FormGroup>
                                    <Label htmlFor="date">Ngày lập</Label>
                                    <Input type="text"  disabled/>
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
                                        <th>0</th>
                                    </tr>
                                </tfoot>
                            </Table>
                        </FormGroup>
                    </CardBody>
                    <CardFooter id='footer'>
                        <Button id="btn-export-bill" color="success"
                            onClick={this.exportBill}>Xuất hóa đơn</Button>
                    </CardFooter>
                </Card>
            </div>
        );
    }
}

export default ClientBillInfo;
