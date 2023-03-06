import React from "react";
import FormCard from "../components/Form";
import Cards from "../components/Cards";
import {ICard} from "../data/data";


interface IFormPageState {
    cards: ICard[]
}

interface IFormPageProps {

}

export default class FormPage extends React.Component<IFormPageProps, IFormPageState> {
    constructor(props: IFormPageProps) {
        super(props);
        this.state = {
            cards: []
        }
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
