const slider = () => {
  const buttonContainer = document.querySelector('.slider__controls');
  const buttons = document.querySelectorAll('.slider__controls .button');
  const slides = document.querySelectorAll('.slider__slides .slide')

  buttonContainer.addEventListener('click', (e) => {
    const targetButton = e.target.classList.contains('button') ? e.target : e.target.parentElement;
    
    if(targetButton.classList.contains('button')) {
      buttons.forEach((button) => {
        button.classList.remove('button_colored');
        button.classList.add('button_light');
      })

      targetButton.classList.add('button_colored');
      targetButton.classList.remove('button_light');

      slides.forEach((slide) => {
        slide.classList.remove('active')
        if (targetButton.dataset.slidebtn === slide.dataset.slide) {
          slide.classList.add('active')
        }
      })
    }
  })
}

export default slider;
