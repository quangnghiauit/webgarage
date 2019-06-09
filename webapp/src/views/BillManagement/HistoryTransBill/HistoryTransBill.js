import React, {Component} from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Table} from 'reactstrap';

import {getHistoryBill} from '../../../api/BillManagement/billmanagement'


class HistoryTransBill extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        }
        this.load = this.load.bind(this);
    }

    componentDidMount() {
        this.load();
    }

    load() {
        getHistoryBill().then(res => {
            this.setState({
                list: res.data
            })
        })
    }

    toggleBill(id) {
        window.location.replace("http://localhost:8080/#/bill-management/bill-info/" + id)
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
                        {/* <InputGroup className="search">
                            <Input type="text" id="search" onKeyUp={this.filterTable} placeholder="Search..." title="Enter a search info" />
                            <div className="input-group-append">
                                <i className="fa fa-search form-control" aria-hidden="true"></i>
                            </div>
                        </InputGroup> */}
                        <Table id="table-bill" responsive striped>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Mã hóa đơn</th>
                                <th>Biển số xe</th>
                                <th>Mã khách hàng</th>
                                <th>Tên khách hàng</th>
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
                                            <td>{item.userID}</td>
                                            <td>{item.fullName}</td>
                                            <td>{item.createdDate}</td>
                                            <td>
                                                {
                                                    item.status == 2 ? (
                                                        <Button color="success"
                                                                onClick={() => this.toggleBill(item.repairBillID)}>Đã thanh toán</Button>
                                                    ) : (
                                                        item.status == 1 ? (
                                                            <Button color="danger"
                                                                    onClick={() => this.toggleBill(item.repairBillID)}>Chưa thanh toán</Button>
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

export default HistoryTransBill;
