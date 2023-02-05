document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('audio').play();

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
    images: document.querySelectorAll('.beauty-box__poster'),
  };

  const sliderButtons = {
    left: document.querySelector('.beauty-box__slider-left'),
    right: document.querySelector('.beauty-box__slider-right'),
  };

  // let sliderState = 0;

  // v2
  // sliderButtons.right.addEventListener('click', () => {
  //   if (sliderState < 4) {
  //     sliderState = sliderState + 1;

  //     slider.images[sliderState - 1].classList.add('hidden');
  //     slider.images[sliderState].classList.remove('hidden');
  //   }
  // });

  // sliderButtons.left.addEventListener('click', () => {
  //   if (sliderState > -1) {
  //     sliderState = sliderState - 1;

  //     slider.images[sliderState + 1].classList.add('hidden');
  //     slider.images[sliderState].classList.remove('hidden');
  //   }
  // });

  // 1v

  function removeAllDots() {
    slider.dots.forEach((sliderDot) => {
      if (sliderDot.classList.contains('active')) {
        sliderDot.classList.remove('active');
      }
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

        slider.images.forEach((sliderImage) => {
          if (!sliderImage.hidden) {
            sliderImage.hidden = true;
          }
        });

        slider.title.textContent = currentBox.title;
        slider.price.textContent = currentBox.price;
        slider.images[index].hidden = false;
      }
    });
  });

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

      slider.images.forEach((sliderImage) => {
        sliderImage.hidden = true;
      });

      slider.title.textContent = currentBox.title;
      slider.price.textContent = currentBox.price;
      slider.images[sliderState].hidden = false;
    }
  });

  sliderButtons.right.addEventListener('click', () => {
    if (sliderState < 4) {
      sliderState = sliderState + 1;

      let currentBox = beautyBoxes[sliderState];

      activeDot(sliderState);

      slider.images.forEach((sliderImage) => {
        if (!sliderImage.hidden) {
          sliderImage.hidden = true;
        }
      });

      slider.title.textContent = currentBox.title;
      slider.price.textContent = currentBox.price;
      slider.images[sliderState].hidden = false;
    }
  });
});
