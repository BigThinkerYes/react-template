import React from 'react';
import ReactDOM from 'react-dom';

//use information from search_bar.js to import settings
//.js files don't need file extension
import SearchBar from './components/search_bar';

const API_KEY = '';



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