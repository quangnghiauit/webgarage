import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';
import axios from 'axios';

import Dashboard from '../../views/Dashboard/';

// UserManagement
import SearchUser from '../../views/UserManagement/SearchUser/SearchUser';
import UserInfo from '../../views/UserManagement/UserInfo/UserInfo';
import HistoryTransUser from '../../views/UserManagement/HistoryTransUser/HistoryTransUser';

// CarManagement
import SearchCar from '../../views/CarManagement/SearchCar/SearchCar';
import CarHandleInfo from '../../views/CarManagement/CarHandleInfo/CarHandleInfo';
import HandlingCar from '../../views/CarManagement/HandlingCar/HandlingCar';
import ListCarHandling from '../../views/CarManagement/ListCarHandling/ListCarHandling';


// MaterialManagement
import SearchMaterial from '../../views/MaterialManagement/SearchMaterial/SearchMaterial';
import HistoryMaterial from '../../views/MaterialManagement/HistoryMaterial/HistoryMaterial';
import ImportMaterial from '../../views/MaterialManagement/ImportMaterial/ImportMaterial';

// BillManagement
import CreateBill from '../../views/BillManagement/CreateBill/CreateBill';
import HistoryTransBill from '../../views/BillManagement/HistoryTransBill/HistoryTransBill';

// ReportManagement
import CreateReportInventory from '../../views/ReportManagement/CreateReportInventory/CreateReportInventory';
import CreateReportRevenue from '../../views/ReportManagement/CreateReportRevenue/CreateReportRevenue';


// AdminManagement
import UserManagement from '../../views/AdminManagement/UserManagement/UserManagement';
import RoleManagement from '../../views/AdminManagement/RoleManagement/RoleManagement';


import {getRole} from "../../api/Role/role";


class Full extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roles: []
        }
    }

    componentDidMount() {
        getRole()
            .then(response => {
                this.setState({roles: response.data});
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="app">
                <Header/>
                <div className="app-body">
                    <Sidebar {...this.props}/>
                    <main className="main">
                        <Breadcrumb/>
                        <Container fluid>
                            <Switch>
                                {
                                    this.state.roles === '[ROLE_ADMIN]' && [

                                        <Route path="/dashboard" name="Dashboard" component={Dashboard}/>,

                                        <Route path="/user-management/search" name="SearchUser"
                                               component={SearchUser}/>,
                                        <Route path="/user-management/history/:id" name="HistoryTransUser"
                                               component={HistoryTransUser}/>,
                                        <Route path="/user-management/user-info" name="UserInfo" component={UserInfo}/>,

                                        <Route path="/car-management/car-handle-list/:id" name="HandlingCar"
                                               component={HandlingCar}/>,
                                        <Route path="/car-management/car-handle-info/:id" name="CarHandleInfo"
                                               component={CarHandleInfo}/>,
                                        <Route path="/car-management/list-car-handling" name="ListCarHandling"
                                               component={ListCarHandling}/>,


                                        <Redirect from="/" to="/dashboard"/>
                                    ]
                                }
                                {
                                    this.state.roles === '[ROLE_ANONYMOUS]' && [

                                        <Redirect from="/" to="/login"/>
                                    ]
                                }


                            </Switch>
                        </Container>
                    </main>
                    <Aside/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Full;
