
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

 const toggleModale = (e) => {
  e.preventDefault();
  if (e.srcElement.id === "close") {
   console.log("close")
   modale.style.setProperty("display", "none");
   modaleBg.style.setProperty("display", "none");
  }
  else {
   console.log("open")
   modale.style.setProperty("display", "block");
   modaleBg.style.setProperty("display", "block");
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
