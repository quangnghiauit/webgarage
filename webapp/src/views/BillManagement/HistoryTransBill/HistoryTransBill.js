import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Table,
    Input,
    InputGroup
} from 'reactstrap';

import {getHistoryBill} from '../../../api/BillManagement/billmanagement'


class HistoryTransBill extends Component {
    constructor(props){
        super(props);

        this.state={
            list:[]
        }
        this.load=this.load.bind(this);
    }
    componentDidCatch(){
        this.load();
    }
    load(){
        getHistoryBill().then(res=>{
            this.setState({
                list:res.data
            },()=>{

            })
        })
    }

    toggleBill(id){
        window.location.replace("http://localhost:8080/#/bill-management/bill-info/"+id)
    }
    render() {
        const{list}=this.state;
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
                                    <th>LogID</th>
                                    <th>Số hóa đơn</th>
                                    <th>Ngày hóa đơn</th>
                                    <th>Mã khách hàng</th>
                                    <th>Tên khách hàng</th>
                                    <th>Số điện thoại</th>
                                    <th>Trị giá hóa đơn</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                list ? list.map((item,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.repairBillID}</td>
                                            <td>{item.createdDate}</td>
                                            <td>{item.userID}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>{item.totalMoney}</td>
                                            <td>
                                            {
                                                <Button color="success" onClick={()=>this.toggleBill(item.repairBillID)}>Xem</Button>
                                            }
                                            </td>
                                        </tr>
                                    )
                                }):null
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
