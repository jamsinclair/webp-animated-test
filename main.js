import './style.css'

import { decodeAnimated } from '@jsquash/webp';

function renderFrames(frames) {
  const framesNode = document.querySelector('#frames');
  framesNode.innerHTML = '';
  for (const frame of frames) {
    const canvas = document.createElement('canvas');
    canvas.width = frame.imageData.width;
    canvas.height = frame.imageData.height;
    const context = canvas.getContext('2d');
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.putImageData(frame.imageData, 0, 0);
    canvas.style.width = '100%';
    canvas.style.height = 'auto';
    framesNode.appendChild(canvas);
  }
}

document.querySelector('form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const file = formData.get('image');
  const imageBuffer = await file.arrayBuffer();
  const frames = await decodeAnimated(imageBuffer);
  renderFrames(frames);
});
