import React, { ChangeEvent } from 'react';

type ISearchProps = {
  onFilterChange: (filterText: string) => void;
};

type ISearchState = {
  input: string;
};

export class Search extends React.Component<ISearchProps, ISearchState> {
  constructor(props: ISearchProps) {
    super(props);
    this.state = {
      input: '',
    };
    this.changeSearchInput = this.changeSearchInput.bind(this);
  }

  changeSearchInput(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      input: event.target.value,
    });
    this.props.onFilterChange(event.target.value);
  }

  componentDidMount(): void {
    const input = localStorage.getItem('inputValue');
    input && this.setState({ input });
  }

  componentWillUnmount(): void {
    localStorage.setItem('inputValue', this.state.input);
  }

  render() {
    return (
      <div className="search-bar">
        <label htmlFor="my_search">Поиск:</label>
        <input
          id="my_search"
          type="text"
          placeholder="Search..."
          value={this.state.input}
          onChange={this.changeSearchInput}
        />
      </div>
    );
  }
}
