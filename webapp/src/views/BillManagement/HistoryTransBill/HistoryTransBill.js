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




class HistoryTransBill extends Component {
    constructor(props){
        super(props);

        this.state={

        }
    }
    render() {
        return (
            <div className="animated search-bill">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Tra cứu hóa đơn
                    </CardHeader>
                    <CardBody>
                        <InputGroup className="search">
                            <Input type="text" id="search" onKeyUp={this.filterTable} placeholder="Search..." title="Enter a search info" />
                            <div className="input-group-append">
                                <i className="fa fa-search form-control" aria-hidden="true"></i>
                            </div>
                        </InputGroup>
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
