import React from "react";
import PropTypes from "prop-types";
import styles from './Modal.module.css'

const Modal = ({ largeImageURL, tags, onCloseModal }) => {
  return (
    <div
      className={styles.overlay}
      onClick={onCloseModal}
      data-modal="modal"
      name="modal"
    >
      <div className={styles.modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};
export default Modal;

Modal.propTypes = {
  onCloseModal: PropTypes.func,
  largeImageUrl: PropTypes.string,
  tags: PropTypes.string
};
