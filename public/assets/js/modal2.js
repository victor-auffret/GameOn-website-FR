
async function main() {
 console.log("ok");

 const burgerBtn = document.getElementById('burger-icon');
 console.log(burgerBtn)

 const toggleNavbar = (e) => {
  e.preventDefault();
  console.log("toggle")
  const li = document.querySelectorAll('.li-navbar:not(:last-child)')
  console.log(li)
  li.forEach(elem => {
   /*
   console.log(elem)
   console.log('link : ', elem.querySelector('.link'))
   */
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
  /*
  document.querySelectorAll('.li-navbar:not(:last-child)').forEach(elem => {
   if (!elem.classList.contains('li-burger')) {
    if (!elem.classList.contains('li-show')) {
     elem.classList.add('li-show')
    }
    else {
     elem.classList.remove('li-show')
    }
   }
  })
  */
 }
 burgerBtn.addEventListener('click', toggleNavbar);


}

document.addEventListener('readystatechange', () => {
 const elem = (window.addEventListener) ? window : document;
 elem.addEventListener('load', main, false);
});
