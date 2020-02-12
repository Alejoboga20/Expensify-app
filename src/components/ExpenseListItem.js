import React from 'react';
import { NavLink } from 'react-router-dom';

const ExpenseListItem = ({ description, amount, createdAt, id }) => (

    <div>
        <NavLink 
            to={`edit/${id}`} 
            activeClassName="is-active" 
            exact={true}
        >
            <h3>{description}</h3>
        </NavLink>
        <p>{amount} - {createdAt} - {id}</p>
    </div>
);



export default (ExpenseListItem);