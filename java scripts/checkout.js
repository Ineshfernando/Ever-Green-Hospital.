
function getCartFromLocalStorage() {
    const cartString = localStorage.getItem("cart");
    return cartString ? JSON.parse(cartString) : [];
  }
  
  const cart = getCartFromLocalStorage(); 
  
  
  const populateCartTable = () => {
    const checkoutCartItems = document.getElementById('checkoutCartItems');
    checkoutCartItems.innerHTML = ''; 
  
    let grandTotal = 0;
  
    cart.forEach((item) => {
      const total = item.price * item.quantity;
      grandTotal += total;
  
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><img src="${item.imageUrl}" alt="${item.name}" style="width: 50px; height: 50px;"></td>
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>${item.quantity}</td>
        <td>$${total.toFixed(2)}</td>
      `;
      checkoutCartItems.appendChild(row);
    });
  
    
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `
      <td colspan="4" style="text-align: right; font-weight: bold;">Grand Total:</td>
      <td style="font-weight: bold;">$${grandTotal.toFixed(2)}</td>
    `;
    checkoutCartItems.appendChild(totalRow);
  };
  
  
  populateCartTable();
  