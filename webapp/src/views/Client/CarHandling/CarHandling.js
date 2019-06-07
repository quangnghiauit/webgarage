import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Table,
    Collapse,
    Input,
    FormGroup,
    Form,
    Label, Badge,
    Pagination,
    PaginationItem,
    PaginationLink,
    InputGroup
} from 'reactstrap';



class CarHandling extends Component {
    constructor(props) {
        super(props);
        
    }

    
    render() {
        
        return (
            <div className="animated search-car-handling">
                <Card>
                    <CardHeader>
                        <i className="icon-menu"></i>Danh sách xe đang xử lý
                    </CardHeader>
                    <CardBody>
                        
                        <Table id="table-cars-handling" responsive striped>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Biển số xe</th>
                                <th>Trạng thái</th>
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

export default CarHandling;
