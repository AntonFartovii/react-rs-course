
import React, {ChangeEvent} from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

type ISearchProps = {
    onFilterChange: (filterText: string) => void
}

type ISearchState = {
    input: string
}

export class Search extends React.Component<ISearchProps, ISearchState> {

   constructor(props: ISearchProps) {
       super(props)
       this.state = {
           input: ''
       }
       this.changeSearchInput = this.changeSearchInput.bind(this)
   }

    changeSearchInput( event: ChangeEvent<HTMLInputElement> ) {
        this.setState({
            ...this.state, input: event.target.value
        })
        this.props.onFilterChange( event.target.value );
    }

    componentDidMount(): void {
        const input = localStorage.getItem('inputValue')
        input && this.setState({ input })
    }

    componentDidUpdate(
        prevProps: Readonly<ISearchProps>,
        prevState: Readonly<ISearchState>, snapshot?: any): void {
        prevState.input !== this.state.input
        && localStorage.setItem('inputValue', this.state.input)

    }

    // componentWillUnmount(): void {
    //    localStorage.removeItem('inputValue')
    // }

    render() {
        return (
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.state.input}
                    onChange={this.changeSearchInput}
                />
            </div>

        )
    }
}
