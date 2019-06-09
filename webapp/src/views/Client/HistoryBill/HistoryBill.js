import React, {Component} from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Table} from 'reactstrap';

import {getAllBillByUser} from '../../../api/BillManagement/billmanagement'
import {getUserID} from '../../../api/Client/client'

class HistoryBill extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            userID: null
        }
        this.load = this.load.bind(this);
    }

    componentDidMount() {
        this.load();
    }

    load() {
        getUserID().then(res => {
            this.setState({
                userID: res.data.userID
            }, () => this.handleGetListBill());
        });
    }

    handleGetListBill() {
        getAllBillByUser(this.state.userID).then(res => {
            this.setState({
                list: res.data
            })
        })
    }

    toggleBill(id) {
        window.location.replace("http://localhost:8080/#client/bill-info/" + id)
    }

    render() {
        const {list} = this.state;
        return (
            <div className="animated search-bill">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Tra cứu hóa đơn
                    </CardHeader>
                    <CardBody>
                        <Table id="table-bill" responsive striped>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Mã hóa đơn</th>
                                <th>Biển số xe</th>
                                <th>Ngày tạo hóa đơn</th>
                                <th>Trạng thái</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                list ? list.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.repairBillID}</td>
                                            <td>{item.licensePlate}</td>
                                            <td>{item.createdDate}</td>
                                            <td>
                                                {
                                                    item.status == 2 ? (
                                                        <Button color="success"
                                                                onClick={() => this.toggleBill(item.repairBillID)}>Đã
                                                            thanh toán</Button>
                                                    ) : (
                                                        item.status == 1 ? (
                                                            <Button color="danger"
                                                                    onClick={() => this.toggleBill(item.repairBillID)}>Chưa
                                                                thanh toán</Button>
                                                        ) : null
                                                    )

                                                }
                                                {

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

export default HistoryBill;
