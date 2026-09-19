const track = document.querySelector('.product-carousel-images');
const nextBtn = document.querySelector('.next-button');
const prevBtn = document.querySelector('.prev-button');

// Next Button Logic
nextBtn.addEventListener('click', () => {
    // 1. Get the exact width of one figure
    const itemWidth = track.querySelector('figure').offsetWidth;
    
    // 2. Smoothly scroll to the right
    track.scrollBy({ left: itemWidth, behavior: 'smooth' });

    // 3. Wait for the scroll to finish (approx 400ms), then move the first image to the back
    setTimeout(() => {
      track.appendChild(track.firstElementChild);
    }, 400);
});

// Previous Button Logic
  prevBtn.addEventListener('click', () => {
    const itemWidth = track.querySelector('figure').offsetWidth;
    
    // 1. Move the last image to the front
    track.prepend(track.lastElementChild);
    
    // 2. Instantly counteract the visual shift (no smooth behavior)
    track.scrollLeft += itemWidth;
    
    // 3. Wait 10ms for the browser to catch up, then smoothly scroll left
    setTimeout(() => {
      track.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    }, 10);
  });