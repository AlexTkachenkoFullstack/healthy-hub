export const bubbles = () => {
  const container = document.querySelector('#bubbles');
  const bubble = document.createElement('span');
  let size = Math.random() * (11 - 5) + 5;

  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';
  bubble.style.left = 8 + Math.random() * 50 + 'px';

  container.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 9000);
};
