(function () {
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.bottom = '20px';
  container.style.right = '20px';
  container.style.zIndex = '9999';
  container.style.padding = '16px 20px';
  container.style.background = '#fff';
  container.style.borderRadius = '16px';
  container.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)';
  container.style.display = 'flex';
  container.style.alignItems = 'center';
  container.style.gap = '14px';
  container.style.fontFamily = 'sans-serif';
  container.style.fontSize = '18px';
  container.style.transition = 'all 0.6s ease';
  container.style.transform = 'scale(1.6)';
  container.style.opacity = '0';
  
  const video = document.createElement('video');
  video.src = 'https://starinzk.github.io/zyn_widget/ZYN.mp4';
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.style.height = '60px';
  video.style.borderRadius = '12px';
  video.style.transition = 'height 0.6s ease';

  const text = document.createElement('span');
  text.textContent = 'Built by Zyn.';
  text.style.transition = 'font-size 0.6s ease';

  container.appendChild(video);
  container.appendChild(text);
  document.body.appendChild(container);

  // Animate in
  setTimeout(() => {
    container.style.opacity = '1';
  }, 100); // initial fade in

  // Shrink after 3 seconds
  setTimeout(() => {
    container.style.transform = 'scale(1)';
    container.style.padding = '8px 12px';
    container.style.fontSize = '14px';
    video.style.height = '40px';
  }, 3000);
})();
