const stringBtn = document.getElementById('stringBtn');
const container = document.getElementById('container');

stringBtn.addEventListener('click', () => {
 
  stringBtn.style.transform = 'translateY(15px)';
  
  setTimeout(() => {
    stringBtn.style.transform = 'translateY(0)';
    
    container.classList.toggle('active');
  }, 150);
});
