import React from 'react'
import { Redirect, Route } from 'react-router-dom';

export default function LoggedInRoute({ component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={props =>
                (localStorage.getItem('loginToken')) ? (
                        <Redirect to={'/'} />
                    ) : (
                        <Component {...props}/>
                    )
            }
        />
    )
}
