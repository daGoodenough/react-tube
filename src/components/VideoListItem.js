const VideoListItem = props => {

  return (
    <li onClick={(e) => props.handleVideoItemClick(props.index)} className="list-group-item">
      <img src={props.video.snippet.thumbnails.default.url} />
      <span>{props.video.snippet.title}</span>
      <span>{props.video.snippet.description}</span>
    </li>
  )
}

export default VideoListItem;