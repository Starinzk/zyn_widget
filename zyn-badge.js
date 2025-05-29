(function () {
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.bottom = '20px';
  container.style.right = '20px';
  container.style.zIndex = '9999';
  container.style.padding = '8px 12px';
  container.style.background = '#fff';
  container.style.borderRadius = '12px';
  container.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
  container.style.display = 'flex';
  container.style.alignItems = 'center';
  container.style.gap = '10px';
  container.style.fontFamily = 'sans-serif';
  container.style.fontSize = '14px';

  const video = document.createElement('video');
  video.src = 'https://starinzk.github.io/zyn_widget/ZYN.mp4';
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.style.height = '40px';
  video.style.borderRadius = '8px';

  const text = document.createElement('span');
  text.textContent = 'Built by Zyn.';

  container.appendChild(video);
  container.appendChild(text);
  document.body.appendChild(container);
})();
