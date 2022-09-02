import throttle from 'lodash.throttle';

// ключ к хранилищу
const STORAGE_KEY = 'feedback-form-state';

// получаем доступ к элементам формы
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form  textarea'),
  input: document.querySelector('.feedback-form  input'),
};
// добавляемые значения
let formData = {};
// добавляем ф-нал 
onFormState();
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

// Ф-ция сохранения текущих значений (1)останавливаем по умолчанию поведение; 2)получаем значение ввода; 3) сохраняем значание в хранилище)
function onTextareaInput(event) {
    //event.preventDefault();
    formData[event.target.name] = event.target.value;  
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
// ф-ция проверки состояния хранилища (1) получаем значение хранилища; 2) если там есть даннные заполняем ими поля, в противном случем пустая строка
function onFormState() {
    let messageStoregeSave = localStorage.getItem(STORAGE_KEY);
  
  if (messageStoregeSave) {
    messageStoregeSave = JSON.parse(messageStoregeSave);
   // parseStorageMessage = formData;
  }
    if (messageStoregeSave) {
        (refs.textarea.value = messageStoregeSave.message || "");
        (refs.input.value = messageStoregeSave.email || "");
    }  
}
// очищает Сабмит (1) останавливаем по умолчанию поведение; 2)очищаем форму; 3) очищаем хранилище)
function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}
