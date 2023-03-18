import React from 'react';
import {IRoute, routesPages} from "../routes";
import {NavLink} from "react-router-dom";


interface IRouterProps {
    showClassName?: ({isActive}: {isActive: boolean}) => string
}

interface IRouterState {

}

export default class NavBar extends React.Component<IRouterProps, IRouterState> {

    constructor(props: IRouterProps) {
        super(props);
    }

    showClassName = ({isActive}: {isActive: boolean}): string => {
        return isActive ? 'header-link active' : 'header-link'
    }

    render() {
        return (
            <div className="header-menu">
                {
                    routesPages.map( (route: IRoute) =>
                        <NavLink
                            key={route.name}
                            to={route.path}
                            className={ this.showClassName }
                            end
                        >
                            {
                                route.name
                            }
                        </NavLink>
                    )}
            </div>
        );
    }


};
