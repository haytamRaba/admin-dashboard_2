document.getElementById('submit-order').addEventListener('click', createOrder);

let orders = [];

function createOrder() {
  const id = orders.length + 1;
  const customerName = document.getElementById('customer-name').value;
  const orderDate = document.getElementById('order-date').value;
  const status = document.getElementById('order-status').value;

  const order = { id, customerName, orderDate, status };
  orders.push(order);
  renderOrders();
}

function renderOrders() {
  const tbody = document.getElementById('orders-tbody');
  tbody.innerHTML = '';

  orders.forEach(order => {
    const row = `
      <tr>
        <td>${order.id}</td>
        <td>${order.customerName}</td>
        <td>${order.orderDate}</td>
        <td>${order.status}</td>
        <td><button onclick="updateOrder(${order.id})">Update</button></td>
        <td><button onclick="deleteOrder(${order.id})">Delete</button></td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

function updateOrder(id) {
  // Logic for updating order (to be implemented)
}

function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id);
  renderOrders();
}
