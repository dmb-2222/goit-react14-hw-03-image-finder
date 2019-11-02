import React from "react";
import PropTypes from "prop-types";
const Modal = ({ largeImageURL, tags, onCloseModal }) => {
  return (
    <div
      className="overlay"
      onClick={onCloseModal}
      data-modal="modal"
      name="modal"
    >
      <div className="modal">
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
