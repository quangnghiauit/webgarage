import React, {Component} from 'react';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {
    Card,
    CardHeader,
    CardBody, Table,
} from 'reactstrap';
import {getListAllMaterialName} from "../../../api/materialManagement/materialManagement";

class SearchMaterial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listSearchMaterial: [],
        }

    }

    componentDidMount() {
        this.handleSearchMaterial()
    }

    handleSearchMaterial() {
        getListAllMaterialName().then(res => {
            console.log(res.data)
            this.setState({
                listSearchMaterial:res.data
            })
        })
    }

    render() {
        const {listSearchMaterial}= this.state;
        return (
            <div className="animated search-materials">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Danh sách số lượng vật tư phụ tùng
                    </CardHeader>
                    <CardBody>
                        <Table responsive striped>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Mã phụ tùng</th>
                                <th>Tên phụ tùng</th>
                                <th>Số lượng trong kho</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                listSearchMaterial ? listSearchMaterial.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.materialID}</td>
                                            <td>{item.materialName}</td>
                                            <td>{item.totalNum}</td>
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

export default SearchMaterial;
