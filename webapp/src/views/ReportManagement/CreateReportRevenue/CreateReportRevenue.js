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

class CreateReportRevenue extends Component{
    constructor(props){
        super(props);


    }

    render(){
        return(
            <div className="animated report-revenue">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Báo cáo doanh thu
                    </CardHeader>
                    <CardBody>
                        <FormGroup>
                            <Row>
                                <Col sm={1}>
                                    <Label htmlFor="time">Thời gian</Label>
                                </Col>
                                <Col sm={2}>
                                    <Input type='date' id='timeFrom'/>
                                </Col>
                                <Col sm={1}>
                                    <i class="fa fa-arrow-right form-control" aria-hidden="true"></i>
                                </Col>
                                <Col sm={2}>
                                    <Input type='date' id='timeTo'/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <Table id="table-report-revenue" responsive striped>
                            <thead>
                            <tr>
                                <th>Số hóa đơn</th>
                                <th>Ngày giao dịch</th>
                                <th>Tổng tiền</th>
                            </tr>
                            </thead>
                            <tbody>
                            
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Tổng</th>
                                    <td scope='row'></td>
                                    <th>10000</th>
                                </tr>
                            </tfoot>
                        </Table>
                        
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default CreateReportRevenue