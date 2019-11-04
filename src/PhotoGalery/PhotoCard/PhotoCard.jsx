import React from "react";
import PropTypes from 'prop-types';

const PhotoCard = ({webformatURL,tags, likes, comments ,views, downloads, ckickToOpenModal}) => {
  return (
    <li className="photo-card">
      <img src={webformatURL} alt={tags} />
      <div className="stats">
        <p className="stats-item">
          <i className="material-icons">thumb_up</i>
          {likes}
        </p>
        <p className="stats-item">
          <i className="material-icons">visibility</i>
          {views}
        </p>
        <p className="stats-item">
          <i className="material-icons">comment</i>
          {comments}
        </p>
        <p className="stats-item">
          <i className="material-icons">cloud_download</i>
          {downloads}
        </p>
      </div>
      <button type="button" className="fullscreen-button" onClick={ckickToOpenModal}>
        <i className="material-icons">Нажми для увеличения</i>
      </button>
    </li>
  );
};
export default PhotoCard;


PhotoCard.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  clickToOpenModal: PropTypes.func,
}
