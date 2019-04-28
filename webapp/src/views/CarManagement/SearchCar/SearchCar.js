import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import data from './_data';
import {
    Card,
    CardHeader,
    CardBody,
} from 'reactstrap';

class SearchCar extends Component {
    constructor(props) {
        super(props);

        this.table = data.rows;
        this.options = {
            sortIndicator: true,
            hideSizePerPage: true,
            paginationSize: 3,
            hidePageListOnlyOnePage: true,
            clearSearch: true,
            alwaysShowAllBtns: false,
            withFirstAndLast: false,
            onRowClick: function(row) {
                window.location.replace("http://localhost:8080/#/marketing-staff/manage-customer");
            }
        }
    }
    render() {
        return (
            <div className="animated search-car">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Danh sách xe
                    </CardHeader>
                    <CardBody>
                        <BootstrapTable data={this.table} version="4" striped hover pagination search options={this.options} >
                            <TableHeaderColumn isKey dataField="id" dataSort>Biển số xe</TableHeaderColumn>
                            <TableHeaderColumn dataField="customer" dataSort>Tên khách hàng</TableHeaderColumn>
                            <TableHeaderColumn dataField="phone" >Số điện thoại</TableHeaderColumn>
                            <TableHeaderColumn dataField="status" dataSort>Trạng thái</TableHeaderColumn>
                        </BootstrapTable>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default SearchCar;
