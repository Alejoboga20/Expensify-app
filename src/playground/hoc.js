import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>Private Info</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <p>Welcome</p> : <p>Please Login</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

//const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo info = "Details" isAdmin = {true} />, document.getElementById('app'));
ReactDOM.render(<AuthInfo info = "Details" isAuthenticated = {false} />, document.getElementById('app'));