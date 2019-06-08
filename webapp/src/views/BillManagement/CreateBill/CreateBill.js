import React, {Component} from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Table,} from 'reactstrap';
import {getBillHandling} from '../../../api/BillManagement/billmanagement'


class CreateBill extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],

        };

        this.loadListBill = this.loadListBill.bind(this);
        this.toggleCreateBill = this.toggleCreateBill.bind(this);
    }

    componentDidMount() {
        this.loadListBill()
    }

    loadListBill() {
        getBillHandling().then(res => {
            this.setState({
                list: res.data
            })
        })
    }

    toggleCreateBill(id) {
        window.location.replace("http://localhost:8080/#/bill-management/bill-info/" + id)
    }

    render() {
        const {list} = this.state;
        return (
            <div className="animated import-bill">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Lập hóa đơn
                    </CardHeader>
                    <CardBody>
                        <Table id="table-users" responsive striped>
                            <thead>
                            <tr>
                                <th>LogID</th>
                                <th>Mã khách hàng</th>
                                <th>Tên khách hàng</th>
                                <th>Ngày tạo TK</th>
                                <th>Hóa đơn chờ</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                list ? list.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.userID}</td>
                                            <td>{item.fullName}</td>
                                            <td>{item.createdDate}</td>
                                            <td>
                                                {
                                                    <Button color="warning"
                                                            onClick={() => this.toggleCreateBill(item.repairBillID)}>Tạo</Button>
                                                }
                                            </td>
                                        </tr>
                                    );
                                }) : null
                            }
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

export default CreateBill;
