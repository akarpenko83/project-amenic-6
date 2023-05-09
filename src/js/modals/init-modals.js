import { refs } from '../constants.js';
import { openModal, closeModal } from './open-close-modals';
import { onWatchTrailerClick } from '../watch-trailer';

async function initModals() {
  try {
    // add an event listener to open the modals
    //example
    //refs.watchTrailerBtn.addEventListener('click', () => openModal(refs.modalTrailer));
    // refs.popupBtn.addEventListener('click', () => openModal(refs.modalPopup));

    refs.watchTrailerBtn.addEventListener('click', () => onWatchTrailerClick(493529));
  } catch (error) {
    console.log(error);
  }
}

export default initModals;
