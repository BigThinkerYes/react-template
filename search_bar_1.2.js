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
     //reference javascript variable using this.state.term
    <div>
    <input onChange={(event) => this.setState( { term: event.target.value})} />
    Value of the input: {this.state.term}
    </div>
   );
 }
}

//create refrence to connect to other pages
export default SearchBar;