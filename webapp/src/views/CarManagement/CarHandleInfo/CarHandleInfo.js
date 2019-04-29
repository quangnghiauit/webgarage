import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { TextMask, InputAdapter } from 'react-text-mask-hoc';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label,
    Input,
    InputGroup,
    FormGroup,
    FormText,
    Button,
    Col,
    Badge,
    Table
} from 'reactstrap';


const cellEditProp = {
    mode: 'click',
    blurToSave: true
};

const materials=['bánh xe','lốp xe','kính'];

class CarHandleInfo extends Component {
    constructor(props) {
        super(props);

        this.options = {
            sortIndicator: true,
            hideSizePerPage: true,
            paginationSize: 3,
            hidePageListOnlyOnePage: true,
            clearSearch: true,
            alwaysShowAllBtns: false,
            withFirstAndLast: false,
            onRowClick: function(row) {
                alert(`You click row id: ${row.id}`);
            }
        }
    }

    render() {
        return (
            <div className="animated handle-car">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Xử lý xe
                    </CardHeader>
                    <CardBody>
                        <FormGroup row>
                            <Label htmlFor="select-car" sm={1}>Chọn xe</Label>
                            <Col sm={3}>
                                <Input type="select" id="select-car" >
                                    <option value="0">Please select</option>
                                    <option value="1">HD2342</option>
                                    <option value="2">BM3455</option>
                                    <option value="3">KI4545</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <Table>
                            <thead>
                            <tr>
                                <th>Phụ tùng</th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                                <th>Thành tiền</th>
                            </tr>
                            </thead>
                            <tbody>

                            </tbody>
                            <tfoot>
                            <tr>
                                <th>Tổng</th>
                                <td scope="row"></td>
                                <td scope="row"></td>
                                <th>25000</th>
                            </tr>
                            </tfoot>
                        </Table>
                    </CardBody>
                    <CardFooter>
                        Trạng thái : <Badge color="warning" pill>Đang xử lý</Badge> or <Badge color="success" pill>Đã hoàn thành</Badge>
                    </CardFooter>
                </Card>
            </div>
        );
    }
}

export default CarHandleInfo;
