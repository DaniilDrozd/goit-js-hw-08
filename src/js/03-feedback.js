import throttle from 'lodash.throttle';

const FEEDBACK_F_ST = 'feedback-from-state';
const feedbackForm = document.querySelector('.feedback-form');

function onInput() {};


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

    localStorage.clear();
feedbackForm.reset();
}