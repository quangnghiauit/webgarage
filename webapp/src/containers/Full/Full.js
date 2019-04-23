import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import axios from 'axios';

import Dashboard from '../../views/Dashboard/';


class Full extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roles: [],
            auth: [],
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:8080/api/role',
            withCredentials: true,
            headers: {
                Cookies: document.cookie
            }


        })
            .then(response => {

                //console.log("Fullllllljsss",response.data);
                this.setState({roles: response.data});

            })
            .catch(error => console.log(error));
        axios({
            method: 'GET',
            url: 'http://localhost:8080/api/auth',
            withCredentials: true,
            headers: {
                Cookies: document.cookie
            }
        })
            .then(response => {

                //console.log("fullll auth",response.data)
                this.setState({
                    auth: response.data

                })
            })
            .catch(error => console.log(error));


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
                            <Switch>
                                {
                                    this.state.roles === '[ROLE_ADMIN]' && [

                                        <Route path="/dashboard" name="Dashboard" component={Dashboard}/>,
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
