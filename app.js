const categories = [
  ["All Products"],
  ["Spices & Masalas", "Whole Spices", "Ground Spices", "Spice Blends", "Masala Mixes"],
  ["Rice & Grains", "Basmati", "Sona Masoori", "Other Rice", "Grains"],
  ["Lentils & Pulses", "Toor Dal", "Chana Dal", "Moong Dal", "Rajma", "Urad Dal", "Mixed"],
  ["Flours & Atta", "Wheat Atta", "Besan", "Rice Flour", "Specialty"],
  ["Oils & Ghee", "Mustard Oil", "Coconut Oil", "Ghee", "Sesame Oil"],
  ["Snacks & Namkeen", "Bhujia", "Mixtures", "Chips", "Papad", "Biscuits"],
  ["Beverages & Chai", "Tea/Chai", "Juices", "Lassi", "Masala Soda"],
  ["Frozen Foods", "Parathas", "Samosas", "Paneer", "Naan/Roti", "Vegetables"],
  ["Ready-to-Eat Meals", "Curries", "Rice Dishes", "Dal", "Meal Kits"],
  ["Pickles & Chutneys"],
  ["Sweets & Desserts", "Mixes", "Ready-Made", "Dry Sweets"],
  ["Dairy Products"],
  ["Health & Wellness"],
  ["Paan & Mouth Fresheners"],
];

const products = [
  item("MDH Chana Masala 100g", "MDH", "Spice Blends", 12, 2.1, "In Stock", 5),
  item("Everest Garam Masala 100g", "Everest", "Masala Mixes", 24, 1.85, "In Stock", 6),
  item("Catch Turmeric Powder 200g", "Catch", "Ground Spices", 24, 2.35, "Low Stock", 4),
  item("Shan Biryani Masala 50g", "Shan", "Masala Mixes", 48, 1.55, "In Stock", 8),
  item("TRS Cumin Seeds 400g", "TRS", "Whole Spices", 12, 4.75, "Pre-Order", 5),
  item("Daawat Extra Long Basmati 10lb", "Daawat", "Basmati", 6, 14.25, "In Stock", 10),
  item("Tata Sampann Toor Dal 4lb", "Tata", "Toor Dal", 12, 6.5, "In Stock", 6),
  item("Laxmi Chana Dal 4lb", "Laxmi", "Chana Dal", 12, 5.95, "Low Stock", 5),
  item("Ashirvaad Whole Wheat Atta 20lb", "Ashirvaad", "Wheat Atta", 6, 13.8, "In Stock", 8),
  item("Patanjali Mustard Oil 1L", "Patanjali", "Mustard Oil", 12, 6.95, "Pre-Order", 4),
  item("Mother's Recipe Mango Pickle 500g", "Mother's Recipe", "Pickles & Chutneys", 12, 3.75, "In Stock", 5),
  item("Haldiram's Aloo Bhujia 400g", "Haldiram's", "Bhujia", 24, 3.15, "In Stock", 8),
  item("Bikano Navratan Mixture 400g", "Bikano", "Mixtures", 24, 2.95, "Low Stock", 8),
  item("Britannia Good Day Cashew 231g", "Britannia", "Biscuits", 24, 2.25, "In Stock", 10),
  item("Parle-G Original 800g", "Parle", "Biscuits", 12, 3.1, "In Stock", 10),
  item("MTR Ready To Eat Dal Makhani 300g", "MTR", "Dal", 24, 2.8, "Pre-Order", 6),
  item("Gits Gulab Jamun Mix 200g", "Gits", "Mixes", 24, 2.45, "In Stock", 6),
  item("Deep Frozen Samosa 20pc", "Deep", "Samosas", 12, 8.95, "Low Stock", 4),
  item("Swad Paneer Cubes 400g", "Swad", "Paneer", 12, 7.5, "In Stock", 5),
  item("East End Coconut Milk 400ml", "East End", "Coconut Oil", 24, 1.95, "In Stock", 8),
  item("24 Mantra Organic Brown Rice 2lb", "24 Mantra", "Other Rice", 12, 5.85, "Pre-Order", 5),
  item("Tata Tea Premium 1kg", "Tata", "Tea/Chai", 12, 9.25, "In Stock", 6),
  item("Haldiram's Khatta Meetha 400g", "Haldiram's", "Mixtures", 24, 3.05, "In Stock", 8),
  item("Laxmi Rajma Red Kidney Beans 4lb", "Laxmi", "Rajma", 12, 5.75, "Low Stock", 5),
  item("Deep Garlic Naan 5pc", "Deep", "Naan/Roti", 12, 4.95, "In Stock", 6),
];

