
async function main() {
 // const modale = document.querySelector('.modale')
 const burgerBtn = document.getElementById('burger-icon');

 const modaleBg = document.querySelector('.modale-bg');
 const inscriptionBtn = document.getElementById('inscription');
 const closeBtn = document.getElementById('close');
 const subForm = document.getElementById('sub-form')
 const closeForm = document.getElementById('close-form')

 const hideForm = (form) => {
  if (!form.classList.contains('hidden-form')) {
   form.classList.add("hidden-form")
  }
 }

 const showForm = (form) => {
  if (form.classList.contains('hidden-form')) {
   form.classList.remove("hidden-form")
  }
 }

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
  resetForm()
  window.scrollTo(0, 0);
 }

 inscriptionBtn.addEventListener('click', showModale);

 const hideModale = (e) => {
  e.preventDefault()
  modaleBg.classList.add('modale-hide');
 }

 closeBtn.addEventListener('click', hideModale);

 const validateTextInput = (value, fieldName) => {
  let errors = []
  if (value.length < 2) {
   errors.push(`Un ${fieldName} comporte au moins 2 caractères`)
  }
  if (value.replace('  ', ' ').length != value.length) {
   errors.push(`Un ${fieldName} ne doit pas être une suite d'espace`)
  }
  return errors
 }

 const validateBirthdate = (value, ageMin) => {
  let errors = []
  const year = (new Date(value)).getFullYear()
  const current = (new Date()).getFullYear()

  if (year < 1800) {
   errors.push(`On est en ${current}, vous ne pouvez pas avoir ${current - year} ans !`)
  }

  if (year + ageMin > current) {
   errors.push(`Vous devez avoir au moins ${ageMin} ans pour participer`)
  }

  return errors
 }

 const validateQuantity = (value, min, max) => {
  let errors = []

  const r = new RegExp('[0-9]+')

  if (!r.test(value.toString())) {
   errors.push(`Ce champ ne doit pas contenir autre chose qu'un nombre`)
  }
  else {
   if (Number(value) < min) {
    errors.push(`Ce champ ne doit pas contenir de nombre inférieur à ${min}`)
   }
   if (Number(value) > max) {
    errors.push(`Ce champ ne doit pas contenir de valeur supérieur à ${max}`)
   }
  }
  return errors
 }

 const validateLocation = (liste) => {
  let errors = []
  let ok = false
  liste.forEach(input => {
   ok |= input.checked
  })
  if (!ok) {
   errors.push(`Vous devez choisir un tournois`)
  }
  return errors
 }

 const resetErrors = () => {
  const errors = document.querySelectorAll('p.error')
  errors.forEach(p => {
   p.innerHTML = ""
  })
  const invalide = document.querySelectorAll('.invalide')
  invalide.forEach(input => {
   input.classList.remove('invalide')
  })
 }

 // mets les valeurs par defaut aux inputs
 const resetForm = () => {
  hideForm(closeForm)
  showForm(subForm)
  resetErrors()
 }

 // traitement de soumission du formulaire
 const validate = (e) => {
  e.preventDefault()
  resetForm()
  console.log("envoie--------------------------")

  // liste des inputs
  const inputFirstname = document.querySelector('input#first')
  const inputLastname = document.querySelector('input#last')
  const inputEmail = document.querySelector('input#email')
  const inputBirthdate = document.querySelector('input#birthdate')
  const inputQuantity = document.querySelector('input#quantity')
  const inputsRadio = document.querySelectorAll('.checkbox-input[type="radio"]')
  const inputCgu = document.querySelector('input#checkbox1')
  const inputNewsletter = document.querySelector('input#checkbox2')

  let ok = true

  console.log(inputFirstname.value)
  console.log(inputLastname.value)
  console.log(inputEmail.value)
  console.log(inputBirthdate.value)
  console.log(inputQuantity.value)
  console.log('radios : ', inputsRadio.length)
  inputsRadio.forEach(radio => {
   console.log(`${radio.value} : ${radio.checked}`)
  })
  console.log('cgu : ', inputCgu.checked)
  console.log('newsletter : ', inputNewsletter.checked)

  // test du prénom
  const firstnameErrors = validateTextInput(inputFirstname.value, "prénom")
  if (firstnameErrors.length > 0) {
   let errorfield = document.querySelector('p#first-error')
   errorfield.innerHTML = firstnameErrors.join('<br/>')
   inputFirstname.classList.add('invalide')
   ok &= false
  } else {
   inputFirstname.value = ""
  }

  // test du nom de famille
  const lastnameErrors = validateTextInput(inputLastname.value, "nom de famille")
  if (lastnameErrors.length > 0) {
   let errorfield = document.querySelector('p#last-error')
   errorfield.innerHTML = lastnameErrors.join('<br/>')
   inputLastname.classList.add('invalide')
   ok &= false
  } else {
   inputLastname.value = ""
  }

  // ras pour le mail
  inputEmail.value = ""

  // test de la date d'anniversaire
  const birthdateErrors = validateBirthdate(inputBirthdate.value, 13)
  if (birthdateErrors.length > 0) {
   let errorfield = document.querySelector('p#birthdate-error')
   errorfield.innerHTML = birthdateErrors.join('<br/>')
   inputBirthdate.classList.add('invalide')
   ok &= false
  } else {
   inputBirthdate.value = ""
  }

  // test du nombre de participation
  const quantityErrors = validateQuantity(inputQuantity.value, 0, 99)
  if (quantityErrors.length > 0) {
   let errorfield = document.querySelector('p#quantity-error')
   errorfield.innerHTML = quantityErrors.join('<br/>')
   inputQuantity.classList.add('invalide')
   ok &= false
  } else {
   inputQuantity.value = 0
  }

  // test du lieu de rendez-vous
  const locationErrors = validateLocation(inputsRadio)
  if (locationErrors.length > 0) {
   let errorfield = document.querySelector('p#location-error')
   errorfield.innerHTML = locationErrors.join('<br/>')
   ok &= false
  } else {
   inputsRadio.forEach(radio => radio.checked = false)
  }

  // test des consignes d'utilisation
  if (!Boolean(inputCgu.checked)) {
   let errorfield = document.querySelector('p#cgu-error')
   errorfield.innerHTML = `Vous devez obligatoirement accepter les conditions d'utilisation`
   ok &= false
  } else {
   inputCgu.checked = true
  }

  if (ok) {
   console.log('AFFICHER LE MESSAGE MERCI DE VOTRE PARTICIPATION')
   hideForm(subForm)
   showForm(closeForm)
   const fermer = document.getElementById('fermer')
   fermer.addEventListener('click', hideModale)
  }

 }

 subForm.addEventListener('submit', validate)

}

document.addEventListener('readystatechange', () => {
 const elem = (window.addEventListener) ? window : document;
 elem.addEventListener('load', main, false);
});
