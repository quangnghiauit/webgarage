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

            curPaItem: 1,
            maxRows: 10,
            maxPaItems: 3,
            definePa: [],
            filterPa: []
        }

        this.filterPa = this.filterPa.bind(this);
        this.togglePa = this.togglePa.bind(this);
        this.toggleNext = this.toggleNext.bind(this);
        this.togglePre = this.togglePre.bind(this);
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
                }, () => {
                    const table = document.getElementById('table-report-revenue');
                    const tr = table.getElementsByTagName('tr');
                    if (tr.length - 1 > this.state.maxRows) {
                        let temp = [];
                        for (let i = 1; i <= Math.ceil((tr.length - 1) / this.state.maxRows); i++)
                            temp.push(i);
                        this.setState({definePa: temp},
                            () => {
                                if (this.state.definePa.length - this.state.curPaItem + 1 >= this.state.maxPaItems) {
                                    let temp = [];
                                    for (let i = this.state.curPaItem - 1; i < this.state.curPaItem + this.state.maxPaItems - 1; i++) {
                                        temp.push(this.state.definePa[i]);
                                    }
                                    this.setState({filterPa: temp});
                                } else {
                                    let temp = [];
                                    if (this.state.definePa.length - this.state.maxPaItems >= 0)
                                        for (let i = this.state.definePa.length - this.state.maxPaItems; i < this.state.definePa.length; i++)
                                            temp.push(this.state.definePa[i]);
                                    else {
                                        temp = [...this.state.definePa];
                                    }
                                    this.setState({filterPa: temp});
                                }
                            });
                    } else
                        this.setState({definePa: [1]},
                            () => {
                                this.setState({filterPa: this.state.definePa});
                            });
                    this.filterPa();
                })

            }).catch(error=>{
                console.log(error)
            });
        } else {
            alert("Vui lòng chọn mốc thời gian.")
        }
    }

    filterPa() {
        const table = document.getElementById('table-report-revenue');
        const tr = table.getElementsByTagName('tr');
        for (let i = 1; i < tr.length; i++) {
            if ((i >= (this.state.curPaItem - 1) * this.state.maxRows + 1) && (i <= this.state.curPaItem * this.state.maxRows))
                tr[i].style.display = '';
            else
                tr[i].style.display = 'none';
        }
    }

    togglePre() {
        if (this.state.curPaItem > 1) {
            this.setState({
                curPaItem: this.state.curPaItem - 1
            }, () => {
                this.filterPa();
                if (this.state.definePa.length - this.state.curPaItem + 1 >= this.state.maxPaItems) {
                    let temp = [];
                    for (let i = this.state.curPaItem - 1; i < this.state.curPaItem + this.state.maxPaItems - 1; i++) {
                        temp.push(this.state.definePa[i]);
                    }
                    this.setState({filterPa: temp});
                } else {
                    let temp = [];
                    if (this.state.definePa.length - this.state.maxPaItems >= 0)
                        for (let i = this.state.definePa.length - this.state.maxPaItems; i < this.state.definePa.length; i++)
                            temp.push(this.state.definePa[i]);
                    else {
                        temp = [...this.state.definePa];
                    }
                    this.setState({filterPa: temp});
                }
            });
        }
    }

    toggleNext() {
        if (this.state.curPaItem * this.state.maxRows < this.state.list.length) {
            this.setState({
                curPaItem: this.state.curPaItem + 1
            }, () => {
                this.filterPa();
                if (this.state.definePa.length - this.state.curPaItem + 1 >= this.state.maxPaItems) {
                    let temp = [];
                    for (let i = this.state.curPaItem - 1; i < this.state.curPaItem + this.state.maxPaItems - 1; i++) {
                        temp.push(this.state.definePa[i]);
                    }
                    this.setState({filterPa: temp});
                } else {
                    let temp = [];
                    if (this.state.definePa.length - this.state.maxPaItems >= 0)
                        for (let i = this.state.definePa.length - this.state.maxPaItems; i < this.state.definePa.length; i++)
                            temp.push(this.state.definePa[i]);
                    else {
                        temp = [...this.state.definePa];
                    }
                    this.setState({filterPa: temp});
                }
            });
        }
    }

    togglePa(i) {
        this.setState({
                curPaItem: i
            }, () => {
                this.filterPa()
            }
        );
    }

    render(){
        const {list} = this.state;
        const listPaItems = this.state.filterPa.map((i, index) =>
            this.state.curPaItem === i ?
                <PaginationItem key={index} active id={'paItem' + i}>
                    <PaginationLink onClick={() => this.togglePa(i)}>{i}</PaginationLink>
                </PaginationItem>
                :
                <PaginationItem key={index} id={'paItem' + i}>
                    <PaginationLink onClick={() => this.togglePa(i)}>{i}</PaginationLink>
                </PaginationItem>
        );
        return(
            <div className="animated report-revenue">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Báo cáo vật tư phụ tùng tồn kho
                    </CardHeader>
                    <CardBody>
                            <Label htmlFor="name">Thời gian báo cáo</Label>
                            <FormGroup >
                                <Row>
                                <Col sm={4}>
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
                                 <Col sm={3}> 
                                <Button type="button" color="primary"
                                        style={{width: "100px"}}
                                        onClick={()=>this.handleSearch()}

                                >
                                    <i className="fa fa-search"></i>{'\u00A0'} Search
                                </Button>
                                </Col>  
                                </Row>
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
                        {
                            this.state.list.length!=0 ?
                            <Pagination id="pagination">
                                <PaginationItem>
                                    <PaginationLink previous onClick={this.togglePre}/>
                                </PaginationItem>
                                {listPaItems}
                                <PaginationItem>
                                    <PaginationLink next onClick={this.toggleNext}/>
                                </PaginationItem>
                            </Pagination>
                            : null
                        }
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default InventoryReport;