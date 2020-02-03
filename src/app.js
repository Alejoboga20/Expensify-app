import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
  
const ExpenseDashboardPage = () => (
    <div>
        My dash component
    </div>
);

const AddExpensePage = () => (
    <div>
        My add component
    </div>
);

const HalepPage = () => (
    <div>
        Help
    </div>
);

const EditPage = () => (
    <div>
        Edit
    </div>
);

const NotFoundPage = () => (
    <div>
        404! - <Link to = "/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
            <NavLink to = "/" activeClassName = "is-active" exact = {true}> Home </NavLink>
            <NavLink to = "/create" activeClassName = "is-active"> Create </NavLink>
            <NavLink to = "/edit" activeClassName = "is-active"> Edit </NavLink>
            <NavLink to = "/help" activeClassName = "is-active"> Help </NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
        </div>    
        <Switch>
            <Route path = "/" component = {ExpenseDashboardPage} exact = {true}/>
            <Route path = "/create" component = {AddExpensePage} />
            <Route path = "/edit" component = {EditPage}/>
            <Route path = "/help" component = {HalepPage}/>
            <Route component = {NotFoundPage}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));