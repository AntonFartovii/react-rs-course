import React from "react";
import { IPageProps } from './MainPage';

export default class AboutPage extends React.Component<IPageProps, any> {
    name: string

    constructor(props: IPageProps) {
        super(props);
        this.name = 'О нас'
        this.showTest = this.showTest.bind( this )
    }

    showTest() {
        this.props.showPageName &&
        this.props.showPageName( this.name )
    }

    render() {
        return(
            <h1>About us</h1>
        )
    }
}
