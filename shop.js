const addToCartButtons = document.querySelectorAll('.product-card button');

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
   
    alert('Added to cart :)');
  });
});
