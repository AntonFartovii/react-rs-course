import React from "react";
import FormCard from "../components/Form";
import Cards from "../components/Cards";
import {ICard} from "../data/data";
import { IPageProps } from './MainPage';


interface IFormPageState {
    cards: ICard[]
}


export default class FormPage extends React.Component<IPageProps, IFormPageState> {
    name: string

    constructor(props: IPageProps) {
        super(props);
        this.name = 'Форма'
        this.showTest = this.showTest.bind( this )
        this.state = {
            cards: []
        }
    }

    showTest() {
        this.props.showPageName &&
        this.props.showPageName( this.name )
    }

    componentDidMount(): void {
        this.showTest()
    }


    handleCardAdd = (card: ICard) => {
        this.setState({
            cards: [...this.state.cards, card]
        })
    }

    render() {
        return (
            <>
                <FormCard onSubmitCard={this.handleCardAdd}/>
                <Cards cards={this.state.cards}/>
            </>
        );
    }

}
