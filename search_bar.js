//standard to import react
import React, { Component } from 'react';

//define a new class and give it all the functionality that react.component has
class SearchBar extends Component {
//define render method for class
 render(){
   return <input onChange={this.onInputChange} />;
 }
 //define event
 onInputChange(event){
  //describe infomation
  //get value of input
  console.log(event.target.value);
 }
}

//create refrence to connect to other pages
export default SearchBar;