const accounts = [
  ["Loblaws Canada", "National Chain", "Priya Mehta", "priya.mehta@loblaws.ca", "Toronto", "ON", "Active"],
  ["Costco Wholesale Canada", "National Chain", "Arjun Singh", "arjun.singh@costco.ca", "Ottawa", "ON", "Active"],
  ["Walmart Canada", "National Chain", "Maya Patel", "maya.patel@walmart.ca", "Mississauga", "ON", "Active"],
  ["Sobeys Inc.", "National Chain", "Neel Shah", "neel.shah@sobeys.ca", "Dartmouth", "NS", "Active"],
  ["FreshCo Ontario", "Regional", "Sara Gill", "sara.gill@freshco.ca", "Brampton", "ON", "Active"],
  ["Food Basics", "Regional", "Karan Joshi", "karan.joshi@foodbasics.ca", "Hamilton", "ON", "Pending Approval"],
  ["Apna Bazaar Calgary", "Independent", "Ravi Verma", "ravi@apnabazaar.ca", "Calgary", "AB", "Active"],
  ["Punjab Grocers Surrey", "Independent", "Simran Kaur", "simran@punjabgrocers.ca", "Surrey", "BC", "Pending Approval"],
].map((a, i) => ({ id: `A-${i + 1}`, name: a[0], type: a[1], contact: a[2], email: a[3], phone: "416-555-01" + i, city: a[4], province: a[5], status: a[6], totalOrders: i + 2, lastOrder: `2026-05-0${Math.min(i + 1, 7)}` }));

const statuses = ["New", "Confirmed", "Sourcing in India", "Shipped from India", "At Port/Dock", "In Transit Domestic", "Delivered", "Cancelled"];
const orders = Array.from({ length: 10 }, (_, i) => {
  const account = accounts[i % accounts.length];
  const lines = products.slice(i, i + 4).map((p, idx) => ({ product: p, qty: idx + 3 }));
  const cases = lines.reduce((sum, line) => sum + line.qty, 0);
  const total = lines.reduce((sum, line) => sum + line.qty * line.product.casePrice, 0);
  return {
    id: `ORD-202605${String(i + 1).padStart(2, "0")}`,
    date: `2026-05-${String(i + 1).padStart(2, "0")}`,
    account: account.name,
    location: `${account.city}, ${account.province}`,
    contact: account.contact,
    items: lines.length,
    cases,
    total,
    status: statuses[i % statuses.length],
    lines,
  };
});

const shipments = [
  ship("SHP-1001", orders[2], "Sourcing", "2026-05-05", "2026-06-08", "2026-06-14", "Blue Dart / Manitoulin"),
  ship("SHP-1002", orders[3], "Shipped from India", "2026-05-02", "2026-06-02", "2026-06-09", "Maersk / Day & Ross"),
  ship("SHP-1003", orders[4], "At Dock", "2026-04-25", "2026-05-28", "2026-06-01", "CMA CGM / Challenger"),
  ship("SHP-1004", orders[5], "In Transit", "2026-04-20", "2026-05-20", "2026-05-25", "MSC / TForce"),
  ship("SHP-1005", orders[6], "Delivered", "2026-04-02", "2026-05-01", "2026-05-06", "Hapag-Lloyd / Local Cartage"),
];

const cart = new Map();
let viewMode = "grid";
let currentAdminTab = "home";

function item(name, brand, category, pack, unitPrice, availability, moq) {
  const sku = `${brand.replace(/[^A-Z0-9]/gi, "").slice(0, 3).toUpperCase()}-${Math.floor(1000 + Math.random() * 8999)}`;
  return { id: sku, name, brand, category, pack, unitPrice, casePrice: unitPrice * pack, availability, moq };
}

function ship(id, order, status, shipDate, dockEta, finalEta, carrier) {
  return { id, orderId: order.id, account: order.account, origin: "India", status, shipDate, dockEta, finalEta, carrier };
}

function money(value) {
  return `$${value.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} CAD`;
}

