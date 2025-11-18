function navButtonAnimation(event, button) {
  animationBlock = document.querySelector('#' + button)
  if (event == 'start') {
    animationBlock.classList.remove('translate-y-[-125%]')
    animationBlock.classList.remove('translate-x-[27%]')
  } else {
    animationBlock.classList.add('translate-y-[-125%]')
    animationBlock.classList.add('translate-x-[27%]')
  }
}
