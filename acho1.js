const navContent1 = document.querySelector('.nav-content-1');
const navContent2 = document.querySelector('.nav-content-2');
const navContent3 = document.querySelector('.nav-content-3');
const navContent4 = document.querySelector('.nav-content-4');

const productsArrow = document.querySelector('#products-arrow');
const renewalsArrow = document.querySelector('#renewals-arrow');
const claimsArrow = document.querySelector('#claims-arrow');
const resourcesArrow = document.querySelector('#resources-arrow');


navContent1.style.display = 'none';
navContent2.style.display = 'none';
navContent3.style.display = 'none';
navContent4.style.display = 'none';

productsArrow.addEventListener('click', () => {
  
  navContent1.style.display = navContent1.style.display === 'flex' ? 'none' : 'flex';
  
});


document.addEventListener('click', (event) => {
  if (!navContent1.contains(event.target) && event.target !== productsArrow) {
    navContent1.style.display = 'none';
    
  }
});

renewalsArrow.addEventListener('click', () => {

navContent2.style.display = navContent2.style.display === 'flex' ? 'none' : 'flex';
  
});


document.addEventListener('click', (event) => {
  if (!navContent2.contains(event.target) && event.target !== renewalsArrow) {
    navContent2.style.display = 'none';
    
  }
});

claimsArrow.addEventListener('click', () => {
navContent3.style.display = navContent3.style.display === 'flex' ? 'none' : 'flex';
  
});


document.addEventListener('click', (event) => {
  if (!navContent3.contains(event.target) && event.target !== claimsArrow) {
    navContent3.style.display = 'none';
    
  }
});

resourcesArrow.addEventListener('click', () => {

navContent4.style.display = navContent4.style.display === 'flex' ? 'none' : 'flex';
  
});


document.addEventListener('click', (event) => {
  if (!navContent4.contains(event.target) && event.target !== resourcesArrow) {
    navContent4.style.display = 'none';
    
  }
});