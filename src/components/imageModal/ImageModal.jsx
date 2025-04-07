import css from "./ImageModal.module.css"
import Modal from 'react-modal';

Modal.setAppElement('#root'); 

export default function ImageModal({modalIsOpen, item: {urls, alt_description, likes}, modalClose}) {

  return <Modal
    isOpen={modalIsOpen}
    onRequestClose={modalClose}
    contentLabel="Modal Image"
    overlayClassName={css.overlay}
    className={css.modal}
    shouldCloseOnEsc={true} 
    shouldCloseOnOverlayClick={true}
  >
    <div className={css.container}>
      <img className={css.img} src={urls.regular} alt={alt_description} />
      <div className={css.caption}>{likes}</div>
    </div>
  </Modal>
}