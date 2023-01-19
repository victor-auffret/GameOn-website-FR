
async function main() {

 const modaleBg = document.querySelector('.modale-bg');
 const modale = document.querySelector('.modale')

 const burgerBtn = document.getElementById('burger-icon');

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

 const inscriptionBtn = document.getElementById('inscription');

 const ModaleBG = document.querySelector('.modale-bg')

 const showModale = () => {
  ModaleBG.classList.remove('modale-hide');
  window.scrollTo(0, 0);
 }

 const hideModale = () => {
  ModaleBG.classList.add('modale-hide');
 }
 const toggleModale = (e) => {
  e.preventDefault();
  if (e.srcElement.id === "close") {
   hideModale();
  }
  else {
   showModale();
  }
 }

 inscriptionBtn.addEventListener('click', toggleModale);

 const closeBtn = document.getElementById('close');

 closeBtn.addEventListener('click', toggleModale);

}

const validate = (e) => {
 e.preventDefault()
 // traitement de soumission du formulaire
}

document.addEventListener('readystatechange', () => {
 const elem = (window.addEventListener) ? window : document;
 elem.addEventListener('load', main, false);
});