function badge(status) {
  const cls = {
    "In Stock": "badge-success",
    "Low Stock": "badge-warning",
    "Pre-Order": "badge-info",
    New: "badge-info",
    Confirmed: "badge-success",
    "Sourcing in India": "badge-purple",
    "Shipped from India": "badge-indigo",
    "At Port/Dock": "badge-orange",
    "In Transit Domestic": "badge-yellow",
    Delivered: "badge-success",
    Cancelled: "badge-danger",
    Sourcing: "badge-purple",
    Packed: "badge-info",
    "In Customs": "badge-orange",
    "At Dock": "badge-orange",
    "Dispatched to Trucker": "badge-yellow",
    "In Transit": "badge-yellow",
  }[status] || "";
  return `<span class="badge ${cls}">${status}</span>`;
}

function init() {
  document.querySelector("[data-login]").addEventListener("click", () => showMode("buyer"));
  document.querySelectorAll("[data-mode]").forEach((button) => button.addEventListener("click", () => showMode(button.dataset.mode)));
  document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => showBuyerView(button.dataset.view)));
  document.querySelectorAll("[data-admin-tab]").forEach((button) => button.addEventListener("click", () => renderAdmin(button.dataset.adminTab)));
  document.getElementById("catalogSearch").addEventListener("input", renderCatalog);
  document.getElementById("minPrice").addEventListener("input", renderCatalog);
  document.getElementById("maxPrice").addEventListener("input", renderCatalog);
  document.querySelectorAll("[data-availability]").forEach((input) => input.addEventListener("change", renderCatalog));
  renderSidebar();
  renderCatalog();
  renderAdmin("home");
}

function showMode(mode) {
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("buyerApp").classList.toggle("hidden", mode !== "buyer");
  document.getElementById("adminApp").classList.toggle("hidden", mode !== "admin");
}

function showBuyerView(view) {
  ["catalog", "cart", "orders"].forEach((name) => {
    document.getElementById(`${name}View`).classList.toggle("hidden", name !== view);
  });
  if (view === "cart") renderCart();
  if (view === "orders") renderBuyerOrders();
}

function renderSidebar() {
  document.getElementById("categoryTree").innerHTML = categories.map(([parent, ...children]) => `
    <div>
      <button data-category="${parent}">v ${parent}</button>
      ${children.map((child) => `<button class="child" data-category="${child}">> ${child}</button>`).join("")}
    </div>
  `).join("");
  document.querySelectorAll("[data-category]").forEach((button) => button.addEventListener("click", () => {
    document.body.dataset.category = button.dataset.category;
    renderCatalog();
  }));
  const brands = [...new Set(products.map((product) => product.brand))].sort();
  document.getElementById("brandFilters").innerHTML = brands.map((brand) => `<label><input type="checkbox" value="${brand}" data-brand /> ${brand}</label>`).join("");
  document.querySelectorAll("[data-brand]").forEach((input) => input.addEventListener("change", renderCatalog));
}

function getFilteredProducts() {
  const search = document.getElementById("catalogSearch").value.toLowerCase();
  const selectedCategory = document.body.dataset.category || "All Products";
  const brands = [...document.querySelectorAll("[data-brand]:checked")].map((input) => input.value);
  const availability = [...document.querySelectorAll("[data-availability]:checked")].map((input) => input.value);
  const min = Number(document.getElementById("minPrice").value || 0);
  const max = Number(document.getElementById("maxPrice").value || Infinity);
  return products.filter((product) => {
    const matchesSearch = [product.name, product.brand, product.id].join(" ").toLowerCase().includes(search);
    const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
    const matchesBrand = brands.length === 0 || brands.includes(product.brand);
    const matchesAvailability = availability.length === 0 || availability.includes(product.availability);
    return matchesSearch && matchesCategory && matchesBrand && matchesAvailability && product.casePrice >= min && product.casePrice <= max;
  });
}

