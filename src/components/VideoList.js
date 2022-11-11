import VideoListItem from './VideoListItem.js';

const VideoList = props => {
  if (!props.videos) {
    return <div>Loading...</div>;
  }

  const videoItems = props.videos.map((video, index) => {
    return <VideoListItem handleVideoItemClick={props.handleVideoItemClick} key={index} index={index} video={video} />
  })

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
};

export default VideoList;