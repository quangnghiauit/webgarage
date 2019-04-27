import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import {handleAction} from "../../action";
import {getRolesOfCurrentUser} from "../../api/Services/AuthService";
import {LOGIN} from "../../types/global";


class Full extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roles: []
        }
    }

    // componentDidMount() {
    //     getRolesOfCurrentUser().then()
    //     axios({
    //         method: 'GET',
    //         url: 'http://localhost:8080/api/role',
    //         withCredentials: true,
    //         headers: {
    //             Cookies: document.cookie
    //         }
    //
    //
    //     })
    //         .then(response => {
    //
    //             //console.log("Fullllllljsss",response.data);
    //             this.setState({roles: response.data});
    //
    //         })
    //         .catch(error => console.log(error));
    //     axios({
    //         method: 'GET',
    //         url: 'http://localhost:8080/api/auth',
    //         withCredentials: true,
    //         headers: {
    //             Cookies: document.cookie
    //         }
    //     })
    //         .then(response => {
    //
    //             //console.log("fullll auth",response.data)
    //             this.setState({
    //                 auth: response.data
    //
    //             })
    //         })
    //         .catch(error => console.log(error));
    //
    //
    // }

    componentDidMount() {
        getRolesOfCurrentUser().then(result => {
            this.setState({roles: result.data});
        });

        this.props.getRoles().then(result => {
            this.setState({roles: result});
        });
    }




    render() {
        //console.log("render role",this.state.roles)
        return (
            <div className="app">
                <Header/>
                <div className="app-body">
                    <Sidebar {...this.props}/>
                    <main className="main">
                        <Breadcrumb/>
                        <Container fluid>
                            {this.state.roles &&
                            (this.state.roles.indexOf("ADMIN") > -1 ||
                                this.state.roles.indexOf("SUPER_TICKET_USER") > -1 ||
                                this.state.roles.indexOf("TICKET_USER") > -1) && (
                                <Route
                                    exact
                                    path="/v2/ticket-management/ticket-dashboard"
                                    name="Ticket Dashboard"
                                    component={TicketDashboard}
                                />
                            )}

                            {this.state.roles &&
                            (this.state.roles.indexOf("ADMIN") > -1 ||
                                this.state.roles.indexOf("SUPER_TICKET_USER") > -1 ||
                                this.state.roles.indexOf("TICKET_USER") > -1) && (
                                <Route
                                    exact
                                    path="/v2/ticket-management/new-ticket"
                                    name="New Ticket"
                                    render={props => <NewTicket {...props} />}
                                />
                            )}

                            {this.state.roles &&
                            (this.state.roles.indexOf("ADMIN") > -1 ||
                                this.state.roles.indexOf("SUPER_TICKET_USER") > -1 ||
                                this.state.roles.indexOf("TICKET_USER") > -1) && (
                                <Route
                                    exact
                                    path="/v2/ticket-management/ticket-list"
                                    name="Management"
                                    component={Management}
                                />
                            )}

                            {this.state.roles &&
                            (this.state.roles.indexOf("ADMIN") > -1 ||
                                this.state.roles.indexOf("SUPER_TICKET_USER") > -1 ||
                                this.state.roles.indexOf("TICKET_USER") > -1) && (
                                <Route
                                    exact
                                    path="/v2/ticket-management/my-ticket"
                                    name="Management"
                                    component={UserManagement}
                                />
                            )}

                            {this.state.roles &&
                            (this.state.roles.indexOf("ADMIN") > -1 ||
                                this.state.roles.indexOf("SUPER_TICKET_USER") > -1 ||
                                this.state.roles.indexOf("TICKET_USER") > -1) && (
                                <Route
                                    exact
                                    path="/v2/ticket-management/detail/:ticketId"
                                    name="Detail"
                                    component={Detail}
                                />
                            )}

                            {this.state.roles &&
                            (this.state.roles.indexOf("ADMIN") > -1 ||
                                this.state.roles.indexOf("SUPER_TICKET_USER") > -1) && (
                                <Route
                                    exact
                                    path="/v2/ticket-management/settings-ticket"
                                    name="Settings Ticket"
                                    component={SettingsTicket}
                                />
                            )}

                            {this.state.roles &&
                            (this.state.roles.indexOf("ADMIN") > -1 ||
                                this.state.roles.indexOf("CS") > -1 ||
                                this.state.roles.indexOf("OPERATION") > -1) && (
                                <Route
                                    exact
                                    path="/v2/user-account/reset-pin"
                                    name="ResetPin"
                                    component={ResetPin}
                                />
                            )}
                            {this.state.roles && this.state.roles.indexOf("ADMIN") > -1 && (
                                <Route
                                    exact
                                    path="/v2/admin/role-management"
                                    name="ResetPin"
                                    component={RoleManagement}
                                />
                            )}

                            {this.state.roles && this.state.roles.indexOf("ADMIN") > -1 && (
                                <Route
                                    exact
                                    path="/v2/admin/*"
                                    name="AdminManagement"
                                    component={AdminManagement}
                                />
                            )}

                            {this.state.roles && (this.state.roles.indexOf("ADMIN") > -1 ||
                                this.state.roles.indexOf("CS") > -1) && (
                                <Route
                                    exact
                                    path="/request-management/*"
                                    name="RequestManagement"
                                    component={RequestManagement}
                                />
                            )}

                            {this.state.roles && (this.state.roles.indexOf("ADMIN") > -1 ||
                                this.state.roles.indexOf("CS") > -1
                                || this.state.roles.indexOf("EXECUTOR") > -1 ||
                                this.state.roles.indexOf("OPERATION") > -1) && (
                                <Route
                                    exact
                                    path="/v2/user-account/promotion-history"
                                    name="UserPromotionHistory"
                                    component={UserPromotionHistory}
                                />
                            )}

                            {this.state.roles && (this.state.roles.indexOf("ADMIN") > -1 ||
                                this.state.roles.indexOf("CS") > -1
                                || this.state.roles.indexOf("EXECUTOR") > -1 ||
                                this.state.roles.indexOf("OPERATION") > -1) && (
                                <Route
                                    exact
                                    path="/v2/transaction-management/*"
                                    name="TransactionManagement"
                                    component={TransactionManagement}
                                />
                            )}

                            {this.state.roles &&
                            (this.state.roles.indexOf("ADMIN") > -1 ||
                                this.state.roles.indexOf("CS") > -1 ||
                                this.state.roles.indexOf("OPERATION") > -1) && (
                                <Route
                                    exact
                                    path="/v2/user-account/*"
                                    name="UserAccount"
                                    component={UserAccountManagement}
                                />
                            )}



                            {/*<Switch>*/}
                                {/*{*/}
                                    {/*this.state.roles === '[ROLE_ADMIN]' && [*/}

                                        {/*<Route path="/dashboard" name="Dashboard" component={Dashboard}/>,*/}
                                        {/*<Redirect from="/" to="/dashboard"/>*/}
                                    {/*]*/}
                                {/*}*/}
                                {/*{*/}
                                    {/*this.state.roles === '[ROLE_ANONYMOUS]' && [*/}

                                        {/*<Redirect from="/" to="/login"/>*/}
                                    {/*]*/}
                                {/*}*/}


                            {/*</Switch>*/}
                        </Container>
                    </main>
                    <Aside/>
                </div>
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function getRoles() {
    return dispatch => {
        return handleAction(dispatch, getRolesOfCurrentUser()).then(result => {
            // console.log(result);
            let roles = [];
            roles = [...result];
            dispatch({
                type: LOGIN,
                roles
            });
            return result;
        });
    };
}

module.exports = connect(
    mapStateToProps,
    {getRoles}
)(Full);




export default Full;
