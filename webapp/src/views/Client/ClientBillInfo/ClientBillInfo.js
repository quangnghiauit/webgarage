import React, {Component} from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Col, FormGroup, Input, Label, Row, Table} from 'reactstrap';
import {getDetailBill} from '../../../api/BillManagement/billmanagement'



class BillInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            repairBillID: null,
            createdDate: null,
            userID: null,
            displayname: null,

        }
        this.load = this.load.bind(this);
    }

    componentDidMount() {
        this.load();
    }

    load() {
        this.setState({
            repairBillID: this.props.match.params.id
        }, () => {
            getDetailBill(this.state.repairBillID).then(res => {
                this.setState({
                    list: res.data.detailBillDTOS,
                    createdDate: res.data.createdDate,
                    userID: res.data.userID,
                    displayname: res.data.fullName
                }, () => {

                })
            })
        })
    }

   
    render() {
        const {list,repairBillID,createdDate,userID,displayname}=this.state;
        const sum=list? (list.reduce((a,b)=>a+b,0)):0;
        return (
            <div className="animated client-bill-info">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Hóa đơn
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col sm={6}>
                                <FormGroup>
                                    <Label htmlFor="id">Số hóa đơn</Label>
                                    <Input type="text" placeholder={repairBillID} disabled/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="date">Ngày lập</Label>
                                    <Input type="text" placeholder={createdDate} disabled/>
                                </FormGroup>
                            </Col>
                            <Col sm={6}>
                                <FormGroup>
                                    <Label htmlFor="customer-id">Mã khách hàng</Label>
                                    <Input type="text" id="customer-id" placeholder={userID} disabled/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="customer-name">Tên khách hàng</Label>
                                    <Input type="text" id="customer-name" placeholder={displayname} disabled/>
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
                                {
                                    list ? list.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.materialID}</td>
                                                <td>{item.materialName}</td>
                                                <td>{item.reqNum}</td>
                                                <td>{item.price}</td>
                                                <td>{item.totalMoney}</td>
                                            </tr>
                                        )
                                    }) : null
                                }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Tổng</th>
                                        <td scope="row"></td>
                                        <td scope="row"></td>
                                        <td scope="row"></td>
                                        <th>
                                            {sum}
                                        </th>
                                    </tr>
                                </tfoot>
                            </Table>
                        </FormGroup>
                    </CardBody>
                </Card>

            </div>
        );
    }
}

export default BillInfo;