function renderCatalog() {
  const filtered = getFilteredProducts();
  const content = document.getElementById("catalogView");
  content.innerHTML = `
    <div class="page-header">
      <div>
        <h1>Wholesale Catalog</h1>
        <p>Showing 1-${Math.min(24, filtered.length)} of ${products.length} products</p>
      </div>
      <button class="slds-button slds-button_neutral" data-view="orders">My Orders</button>
    </div>
    <div class="toolbar">
      <div class="row-actions">
        <button class="slds-button ${viewMode === "grid" ? "active" : ""}" data-catalog-mode="grid">Grid View</button>
        <button class="slds-button ${viewMode === "list" ? "active" : ""}" data-catalog-mode="list">List View</button>
      </div>
      <select class="slds-select" aria-label="Sort products">
        <option>Relevance</option><option>Price Low-High</option><option>Price High-Low</option><option>Brand A-Z</option><option>Newest</option>
      </select>
    </div>
    ${viewMode === "grid" ? renderProductGrid(filtered) : renderProductList(filtered)}
    <div class="toolbar"><span class="muted">Rows per page: 24 | 48 | 96</span><span class="muted">Page 1 of 11</span></div>
  `;
  content.querySelectorAll("[data-catalog-mode]").forEach((button) => button.addEventListener("click", () => {
    viewMode = button.dataset.catalogMode;
    renderCatalog();
  }));
  content.querySelectorAll("[data-add]").forEach((button) => button.addEventListener("click", () => addToCart(button.dataset.add)));
  content.querySelector("[data-view='orders']").addEventListener("click", () => showBuyerView("orders"));
}

function renderProductGrid(list) {
  return `<div class="product-grid">${list.map((product) => `
    <article class="product-card slds-card">
      <div class="image-placeholder">Product Image</div>
      <div class="muted">${product.brand}</div>
      <div class="product-name">${product.name}</div>
      <div class="sku">SKU ${product.id}</div>
      <div>Case of ${product.pack} units | Unit ${money(product.unitPrice)}</div>
      <div class="price">Case Price ${money(product.casePrice)}</div>
      <div>MOQ: Min ${product.moq} cases</div>
      ${badge(product.availability)}
      <div class="card-actions">
        <input class="slds-input" type="number" min="${product.moq}" value="${product.moq}" data-qty="${product.id}" aria-label="Cases" />
        <button class="slds-button slds-button_brand" data-add="${product.id}">Add to Cart</button>
      </div>
    </article>
  `).join("")}</div>`;
}

function renderProductList(list) {
  return table(["Thumbnail", "Product Name", "SKU", "Brand", "Case Pack", "Unit Price", "Case Price", "MOQ", "Availability", "Qty", "Add to Cart"], list.map((product) => [
    `<div class="thumb"></div>`,
    product.name,
    product.id,
    product.brand,
    `Case of ${product.pack}`,
    money(product.unitPrice),
    money(product.casePrice),
    `Min ${product.moq}`,
    badge(product.availability),
    `<input class="slds-input" type="number" min="${product.moq}" value="${product.moq}" data-qty="${product.id}" />`,
    `<button class="slds-button slds-button_brand" data-add="${product.id}">Add</button>`,
  ]));
}

function addToCart(id) {
  const product = products.find((entry) => entry.id === id);
  const qtyInput = document.querySelector(`[data-qty='${id}']`);
  const qty = Math.max(product.moq, Number(qtyInput?.value || product.moq));
  cart.set(id, (cart.get(id) || 0) + qty);
  updateCartBadge();
  toast(`${product.name} added to cart.`);
}

function updateCartBadge() {
  document.getElementById("cartBadge").textContent = [...cart.values()].reduce((sum, qty) => sum + qty, 0);
}

