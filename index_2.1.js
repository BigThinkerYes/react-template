import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


//use information from search_bar.js to import settings
//.js files don't need file extension
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = '';



//display information
class App extends Component{
  
  constructor(props){
    super(props);

    this.state = { 
        videos: [],
        selectedVideo: null
     };


    YTSearch({key:API_KEY, term: 'surfboards'}, (videos) => {
      //list of videos
      this.setState({ 
          videos: videos,
          selectedVideo: videos[0]
        });
    });
  }

  render(){
  return (
         <div>
              <SearchBar />
              <VideoDetail video={this.state.selectedVideo} />
              <VideoList 
              onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
              videos={this.state.videos} />
         </div>
         );
  //include searchbar
}
}


//instance of App
//ReactDOM.render(<App />);
//
ReactDOM.render(<App />, document.querySelector('.container'));