
async function main() {
 // const modale = document.querySelector('.modale')
 const burgerBtn = document.getElementById('burger-icon');

 const modaleBg = document.querySelector('.modale-bg');
 const inscriptionBtn = document.getElementById('inscription');
 const closeBtn = document.getElementById('close');
 const subForm = document.getElementById('sub-form')

 const toggleNavbar = (e) => {
  e.preventDefault();
  console.log("toggle")
  const li = document.querySelectorAll('.li-navbar:not(:last-child)')
  console.log(li)
  li.forEach(elem => {
   const link = elem.querySelector('.link')
   if (!link.classList.contains('active')) {
    if (!elem.classList.contains('li-show')) {
     elem.classList.add('li-show')
     console.log("elem : ", elem.classList)
    } else {
     elem.classList.remove('li-show')
    }
   }
  });
 }

 burgerBtn.addEventListener('click', toggleNavbar);

 const showModale = (e) => {
  e.preventDefault()
  modaleBg.classList.remove('modale-hide');
  window.scrollTo(0, 0);
 }

 inscriptionBtn.addEventListener('click', showModale);

 const hideModale = (e) => {
  e.preventDefault()
  modaleBg.classList.add('modale-hide');
 }

 closeBtn.addEventListener('click', hideModale);

 subForm.addEventListener('submit', e => {
  e.preventDefault()
  console.log("envoie")
 })

}

const validate = (e) => {
 e.preventDefault()
 // traitement de soumission du formulaire
}

document.addEventListener('readystatechange', () => {
 const elem = (window.addEventListener) ? window : document;
 elem.addEventListener('load', main, false);
});
