const products = [
  { id: 1, name: 'Laptop', price: 24000, color: 'red' },
  { id: 2, name: 'Smartphone', price: 17000, color: 'black' },
  { id: 3, name: 'Tablet', price: 4500, color: 'silver' },
  { id: 4, name: 'Headphones', price: 5000, color: 'black' },
  { id: 5, name: 'Speaker', price: 10000, color: 'silver' },
  { id: 6, name: 'TV', price: 15000, color: 'black' },
  { id: 7, name: 'Earphones', price: 3000, color: 'white' },
  { id: 8, name: 'Smartwatch', price: 25000, color: 'black' },
];

const blackColorCheckbox = document.querySelector('#blackColorCheckbox');
const productListContainer = document.querySelector('#productList');
const totalProducts = document.querySelector('#totalProducts');
const totalCost = document.querySelector('#totalCost');

function renderProducts(isChecked) {
  const filterProducts = isChecked
    ? products.filter(
        (product) => product.color === 'black' && product.price > 5000
      )
    : products;

  const productListHTML = filterProducts.map(
    (product) => `
    <li>
    <strong>Name: </strong>${product.name}<br>
    <strong>Price: </strong>$ ${product.price}<br>
    <strong>Color: </strong>${product.color}
    </li>
    <hr>
    `
  );

  productListContainer.innerHTML = productListHTML.join('');

  totalProducts.textContent = `${filterProducts.length}`;
  const totalInventoryCost = filterProducts.reduce(
    (acc, curr) => acc + curr.price,
    0
  );

  totalCost.textContent = `$ ${totalInventoryCost}`;
}

renderProducts(false);

blackColorCheckbox.addEventListener('change', function () {
  renderProducts(blackColorCheckbox.checked);
});
