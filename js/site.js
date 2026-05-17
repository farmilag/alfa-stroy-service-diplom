const modal = document.querySelector('#callback-modal');
const openButtons = document.querySelectorAll('[data-open-callback]');
const closeButton = document.querySelector('[data-close-callback]');
const form = document.querySelector('#callback-form');
const status = document.querySelector('.form-status');
const servicesToggle = document.querySelector('.nav__button');
const servicesItem = document.querySelector('.nav__item--dropdown');
function openModal(){if(!modal)return;modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');modal.querySelector('input')?.focus()}
function closeModal(){if(!modal)return;modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');if(status)status.textContent=''}
openButtons.forEach(button=>button.addEventListener('click',openModal));
closeButton?.addEventListener('click',closeModal);
modal?.addEventListener('click',event=>{if(event.target===modal)closeModal()});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeModal();servicesItem?.classList.remove('is-open');servicesToggle?.setAttribute('aria-expanded','false')}});
servicesToggle?.addEventListener('click',()=>{const isOpen=servicesItem.classList.toggle('is-open');servicesToggle.setAttribute('aria-expanded',String(isOpen))});
document.addEventListener('click',event=>{if(servicesItem&&!servicesItem.contains(event.target)){servicesItem.classList.remove('is-open');servicesToggle?.setAttribute('aria-expanded','false')}});
form?.addEventListener('submit',event=>{event.preventDefault();if(status)status.textContent='Заявка подготовлена. Спасибо, мы свяжемся с вами.';form.reset()});
