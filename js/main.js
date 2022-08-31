'use strict';

{
  const comment = document.getElementById('comment');
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const overlay = document.querySelector('.overlay');
  const images = document.querySelectorAll('.pic img');
  const btn = document.querySelector('.btn');
  const reverse = document.querySelector('.reverse');
  const cont = document.querySelector('.cont');
  const toTop = document.getElementById('to_top');
  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  
  let currentIndex = 0;

  function play() {
    setTimeout(() => {
      images[currentIndex].classList.remove('current');
      currentIndex++;
      if (currentIndex > images.length - 1) {
        currentIndex = 0;
      }
      images[currentIndex].classList.add('current');
      play();
    }, 4000);
  }

  function onScrollCallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        toTop.classList.add('scrolled');
      } else {
        toTop.classList.remove('scrolled');
      }
    });
  }

  onScrollObserver.observe(document.getElementById('target'));
  
  play();

  toTop.addEventListener('click', e => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior:'smooth',
    });
  });

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  function process() {
    document.getElementById('trigger').classList.toggle('changed');
  }
  
  document.getElementById('trigger').addEventListener('click', process);
  
  btn.addEventListener('click', () => {
    btn.classList.add('apper');
    reverse.classList.add('apper');
    cont.classList.add('apper');
  });

  reverse.addEventListener('click', () => {
    btn.classList.remove('apper');
    reverse.classList.remove('apper');
    cont.classList.remove('apper');
  });
}


