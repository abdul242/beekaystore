
async function loadProducts() {
  const res = await fetch('products.json');
  const products = await res.json();
  const container = document.getElementById('product-list');
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <div class="info">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <strong>Reviews:</strong>
        <ul>${p.reviews.map(r => `<li>${r}</li>`).join('')}</ul>
      </div>
    `;
    container.appendChild(card);
  });
}
window.onload = loadProducts;
