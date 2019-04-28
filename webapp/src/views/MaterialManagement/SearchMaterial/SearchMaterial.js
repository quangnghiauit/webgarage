import React, {Component} from 'react';
import { TextMask, InputAdapter } from 'react-text-mask-hoc';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import data from './_data';
import {
    Card,
    CardHeader,
    CardBody,
} from 'reactstrap';

class SearchMaterial extends Component {
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

        }
    }

    render() {
        return (
            <div className="animated search-materials">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Danh sách vật tư phụ tùng
                    </CardHeader>
                    <CardBody>
                        <BootstrapTable data={this.table} version="4" striped hover pagination search options={this.options} >
                            <TableHeaderColumn isKey dataField="id" dataSort>Mã vật tư</TableHeaderColumn>
                            <TableHeaderColumn dataField="name" dataSort>Tên vật tư</TableHeaderColumn>
                            <TableHeaderColumn dataField="count" >Số lượng</TableHeaderColumn>
                            <TableHeaderColumn dataField="price" dataSort>Đơn giá</TableHeaderColumn>
                        </BootstrapTable>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default SearchMaterial;
