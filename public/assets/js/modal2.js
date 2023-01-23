
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

 const resetForm = () => {
  const errors = document.querySelectorAll('p.error')
  errors.forEach(p => {
   p.innerHTML = ""
  })
  const invalide = document.querySelectorAll('.invalide')
  invalide.forEach(input => {
   input.classList.remove('invalide')
  })
 }

 const validate = (e) => {
  e.preventDefault()
  console.log("envoie--------------------------")
  const inputFirstname = document.querySelector('input#first')
  const firstnameErrors = validateTextInput(inputFirstname.value, "prénom")
  if (firstnameErrors.length > 0) {
   let errorfield = document.querySelector('p#first-error')
   errorfield.innerHTML = firstnameErrors.join('<br/>')
   inputFirstname.classList.add('invalide')
  } else {
   inputFirstname.value = ""
  }

  const inputLastname = document.querySelector('input#last')
  const lastnameErrors = validateTextInput(inputLastname.value, "nom de famille")
  if (lastnameErrors.length > 0) {
   let errorfield = document.querySelector('p#last-error')
   errorfield.innerHTML = lastnameErrors.join('<br/>')
   inputLastname.classList.add('invalide')
  } else {
   inputLastname.value = ""
  }

  const inputEmail = document.querySelector('input#email')
  inputEmail.value = ""

  const inputBirthdate = document.querySelector('input#birthdate')
  const birthdateErrors = validateBirthdate(inputBirthdate.value, 13)
  if (birthdateErrors.length > 0) {
   let errorfield = document.querySelector('p#birthdate-error')
   errorfield.innerHTML = birthdateErrors.join('<br/>')
   inputBirthdate.classList.add('invalide')
  } else {
   inputBirthdate.value = ""
  }

  const inputQuantity = document.querySelector('input#quantity')
  const quantityErrors = validateQuantity(inputQuantity.value, 0, 99)
  if (quantityErrors.length > 0) {
   let errorfield = document.querySelector('p#quantity-error')
   errorfield.innerHTML = quantityErrors.join('<br/>')
   inputQuantity.classList.add('invalide')
  } else {
   inputQuantity.value = 0
  }

  const inputsRadio = document.querySelectorAll('.checkbox-input[type="radio"]')
  const locationErrors = validateLocation(inputsRadio)
  if (locationErrors.length > 0) {
   let errorfield = document.querySelector('p#location-error')
   errorfield.innerHTML = locationErrors.join('<br/>')
  } else {
   inputsRadio.forEach(radio => radio.checked = false)
  }

  const inputCgu = document.querySelector('input#checkbox1')
  console.log('heeeee input CGU : ', Boolean(inputCgu.checked))
  if (!Boolean(inputCgu.checked)) {
   let errorfield = document.querySelector('p#cgu-error')
   errorfield.innerHTML = `Vous devez obligatoirement accepter les CGU !`
  } else {
   inputCgu.checked = false
  }

  const inputNewsletter = document.querySelector('input#checkbox2')

  // traitement de soumission du formulaire
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
 }

 subForm.addEventListener('submit', validate)

}

document.addEventListener('readystatechange', () => {
 const elem = (window.addEventListener) ? window : document;
 elem.addEventListener('load', main, false);
});
