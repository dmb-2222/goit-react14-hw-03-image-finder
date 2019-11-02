import React from "react";
import Gallery from "../Gallery/Gallery";
import SearchForm from "../SearchForm/SearchForm";
import Modal from "../Modal/Modal";
import { getPhoto } from "../services/ApiGallery";
import Loader from "../Loader/Loader";

class AppPhoto extends React.Component {
  state = {
    hits: [],
    isModalOpen: false,
    largeImageURL: "",
    btnLoadmore: false,
    inputValue: null,
    value: "",
    spiner: false
  };
  nextPage = 1;
  componentDidMount() {
    window.addEventListener("keydown", this.onCloseModal);
  }
  handleBtnLoadMore = () => {
    this.setState({
      spiner: true
    });
    const query = this.state.inputValue;
    this.nextPage++;
    getPhoto(query, this.nextPage)
      .then(data => {
        this.setState(prevState => {
          return {
            hits: [...prevState.hits, ...data],
            spiner: false
          };
        });
      })
      .then(() => {
        const scrollToEnd = document.getElementById("scroll");
        scrollToEnd.scrollIntoView({ behavior: "smooth" });
      });
  };

  ckickToOpenModal = largeImageURL => {
    this.setState({
      isModalOpen: true,
      largeImageURL: largeImageURL
    });
  };
  componentWillUnmount() {
    window.removeEventListener("keydown", this.onCloseModal);
  }
  onCloseModal = e => {
    // console.log(e.target.getAttribute('data-modal')) не использовать в реакте
    // e.target.getAttribute('name')) не использовать в реакте
    // console.log("e.currentTarget.dataset.modal", e.currentTarget.dataset.modal);
    // console.log("e.target.dataset.modal", e.target.dataset.modal); То что заработало!!!!!
    // console.log(e.currentTarget.attributes['name'])
    // event.target - элемент, на котором произошло событие.
    // event.currentTarget - элемент, на котором сработал обработчик.

    if (e.code === "Escape" || e.target.dataset.modal === "modal") {
      this.setState({
        isModalOpen: false
      });
    }
  };

  handleInput = e => {
    this.setState({
      inputValue: e.target.value,
      value: e.target.value
    });
  };
  handeleSubmit = e => {
    e.preventDefault();
    const query = this.state.inputValue;
    this.setState({
      spiner: true
    });
    getPhoto(query).then(data =>
      this.setState({
        hits: data,
        btnLoadmore: true,
        value: "",
        spiner: false
      })
    );
  };

  render() {
    const {
      hits,
      isModalOpen,
      largeImageURL,
      btnLoadmore,
      value,
      spiner
    } = this.state;
    return (
      <>
        <SearchForm
          handleInput={this.handleInput}
          handeleSubmit={this.handeleSubmit}
          value={value}
        />
        {spiner && <Loader />}
        {hits.length > 0 && (
          <Gallery
            hits={hits}
            ckickToOpenModal={this.ckickToOpenModal}
            showButtonloadMore={btnLoadmore}
            handleBtnLoadMore={this.handleBtnLoadMore}
          />
        )}
        {isModalOpen && (
          <Modal
            largeImageURL={largeImageURL}
            onCloseModal={this.onCloseModal}
          />
        )}
      </>
    );
  }
}
export default AppPhoto;
