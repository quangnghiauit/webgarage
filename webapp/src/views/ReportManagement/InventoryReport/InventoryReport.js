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
    Col, Button
} from 'reactstrap';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from "react-dates";
import {searchInventory, searchRevenue} from "../../../api/BillManagement/billmanagement";
import moment from "moment";

class InventoryReport extends Component{
    constructor(props){
        super(props);
        this.state = {
            // startDate: moment().subtract(1,'months').format("DD/MM/YYYY"),
            // endDate: moment().format("DD/MM/YYYY"),
            startDate:null,
            endDate:null,
            list : [],
        }


    }

    onDateChange(from, to){
        console.log("nllllllllllllll")
        this.setState({
            startDate: from,
            endDate: to
        });
    };

    handleSearch() {
        const transdatefrom = this.state.startDate;
        const transdateto = this.state.endDate;
        const params = {
            startDate: transdatefrom ? moment(transdatefrom).format("DD/MM/YYYY"):null,
            endDate: transdateto ? moment(transdateto).format("DD/MM/YYYY"):null,
        };
        console.log("param", params);
        if (this.state.startDate && this.state.endDate) {
            searchInventory(params).then(res => {
                this.setState({
                    list: res.data
                }, () => console.log(this.state.list))

            }).catch(error=>{
                console.log(error)
            });
        } else {
            alert("Vui lòng chọn mốc thời gian.")
        }
    }

    render(){
        const {list} = this.state;
        return(
            <div className="animated report-revenue">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Báo cáo vật tư phụ tùng tồn kho
                    </CardHeader>
                    <CardBody>

                        <FormGroup row>
                            <Col xs={12} sm={12}>
                                <FormGroup>
                                    <Label htmlFor="name">Thời gian báo cáo</Label>
                                    <FormGroup row>
                                        <Col xs={12} sm={4}>
                                            <DateRangePicker
                                                startDate={this.state.startDate}
                                                endDate={this.state.endDate}

                                                startDateId="startDate"
                                                endDateId="endDate"

                                                startDatePlaceholderText="Từ ngày"
                                                endDatePlaceholderText="Đến ngày"

                                                displayFormat="DD/MM/YYYY"
                                                onDatesChange={
                                                    ({startDate, endDate}) => this.onDateChange(
                                                        startDate, endDate)
                                                }

                                                focusedInput={this.state.focusedInput}

                                                onFocusChange={
                                                    focusedInput => this.setState({focusedInput})
                                                }
                                                orientation={this.state.orientation}
                                                openDirection={this.state.openDirection}
                                                isOutsideRange={() => false}
                                                minimumNights={0}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Button type="button" color="primary"
                                                style={{width: "100px"}}
                                                onClick={()=>this.handleSearch()}

                                        >
                                            <i className="fa fa-search"></i>{'\u00A0'} Search
                                        </Button>

                                    </FormGroup>

                                </FormGroup>
                            </Col>
                        </FormGroup>
                        <Table id="table-report-revenue" responsive striped>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Mã vật tư</th>
                                <th>Tên vật tư</th>
                                <th>Tổng số lần nhập vào</th>
                                <th>Tổng số lượng nhập vào</th>
                                <th>Tổng số lượng xuất kho</th>
                                <th>Tổng số lượng đang tồn kho</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                list ? list.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.materialID}</td>
                                            <td>{item.materialName}</td>
                                            <td>{item.totalInput}</td>
                                            <td>{item.totalMaterialInput}</td>
                                            <td>{item.totalMaterialExport}</td>
                                            <td>{item.lastInventory}</td>
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

export default InventoryReport;