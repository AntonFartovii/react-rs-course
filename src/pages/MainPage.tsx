import React from "react";
import {Search} from "../components/Search";
import Cards from "../components/Cards";
import {cardData} from "../data/data";

interface IMainPageState {

}

interface IMainPageProps {

}

export default class MainPage extends React.Component<IMainPageProps, IMainPageState> {
    render() {
        return (
            <>
                <h1>Main page</h1>
                <Cards cards={cardData} />
            </>
        )
    }
}
