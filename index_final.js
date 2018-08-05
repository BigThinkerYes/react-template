import _ from 'lodash';
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

     this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key:API_KEY, term: term}, (videos) => {
      //list of videos
      this.setState({ 
          videos: videos,
          selectedVideo: videos[0]
        });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
  return (
         <div>
              <SearchBar onSearchTermChange={videoSearch} />
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