function renderCart(success = false) {
  const lines = [...cart.entries()].map(([id, qty]) => ({ product: products.find((product) => product.id === id), qty }));
  const subtotal = lines.reduce((sum, line) => sum + line.qty * line.product.casePrice, 0);
  const cases = lines.reduce((sum, line) => sum + line.qty, 0);
  document.getElementById("cartView").innerHTML = success ? `
    <div class="page-header"><div><h1>Order #ORD-20260507 submitted</h1><p>You'll receive confirmation within 1 business day.</p></div></div>
    <button class="slds-button slds-button_brand" data-view="catalog">Continue Shopping</button>
  ` : `
    <div class="page-header"><div><h1>Cart</h1><p>Manual confirmation order, no online payment required.</p></div></div>
    <div class="cart-layout">
      <div>
        ${table(["Product Name", "SKU", "Case Pack", "Case Price", "Quantity", "Line Total"], lines.map((line) => [
          line.product.name,
          line.product.id,
          `Case of ${line.product.pack}`,
          money(line.product.casePrice),
          `<input class="slds-input" type="number" value="${line.qty}" data-cart-qty="${line.product.id}" />`,
          money(line.qty * line.product.casePrice),
        ]))}
        <label class="slds-form-element"><span class="slds-form-element__label">Special Instructions / Notes</span><textarea class="slds-textarea">Please confirm earliest available container schedule.</textarea></label>
        <p class="muted">Standard lead time: 4-6 weeks from order confirmation. Final pricing confirmed via email.</p>
      </div>
      <aside class="summary-card">
        <h2>Order Summary</h2>
        <div class="summary-row"><span>Subtotal</span><strong>${money(subtotal)}</strong></div>
        <div class="summary-row"><span>Total Cases</span><strong>${cases}</strong></div>
        <div class="summary-row"><span>Total Line Items</span><strong>${lines.length}</strong></div>
        <div class="record-actions"><button class="slds-button slds-button_neutral" data-view="catalog">Continue Shopping</button><button class="slds-button slds-button_brand" data-submit-order>Submit Order</button></div>
      </aside>
    </div>
  `;
  document.querySelectorAll("[data-cart-qty]").forEach((input) => input.addEventListener("change", () => {
    cart.set(input.dataset.cartQty, Number(input.value));
    renderCart();
    updateCartBadge();
  }));
  document.querySelectorAll("[data-view='catalog']").forEach((button) => button.addEventListener("click", () => showBuyerView("catalog")));
  document.querySelector("[data-submit-order]")?.addEventListener("click", () => {
    cart.clear();
    updateCartBadge();
    toast("Order submitted for manual review.");
    renderCart(true);
  });
}

function renderBuyerOrders(order = null) {
  document.getElementById("ordersView").innerHTML = order ? renderOrderDetail(order, false) : `
    <div class="page-header"><div><h1>My Orders</h1><p>Track purchase orders and shipment stages.</p></div></div>
    ${table(["Order #", "Date", "Total Items", "Total Cases", "Estimated Total", "Status", "View Details"], orders.slice(0, 6).map((entry) => [
      entry.id, entry.date, entry.items, entry.cases, money(entry.total), badge(entry.status), `<button class="slds-button slds-button_neutral" data-buyer-order="${entry.id}">View Details</button>`,
    ]))}
  `;
  document.querySelectorAll("[data-buyer-order]").forEach((button) => button.addEventListener("click", () => renderBuyerOrders(orders.find((entry) => entry.id === button.dataset.buyerOrder))));
}

function renderAdmin(tab) {
  currentAdminTab = tab;
  document.querySelectorAll("[data-admin-tab]").forEach((button) => button.classList.toggle("active", button.dataset.adminTab === tab));
  const renderers = { home: adminHome, orders: adminOrders, products: adminProducts, accounts: adminAccounts, shipments: adminShipments, reports: adminReports };
  document.getElementById("adminContent").innerHTML = renderers[tab]();
  bindAdminActions();
}

function adminHome() {
  return `
    <div class="page-header"><div><h1>Welcome back, Owner Name</h1><p>Salesforce Lightning home dashboard</p></div></div>
    <div class="metric-grid">
      ${metric("New Orders", "8", "this week")}${metric("Pending Fulfillment", "14", "orders")}${metric("In Transit", "6", "shipments")}
      ${metric("Revenue This Month", "$127,450", "CAD")}${metric("Active Retail Partners", "12", "accounts")}${metric("Total Products", "247", "SKUs")}
    </div>
    <div class="two-column">
      <section class="related-list"><h2>Recent Orders</h2>${ordersTable(orders.slice(0, 6))}</section>
      <aside class="action-panel"><h2>Orders Needing Action</h2>${orders.filter((o) => ["New", "Confirmed"].includes(o.status)).map((o) => `<p><strong>${o.id}</strong><br>${o.account}<br>${badge(o.status)}</p>`).join("")}</aside>
    </div>
  `;
}

function adminOrders(status = "All") {
  const filtered = status === "All" ? orders : orders.filter((order) => order.status.startsWith(status) || order.status === status);
  return `
    <div class="page-header"><div><h1>Orders</h1><p>List view with fulfillment filters</p></div></div>
    <div class="scoped-tabs">${["All", "New", "Confirmed", "Sourcing", "Shipped", "At Dock", "In Transit", "Delivered"].map((s) => `<button class="${s === status ? "active" : ""}" data-order-filter="${s}">${s}</button>`).join("")}</div>
    ${ordersTable(filtered)}
  `;
}

