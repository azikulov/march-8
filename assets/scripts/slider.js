document.addEventListener('DOMContentLoaded', () => {
  const beautyBoxes = [
    {
      src: 'assets/images/boxes/1.png',
      price: '5.500 ₸',
      title: 'Снежное облако',
    },
    {
      src: 'assets/images/boxes/2.png',
      price: '7.000 ₸',
      title: 'Розовое кружево',
    },
    {
      src: 'assets/images/boxes/3.png',
      price: '5.000 ₸',
      title: 'Весенние фрукты',
    },
    {
      src: 'assets/images/boxes/4.png',
      price: '7.000 ₸',
      title: 'Нежный шлейф',
    },
    {
      src: 'assets/images/boxes/5.png',
      price: '9.000 ₸',
      title: 'Пудровый шелк',
    },
  ];

  const slider = {
    dots: document.querySelectorAll('.beauty-box__dot'),
    title: document.querySelector('.beauty-box__slider-title'),
    price: document.querySelector('.beauty-box__price'),
    image: document.querySelector('.beauty-box__poster'),
  };

  function removeAllDots() {
    slider.dots.forEach((sliderDot) => {
      sliderDot.classList.remove('active');
    });
  }

  let sliderState = 0;

  slider.dots.forEach((sliderDot, index) => {
    sliderDot.addEventListener('click', () => {
      if (!sliderDot.classList.contains('active')) {
        removeAllDots();
        sliderDot.classList.add('active');

        sliderState = index;
        let currentBox = beautyBoxes[index];

        slider.title.textContent = currentBox.title;
        slider.price.textContent = currentBox.price;
        slider.image.src = currentBox.src;
      }
    });
  });

  const sliderButtons = {
    left: document.querySelector('.beauty-box__slider-left'),
    right: document.querySelector('.beauty-box__slider-right'),
  };

  function activeDot(index) {
    removeAllDots();
    slider.dots[index].classList.add('active');
  }

  sliderButtons.left.addEventListener('click', () => {
    if (sliderState === 0) {
    } else {
      sliderState = sliderState - 1;

      let currentBox = beautyBoxes[sliderState];

      activeDot(sliderState);

      slider.title.textContent = currentBox.title;
      slider.price.textContent = currentBox.price;
      slider.image.src = currentBox.src;
    }
  });

  sliderButtons.right.addEventListener('click', () => {
    if (sliderState < 5) {
    } else {
      sliderState = sliderState + 1;

      let currentBox = beautyBoxes[sliderState];

      activeDot(sliderState);

      slider.title.textContent = currentBox.title;
      slider.price.textContent = currentBox.price;
      slider.image.src = currentBox.src;
    }
  });
});
