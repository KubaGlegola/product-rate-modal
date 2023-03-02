/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/home-page.scss';
import MicroModal from 'micromodal';
import enableButton from './enableButton';
import submitRate from './submitRate';

const buttonHandler = document.querySelector("#submitButton");

MicroModal.init();
setTimeout(()=>{
  MicroModal.show('modal-1');
}, 3000);

buttonHandler.disabled = true;


document.querySelector("#radioForm").addEventListener('change', ()=>{
    enableButton(buttonHandler);
})

submitRate(buttonHandler);