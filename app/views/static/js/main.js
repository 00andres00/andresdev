(function() {
  "use strict";

  /* * Easy selector helper function * */
  const select = (el, all=false) => {
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /* * Easy event listener function * */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  on('click', '.bi-list', function(e) {
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
    console.log('Muestra/Oculta menu')
  })

  on('click', '.bi-arrow-down-circle', function(e) {
    /* #Hacer scroll down */
    this.classList.toggle('.bi-arrow-up-circle')
    this.classList.toggle('.bi-arrow-down-circle')
  }, true) 

  
})()






