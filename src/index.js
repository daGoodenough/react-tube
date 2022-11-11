import React from "react";
import ReactDOM from "react-dom/client";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import axios from "axios";
const API_KEY = process.env.REACT_APP_YOUTUBE_API;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch = this.videoSearch.bind(this);
    this.changeCurrentVideo = this.changeCurrentVideo.bind(this);
  }


  videoSearch(term) {
    const url = "https://www.googleapis.com/youtube/v3/search";

    const params = {
      part: "snippet",
      key: API_KEY,
      q: term,
      type: "video",
    };

    axios.get('./data.json')
    // axios.get(url, { params: params })
      .then(response => {
        this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[0]
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  changeCurrentVideo(index) {
    this.setState({selectedVideo: this.state.videos[index]})
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={this.videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList handleVideoItemClick={this.changeCurrentVideo} videos={this.state.videos} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
