import React from 'react';
import NavBar from "../components/NavBar";

interface IHeaderProps {

}

interface IHeaderState {

}

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
    render() {
        return (
            <div className="app-header">
                <NavBar/>
            </div>
        );
    }
};
