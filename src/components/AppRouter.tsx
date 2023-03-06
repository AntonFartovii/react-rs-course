import React, {Component} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {IRoute, routesAll} from "../routes";
import {PAGE_404} from "../constants/pages";

interface IRouterProps {

}

interface IRouterState {

}

export default class AppRouter extends Component<IRouterProps, IRouterState> {

    render() {
        return (
                <Routes>
                    {
                        routesAll.map( (route: IRoute) =>
                            <Route key={route.path} path={route.path} element={route.Component} />
                        )
                    }
                    <Route path="*" element={<Navigate to={PAGE_404}/>} />
                </Routes>

        );
    }
};

