import React,{Component} from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Table,
    Badge,
    Pagination,
    PaginationItem,
    PaginationLink,
    InputGroup,
    Input,
    FormGroup,
    Label,
    Row,
    Col
} from 'reactstrap';

class CreateReportInventory extends Component{
    constructor(props){
        super(props);


    }

    render(){
        return(
            <div className="animated report-inventory">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Báo cáo tồn
                    </CardHeader>
                    <CardBody>
                        
                        <Table id="table-report-inventory" responsive striped>
                            <thead>
                            <tr>
                                <th>LogID</th>
                                <th>Mã phụ tùng</th>
                                <th>Tên phụ tùng</th>
                                <th>Đơn giá</th>
                                <th>Số lượng</th>
                            </tr>
                            </thead>
                            <tbody>
                            
                            </tbody>
                        </Table>
                        
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default CreateReportInventory