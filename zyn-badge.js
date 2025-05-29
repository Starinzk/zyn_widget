(function () {
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '50%';
  container.style.left = '50%';
  container.style.transform = 'translate(-50%, -50%) scale(1.8)'; // slightly less big
  container.style.zIndex = '9999';
  container.style.padding = '20px 24px';
  container.style.background = '#fff';
  container.style.borderRadius = '16px';
  container.style.boxShadow = '0 6px 24px rgba(0,0,0,0.2)';
  container.style.display = 'flex';
  container.style.alignItems = 'center';
  container.style.gap = '14px';
  container.style.fontFamily = 'sans-serif';
  container.style.fontSize = '18px';
  container.style.opacity = '0';
  container.style.transition = 'all 0.6s ease';

  const video = document.createElement('video');
  video.src = 'https://starinzk.github.io/zyn_widget/ZYN.mp4';
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.style.height = '60px'; // slightly smaller
  video.style.borderRadius = '10px';
  video.style.transition = 'height 0.6s ease';

  const text = document.createElement('span');
  text.textContent = 'Powered by Zyn.';
  text.style.transition = 'font-size 0.6s ease';

  container.appendChild(video);
  container.appendChild(text);
  document.body.appendChild(container);

  // Fade in
  setTimeout(() => {
    container.style.opacity = '1';
  }, 200);

  // Shrink and dock after 2.5s
  setTimeout(() => {
    container.style.top = '';
    container.style.left = '';
    container.style.bottom = '20px';
    container.style.right = '20px';
    container.style.transform = 'scale(1)';
    container.style.padding = '8px 12px';
    container.style.fontSize = '14px';
    video.style.height = '40px';
  }, 2500);
})();
