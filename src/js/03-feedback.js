import throttle from 'lodash.throttle';

const C = 'feedback-from-state';
const feedbackForm = document.querySelector('.feedback-form');
const dataStorage = {};
function onInput() {
  const { email, message } = feedbackForm.elements;

  dataStorage.email = email.value;
  dataStorage.message = message.value;

  localStorage.setItem(FEEDBACK_F_ST, JSON.stringify(dataStorage));
};


feedbackForm.addEventListener('input', throttle(onInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

function handleReloadPage(){
const formData = JSON.parse(localStorage.getItem(FEEDBACK_F_ST)) || {};


const { email, message } = feedbackForm.elements;


email.value = formData.email || '';
message.value = formData.message || '';
}


handleReloadPage();

function onFormSubmit(event){
    event.preventDefault();

    const emailValue = feedbackForm.elements.email.value;
    const messageValue = feedbackForm.elements.message.value;

    if (emailValue === ''  || messageValue === ''){
        alert('Please fill in all the fields!');
        return;
      }


      const formData = {
        email: emailValue,
        message: messageValue
      };


    console.log(formData);

    localStorage.removeItem(FEEDBACK_F_ST);
     feedbackForm.reset();
}