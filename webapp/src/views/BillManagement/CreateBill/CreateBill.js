import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Table,
} from 'reactstrap';




class CreateBill extends Component {
    constructor(props){
        super(props);

        this.state={

        }
    }
    render() {
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
                                <th>Số điện thoại</th>
                                <th>Địa chỉ</th>
                                <th>Ngày tạo TK</th>
                                <th>Hóa đơn chờ</th>
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

export default CreateBill;
