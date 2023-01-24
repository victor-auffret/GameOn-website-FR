
/** burger button **/
function editNav(e) {

  let x = document.getElementById("myTopnav");
  if (x.classList.contains("topnav") && !x.classList.contains("responsive")) {
    x.classList.add("responsive")
  } else {
    x.classList.remove("responsive")
  }

  let icon = document.getElementsByClassName("icon")
  if (icon.length > 0) {
    if (icon[0].style.color == "white") {
      icon[0].style.setProperty("color", "red")
    } else {
      icon[0].style.setProperty("color", "white")
    }
  }

}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector('.close');
const validateBtn = document.getElementById("validate")
console.log(validateBtn)
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// fermer ma fenetre
closeBtn.addEventListener('click', closeModal)

validateBtn.addEventListener('click', valideData)

function closeModal() {
  modalbg.style.display = "none";
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

async function valideData(e) {
  e.preventDefault()
  await validate()
  return false
}

async function validate() {
  const rules = await fetch(`${window.location.origin}/public/assets/js/rules.json`)
    .then(r => r.json())
  console.log(rules)

  rules.inputs.forEach(input => {
    const name = input.name ?? null
    console.log(`name : ${name}`)
    if (name !== null) {
      const elem = document.querySelector(`#${name}`)
      console.log(`elem : `, elem)

      if (elem?.type ?? false) {
        console.log(elem.type)
        switch (elem.type) {
          case "number": {
            if (input.min) {
              console.log(`il faut ${input.min} lettre pour cet input`)
            }
            break;
          }
          case "text": {
            if (input.min) {
              console.log(`il faut ${input.min} lettre pour cet input`)
              console.log(`value : `, elem.value)
            }
            break;
          }
          default: {

          }
        }
      }

    }
  })
}
