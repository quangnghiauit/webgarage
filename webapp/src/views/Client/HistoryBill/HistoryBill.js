import React, {Component} from 'react';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    InputGroup,
    Label,
    FormGroup,
    Form,
    Button,
    Table,
    Badge,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,

} from 'reactstrap';

class HistoryBill extends Component {
    constructor(props){
        super(props);

    }

    
    render() {
        return (
            <div className="animated fadeIn history-bill">
                <Card>
                    <CardHeader>Lịch sử giao dịch</CardHeader>
                    <CardBody>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Số hóa đơn</th>
                                    <th>Ngày giao dịch</th>
                                    <th>Tổng tiền</th>
                                    <th>Action</th>
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

export default HistoryBill;