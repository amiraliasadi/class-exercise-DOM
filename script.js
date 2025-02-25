document.addEventListener('DOMContentLoaded', () => {
  const categoryFilter = document.getElementById('categoryFilter');
  const productContainer = document.getElementById('productContainer');
  const productCards = document.querySelectorAll('.product-card');

  categoryFilter.addEventListener('change', () => {
    const selectedCategory = categoryFilter.value;

    productCards.forEach((card) => {
      const cardCategory = card.dataset.category;

      if (selectedCategory === 'all' || selectedCategory === cardCategory) {
        card.style.display = 'inline-block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