function ordersTable(list) {
  return table(["Order #", "Account Name", "Store/Location", "Contact Name", "Date", "Items", "Cases", "Estimated Total", "Status", "Actions"], list.map((order) => [
    order.id, order.account, order.location, order.contact, order.date, order.items, order.cases, money(order.total), badge(order.status), `<button class="slds-button slds-button_neutral" data-admin-order="${order.id}">View</button>`,
  ]));
}

function adminProducts() {
  return `
    <div class="page-header"><div><h1>Products</h1><p>Product2 list view with category filter</p></div><div class="record-actions"><button class="slds-button slds-button_neutral">Import</button><button class="slds-button slds-button_brand">New Product</button></div></div>
    <div class="portal-layout">
      <aside class="sidebar"><h2 class="sidebar-title">Category Tree</h2>${categories.map(([parent]) => `<p>v ${parent}</p>`).join("")}</aside>
      <div>${table(["Product Name", "SKU", "Brand", "Category", "Case Pack", "Unit Price", "Case Price", "Stock Status", "Actions"], products.map((product) => [
        product.name, product.id, product.brand, product.category, `Case of ${product.pack}`, money(product.unitPrice), money(product.casePrice), badge(product.availability), `<button class="slds-button slds-button_neutral" data-admin-product="${product.id}">View</button>`,
      ]))}</div>
    </div>
  `;
}

function adminAccounts() {
  return `
    <div class="page-header"><div><h1>Accounts</h1><p>Retail partner account list</p></div></div>
    ${table(["Account Name", "Type", "Contact Person", "Email", "Phone", "City/Province", "Account Status", "Total Orders", "Last Order Date", "Actions"], accounts.map((account) => [
      account.name, account.type, account.contact, account.email, account.phone, `${account.city}, ${account.province}`, badge(account.status === "Active" ? "Delivered" : "New").replace("Delivered", "Active").replace("New", "Pending Approval"), account.totalOrders, account.lastOrder, account.status === "Pending Approval" ? `<button class="slds-button slds-button_brand">Approve</button>` : `<button class="slds-button slds-button_neutral" data-admin-account="${account.id}">View</button>`,
    ]))}
  `;
}

function adminShipments() {
  return `
    <div class="page-header"><div><h1>Shipments</h1><p>Shipment__c list view</p></div></div>
    ${table(["Shipment #", "Related Order #", "Account", "Origin", "Status", "Ship Date", "ETA at Dock", "ETA Final Delivery", "Carrier/Trucker", "Actions"], shipments.map((shipment) => [
      shipment.id, shipment.orderId, shipment.account, shipment.origin, badge(shipment.status), shipment.shipDate, shipment.dockEta, shipment.finalEta, shipment.carrier, `<button class="slds-button slds-button_neutral" data-admin-shipment="${shipment.id}">View</button>`,
    ]))}
  `;
}

function adminReports() {
  return `<div class="page-header"><div><h1>Reports</h1><p>Prototype placeholder for revenue, category, and fulfillment reporting dashboards.</p></div></div>`;
}

