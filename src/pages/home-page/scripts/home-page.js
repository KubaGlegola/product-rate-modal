/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/home-page.scss';
import Modal from 'modal-vanilla';


const myModal = new Modal({
    el: document.getElementById('my-modal')
  });
  myModal.show();