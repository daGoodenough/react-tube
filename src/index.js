import React from "react";
import ReactDOM from "react-dom/client";
import SearchBar from "./components/SearchBar";
import "./index.css";
import axios from "axios";
const API_KEY = process.env.REACT_APP_YOUTUBE_API;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.addSearchResults = this.addSearchResults.bind(this);
    this.videoSearch = this.videoSearch.bind(this);
  }

  addSearchResults(res) {
    const videoData = res.data.items
    const videos = videoData.map((video) => {
      return {
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnailMed: video.snippet.thumbnails.medium
      }
    })
    this.setState({videos: videos, selectedVideo: videos[0]});
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
    // axios
    //   .get(url, { params: params })
      .then((response) => {
        this.addSearchResults(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={this.videoSearch} />
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
