import React, {Component} from 'react';
import {Card, CardBody, CardFooter, CardHeader, Table} from 'reactstrap';

import {getHistoryBill} from '../../../api/BillManagement/billmanagement'
import {getUserID} from '../../../api/Client/client'

class HistoryBill extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            userID:null
        }
        this.load = this.load.bind(this);
    }

    componentDidCatch() {
        this.load();
    }

    load() {
        getHistoryBill().then(res => {
            this.setState({
                list: res.data
            }, () => {
            })
        })
        getUserID().then(res=>{
            this.setState({
                userID:res.data.userID
            });
        });
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
                                <th>LogID</th>
                                <th>Số hóa đơn</th>
                                <th>Ngày hóa đơn</th>
                                <th>Trị giá hóa đơn</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                list ? list.map((item, index) => 
                                    item.userID==this.state.userID?
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{item.repairBillID}</td>
                                            <td>{item.createdDate}</td>
                                            <td>{item.totalMoney}</td>
                                            <td>
                                                {
                                                    <Button color="success"
                                                            onClick={() => this.toggleBill(item.repairBillID)}>Xem</Button>
                                                }
                                            </td>
                                        </tr>
                                        :null                                    
                                ) : null
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
