import React from 'react'
import PropTypes from 'prop-types';

import { Route, Switch } from 'react-router-dom'
import JobsPage from '../Jobs';
import LoginPage from '../Login';

const ROUTES = [
    { path: "/jobs", exact: false, component: JobsPage },
    { path: "/", exact: true, component: LoginPage },
]

export default function AppRoutes({ authUser }) {

    const appRoutes = authUser
        ? ROUTES.map(r => <Route key={r.path} path={r.path} exact={r.exact} component={r.component} />)
        : <Route key="/" path="/" exact component={LoginPage} />

    return (
        <Switch>
            {appRoutes}
        </Switch>
    )
}

AppRoutes.propTypes = {
    authUser: PropTypes.bool.isRequired,
}