function bindAdminActions() {
  document.querySelectorAll("[data-order-filter]").forEach((button) => button.addEventListener("click", () => {
    document.getElementById("adminContent").innerHTML = adminOrders(button.dataset.orderFilter);
    bindAdminActions();
  }));
  document.querySelectorAll("[data-admin-order]").forEach((button) => button.addEventListener("click", () => {
    document.getElementById("adminContent").innerHTML = renderOrderDetail(orders.find((entry) => entry.id === button.dataset.adminOrder), true);
  }));
  document.querySelectorAll("[data-admin-product]").forEach((button) => button.addEventListener("click", () => {
    const product = products.find((entry) => entry.id === button.dataset.adminProduct);
    document.getElementById("adminContent").innerHTML = recordPage("Product", product.name, [
      ["SKU", product.id], ["Brand", product.brand], ["Category", product.category], ["Case Pack", `Case of ${product.pack}`], ["Unit Price", money(product.unitPrice)], ["Case Price", money(product.casePrice)], ["Stock Status", product.availability], ["MOQ", `${product.moq} cases`],
    ]);
  }));
  document.querySelectorAll("[data-admin-account]").forEach((button) => button.addEventListener("click", () => {
    const account = accounts.find((entry) => entry.id === button.dataset.adminAccount);
    document.getElementById("adminContent").innerHTML = recordPage("Account", account.name, [
      ["Type", account.type], ["Primary Contact", account.contact], ["Email", account.email], ["Phone", account.phone], ["City/Province", `${account.city}, ${account.province}`], ["Status", account.status], ["Total Orders", account.totalOrders], ["Last Order", account.lastOrder],
    ]) + `<section class="related-list"><h2>Related Lists</h2><p>Contacts | Orders | Cases</p></section>`;
  }));
  document.querySelectorAll("[data-admin-shipment]").forEach((button) => button.addEventListener("click", () => {
    const shipment = shipments.find((entry) => entry.id === button.dataset.adminShipment);
    document.getElementById("adminContent").innerHTML = recordPage("Shipment", shipment.id, [
      ["Related Order", shipment.orderId], ["Account", shipment.account], ["Origin", shipment.origin], ["Status", shipment.status], ["Ship Date", shipment.shipDate], ["ETA at Dock", shipment.dockEta], ["ETA Final Delivery", shipment.finalEta], ["Carrier/Trucker", shipment.carrier],
    ]) + renderPath(["Sourcing", "Packed", "Shipped from India", "In Customs", "At Dock", "Dispatched to Trucker", "In Transit", "Delivered"], shipment.status);
  }));
}

function renderOrderDetail(order, admin) {
  return `
    ${recordPage("Order", order.id, [["Account", order.account], ["Contact", order.contact], ["Date", order.date], ["Status", order.status], ["Items", order.items], ["Cases", order.cases], ["Estimated Total", money(order.total)], ["Lead Time", "4-6 weeks"]], admin ? `<select class="slds-select"><option>${order.status}</option>${statuses.map((s) => `<option>${s}</option>`).join("")}</select>` : "")}
    ${renderPath(["New", "Confirmed", "Sourcing in India", "Shipped from India", "At Port/Dock", "In Transit Domestic", "Delivered"], order.status)}
    <section class="related-list"><h2>Order Line Items</h2>${table(["Product Name", "SKU", "Qty", "Case Price", "Line Total"], order.lines.map((line) => [line.product.name, line.product.id, line.qty, money(line.product.casePrice), money(line.qty * line.product.casePrice)]))}</section>
    <section class="related-list"><h2>Shipment Records</h2>${table(["Shipment #", "Stage", "Dates", "Tracking Notes"], shipments.filter((s) => s.orderId === order.id).map((s) => [s.id, badge(s.status), `${s.shipDate} -> ${s.finalEta}`, s.carrier]))}</section>
    <section class="related-list"><h2>Activity Timeline</h2><p>Status updated | Email sent | Buyer note captured</p></section>
    ${admin ? `<button class="slds-button slds-button_brand">Update Status</button>` : ""}
  `;
}

function renderPath(steps, current) {
  const index = steps.indexOf(current);
  return `<div class="path">${steps.map((step, i) => `<span class="path-step ${i < index ? "complete" : ""} ${i === index ? "current" : ""}">${step}</span>`).join("")}</div>`;
}

function recordPage(type, title, fields, action = "") {
  return `
    <div class="page-header"><div><p class="muted">${type}</p><h1>${title}</h1></div><div class="record-actions">${action}<button class="slds-button slds-button_neutral">Edit</button></div></div>
    <section class="record-card detail-grid">${fields.map(([label, value]) => `<div><div class="field-label">${label}</div><div class="field-value">${value}</div></div>`).join("")}</section>
  `;
}

function metric(label, value, note) {
  return `<article class="metric-card"><span class="muted">[ ] ${label}</span><strong>${value}</strong><span class="small">${note}</span></article>`;
}

function table(headers, rows) {
  if (rows.length === 0) return `<div class="table-card"><table class="data-table"><tbody><tr><td>No records found.</td></tr></tbody></table></div>`;
  return `<div class="table-card"><table class="data-table"><thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function toast(message) {
  const el = document.getElementById("toast");
  el.textContent = message;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2500);
}

init();
