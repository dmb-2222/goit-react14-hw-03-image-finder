import React from "react";
import PropTypes from "prop-types";
import styles from "./PhotoCard.module.css";

const PhotoCard = ({
  webformatURL,
  tags,
  likes,
  comments,
  views,
  downloads,
  ckickToOpenModal
}) => {
  return (
    <li className={styles.photoCard}>
      <img src={webformatURL} alt={tags} />
      <div className={styles.stats}>
        <p className={styles.statsItem}>
          <i className="material-icons">thumb_up</i>
          {likes}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">visibility</i>
          {views}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">comment</i>
          {comments}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">cloud_download</i>
          {downloads}
        </p>
      </div>
      <button
        type="button"
        className={styles.fullscreenButton}
        onClick={ckickToOpenModal}
      >
        <i className="material-icons">zoom_out_map</i>
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
  clickToOpenModal: PropTypes.func
};
