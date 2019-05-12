import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {
    Card,
    CardHeader,
    CardBody, Button, Table, Badge, Input,
} from 'reactstrap';
import {getAllCar} from "../../../api/CarManagement/carmanagement";

class SearchCar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            listCar:null,
        }
    }
    componentDidMount() {
        getAllCar().then(res =>{
            this.setState({
                listCar:res.data
            })

        })
    }

    render() {
        const {listCar} = this.state;
        return (
            <div className="animated search-car">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Danh sách xe
                    </CardHeader>
                    <CardBody>
                        <Table responsive striped>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Biển số</th>
                                <th>Tên khách hàng</th>
                                <th>Mã khách hàng</th>
                                <th>Số điện thoại</th>
                                <th>Trạng thái xe</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                listCar ? listCar.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.licensePlate}</td>
                                            <td>{item.displayname}</td>
                                            <td>{item.userID}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>
                                                {item.status == "0"
                                                    ?
                                                    <Badge color="primary">Chưa tiếp nhận</Badge>
                                                    :
                                                        item.status =="1"
                                                        ?
                                                            <Badge color="warning"> Đang xử lý</Badge>
                                                            :
                                                            <Badge color="succes">Đã xử lý</Badge>


                                                }
                                            </td>
                                        </tr>
                                    )

                                }) : null

                            }
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default SearchCar;
