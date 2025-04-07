import css from "./ImageModal.module.css"
import Modal from 'react-modal';

export default function ImageModal({modalIsOpen, item: {urls, alt_description}, modalClose}) {

  return <Modal
    isOpen={modalIsOpen}
    onRequestClose={modalClose}
    contentLabel="Modal Image"
    overlatClassName={css.modal}
  >
    <img src={urls.regular} alt={alt_description} />
  </Modal>
}