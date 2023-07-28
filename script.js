const menu = [
    { name: 'Pizza', price: 12.99 },
    { name: 'Burger', price: 9.99 },
    { name: 'Tacos', price: 8.99 },
    { name: 'Pasta', price: 11.99 },
    { name: 'Salad', price: 7.99 },
  ];
  
  const cart = [];
  
  const foodList = document.querySelector('#food-list');
  const cartItems = document.querySelector('#cart-items');
  const cartTotal = document.querySelector('#cart-total');
  
  // Render menu items
  const renderMenu = () => {
    foodList.innerHTML = '';
    menu.forEach((item) => {
      const food = document.createElement('div');
      food.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
        <button class="add-to-cart">Add to Cart</button>
      `;
      food.querySelector('.add-to-cart').addEventListener('click', () => {
        addToCart(item);
      });
      foodList.appendChild(food);
    });
  };
  
  // Render cart items
  const renderCart = () => {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${item.name}</td>
        <td>$${item.price}</td>
      `;
      cartItems.appendChild(tr);
    });
    cartTotal.innerText = `$${total.toFixed(2)}`;
  };
  
  // Add item to cart
  const addToCart = (item) => {
    cart.push(item);
    renderCart();
  };
  
  renderMenu();
  