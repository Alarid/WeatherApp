import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.cityName = React.createRef();
  }

  search(e) {
    e.preventDefault();
    this.props.searchCity(this.cityName.current.value);
  }

  render() {
    return (
      <Form inline onSubmit={this.search.bind(this)}>
        <Form.Control
          type="search"
          placeholder="City name"
          className="mr-2"
          ref={this.cityName}/>

        <Button
          type="submit">
            Search
        </Button>
      </Form>
    );
  }
}

export default SearchBar;