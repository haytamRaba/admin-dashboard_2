document.getElementById('submit-supplier').addEventListener('click', createSupplier);

let suppliers = [];

function createSupplier() {
  const id = suppliers.length + 1;
  const name = document.getElementById('supplier-name').value;
  const contact = document.getElementById('contact').value;
  const address = document.getElementById('address').value;

  const supplier = { id, name, contact, address };
  suppliers.push(supplier);
  renderSuppliers();
}

function renderSuppliers() {
  const tbody = document.getElementById('suppliers-tbody');
  tbody.innerHTML = '';

  suppliers.forEach(supplier => {
    const row = `
      <tr>
        <td>${supplier.id}</td>
        <td>${supplier.name}</td>
        <td>${supplier.contact}</td>
        <td>${supplier.address}</td>
        <td><button onclick="updateSupplier(${supplier.id})">Update</button></td>
        <td><button onclick="deleteSupplier(${supplier.id})">Delete</button></td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

function updateSupplier(id) {
  // Logic for updating supplier (to be implemented)
}

function deleteSupplier(id) {
  suppliers = suppliers.filter(supplier => supplier.id !== id);
  renderSuppliers();
}
