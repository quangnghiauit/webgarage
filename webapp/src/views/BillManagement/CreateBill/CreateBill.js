import React, {Component} from 'react';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { TextMask, InputAdapter } from 'react-text-mask-hoc';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Label,
    InputGroup,
    FormGroup,
    Button,
    Row,
    Col,
    Table
} from 'reactstrap';




class CreateBill extends Component {

    render() {
        return (
            <div className="animated import-bill">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Hóa đơn
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label>Ngày lập</Label>
                                    <InputGroup>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                                        </div>
                                        <TextMask
                                            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                                            Component={InputAdapter}
                                            className="form-control inputDate"
                                        />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                    <Label>Khách hàng</Label>
                                    <select class="form-control" name="customer" id="select-customer">
                                        <option>Nguyen A</option>
                                        <option>T B</option>
                                        <option>CCCC</option>
                                    </select>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Label>Chi tiết hóa đơn</Label>
                        <Card>
                            <CardBody>
                                <Table responsive>
                                    <thead>
                                    <tr>
                                        <th>Mã phụ tùng</th>
                                        <th>Tên phụ tùng</th>
                                        <th>Số lượng</th>
                                        <th>Đơn giá bán</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>HI3424</td>
                                        <td>Bánh xe</td>
                                        <td>15</td>
                                        <td>23000</td>
                                    </tr>
                                    <tr>
                                        <td>IEWerw</td>
                                        <td>Lốp xe</td>
                                        <td>12</td>
                                        <td>10000</td>
                                    </tr>
                                    </tbody>
                                    <tfoot>
                                    <th>Tổng</th>
                                    <td scope="row"></td>
                                    <td scope="row"></td>
                                    <th>150000</th>
                                    </tfoot>
                                </Table>
                            </CardBody>
                        </Card>
                    </CardBody>
                    <CardFooter>
                        <Button className="float-right" color="success">Lưu</Button>
                    </CardFooter>
                </Card>
            </div>
        );
    }
}

export default CreateBill;
