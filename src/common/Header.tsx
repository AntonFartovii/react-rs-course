import React from 'react';
import NavBar from "../components/NavBar";

interface IHeaderProps {
    currentPage?: string
}

interface IHeaderState {

}

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
    constructor(props: IHeaderProps) {
        super(props);
    }

    render() {
        return (
            <header>
                <div>
                    {
                        this.props.currentPage
                        && 'Current page: ' + this.props.currentPage
                    }
                </div>
                <NavBar/>
            </header>
        );
    }
};
