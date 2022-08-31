'use strict';
{
  const bttn = document.getElementById('bttn');
  
  bttn.addEventListener('click', () => {
    const n = Math.random();
    if (n < 0.05) {
      bttn.textContent = '大吉';
      comment.textContent = 'とっても良いことがありそう!!';
    } else if (n < 0.2) {
      bttn.textContent = '中吉';
      comment.textContent = '良いことがありそう!!';
    } else if (n < 0.5) {
      bttn.textContent = '末吉';
      comment.textContent = 'まあまあ良いことがありそう!!';
    } else {
      bttn.textContent = '凶';
      comment.textContent = '悪いことがありそう';
    }
  });
}
 