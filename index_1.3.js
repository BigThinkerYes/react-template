import React from 'react';
import ReactDOM from 'react-dom';

//use information from search_bar.js to import settings
//.js files don't need file extension
import SearchBar from './components/search_bar';

const API_KEY = '';import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


//use information from search_bar.js to import settings
//.js files don't need file extension
import SearchBar from './components/search_bar';

const API_KEY = '';

YTSearch({key:API_KEY, term: 'surfboards'}, function(data){
  console.log(data);
});

//display information
const App = () => {
  return (
         <div>
              <SearchBar />
         </div>
         );
  //include searchbar
}


//instance of App
//ReactDOM.render(<App />);
//
ReactDOM.render(<App />, document.querySelector('.container'));


//display information
const App = () => {
  return (
         <div>
              <SearchBar />
         </div>
         );
  //include searchbar
}


//instance of App
//ReactDOM.render(<App />);
//
ReactDOM.render(<App />, document.querySelector('.container'));






/*const App = function(){
  return <div>hello</div>;
}
//same as
const App = () => {
  return <div>hello</div>;
}
*/