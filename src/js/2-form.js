const formData = {
    email: "",
    message: "",
};


const LOCAL_KEY = 'feedback-form - state';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', event => {
    formData.email = formEl.elements.email.value;
    formData.message = formEl.elements.message.value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
});

document.addEventListener('DOMContentLoaded', () => {
    const loadForm = JSON.parse(localStorage.getItem(LOCAL_KEY));
    formEl.elements.email.value = loadForm?.email ?? '';
    formEl.elements.message.value = loadForm?.message ?? '';
})

formEl.addEventListener('submit', e => {
    e.preventDefault();
    const mail = formEl.elements.email.value.trim();
    const message = formEl.elements.message.value.trim();
    if (mail === '' || message === '') return alert('Fill please all fields');
    console.log(formData);
    localStorage.removeItem(LOCAL_KEY);
    formEl.reset();
})

