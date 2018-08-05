//standard to import react
import React, { Component } from 'react';

//define a new class and give it all the functionality that react.component has
class SearchBar extends Component {
  //functional components do not have states
  constructor(props){
    super(props);

    this.state = { term: '' };
  }
  //define render method for class
 render(){
   return (
    <div className="search-bar">
    <input 
    value={this.state.term}
    onChange={event => this.onInputChange(event.target.value)} />
    </div>
   );
 }

 onInputChange(term) {
   this.setState({term});
   this.props.onSearchTermChange(term);
 }
}

//create refrence to connect to other pages
export default SearchBar;