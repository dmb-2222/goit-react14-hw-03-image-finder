import React from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import PropTypes from "prop-types";
import styles from './Gallery.module.css'

const Gallery = ({
  hits,
  ckickToOpenModal,
  showButtonloadMore,
  handleBtnLoadMore
}) => {
  return (
    <>
      <ul className={styles.gallery}>
        {hits.map(hit => (
          <PhotoCard
            key={hit.id}
            {...hit}
            ckickToOpenModal={() => ckickToOpenModal(hit.largeImageURL)}
          />
        ) )}
      </ul>
      {showButtonloadMore && (
        <button className={styles.button} type="button" onClick={handleBtnLoadMore}>
          Load more
        </button>
      )}
    </>
  );
};
export default Gallery;

Gallery.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.object).isRequired,
  ckickToOpenModal: PropTypes.func.isRequired,
  showButtonloadMore: PropTypes.bool,
  handleBtnLoadMore: PropTypes.func
};
