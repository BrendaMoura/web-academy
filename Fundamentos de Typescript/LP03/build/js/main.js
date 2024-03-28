import { TV, Celular, Bicicleta, Item, Cart } from "./classes.js";
const productList = document.getElementById("list");
const cartList = document.getElementById("cart-items");
const clearCart = document.getElementById("clear-cart");
const finishCart = document.getElementById("finish-cart");
const list_products = [];
const cart = new Cart([]);
const loadProducts = () => {
    const television = new TV("TV Epsilon", "FullHD", 50, "LG", 6510);
    const cellphone = new Celular("Celular Epsilon", 500, "Samsung", 3500);
    const bicycle = new Bicicleta("Bicicleta Epsilon", 17, "Caloi", 4350);
    list_products.push(television);
    list_products.push(cellphone);
    list_products.push(bicycle);
};
const addProductToScreen = (product) => {
    const card = document.createElement("article");
    card.classList.add("card");
    const img = document.createElement("img");
    img.classList.add("card-img");
    img.src = "../build/img/placeholder-image.png";
    const body = document.createElement("div");
    body.classList.add("card-body");
    const head = document.createElement("div");
    head.classList.add("head");
    const title = document.createElement("h4");
    title.textContent = product.modelo;
    const spanLeft = document.createElement("span");
    const price = document.createElement("p");
    price.textContent = `R$${product.valor}`;
    const btnAddToCart = document.createElement("span");
    btnAddToCart.classList.add("close");
    btnAddToCart.innerHTML = "&plus;";
    btnAddToCart.addEventListener("click", () => {
        addProductToCart(product.id);
    });
    const description = document.createElement("p");
    if (product instanceof TV) {
        description.textContent = `${product.modelo} ${product.resolucao} ${product.polegadas} ${product.fabricante}`;
    }
    else if (product instanceof Celular) {
        description.textContent = `${product.modelo} ${product.memoria} ${product.fabricante}`;
    }
    else {
        description.textContent = `${product.modelo} ${product.aro} ${product.fabricante}`;
    }
    spanLeft.appendChild(price);
    spanLeft.appendChild(btnAddToCart);
    head.appendChild(title);
    head.appendChild(spanLeft);
    body.appendChild(head);
    body.appendChild(description);
    card.appendChild(img);
    card.appendChild(body);
    card.id = `item${product.id}`;
    productList.appendChild(card);
};
const loadList = () => {
    list_products.map((product) => {
        addProductToScreen(product);
    });
};
const getCartTotal = () => {
    return cart.items.reduce((total, item) => total + item.product.valor * item.qtd, 0);
};
const isCartEmpty = () => {
    return cart.items.length === 0;
};
const isProductInsideCart = (id) => {
    return cart.items.some((item) => item.product.id === id);
};
const showProductFromCart = (modelo, id) => {
    const card = document.createElement("article");
    card.classList.add("cart-item");
    const body = document.createElement("div");
    body.classList.add("item-body");
    const title = document.createElement("h4");
    title.textContent = modelo;
    const span = document.createElement("span");
    span.classList.add("minus-plus");
    const minus = document.createElement("input");
    minus.setAttribute("type", "button");
    minus.value = "-";
    minus.addEventListener("click", () => {
        decreaseQtdProduct(id);
    });
    const qtd = document.createElement("p");
    qtd.id = "qtd";
    qtd.textContent = "1";
    const plus = document.createElement("input");
    plus.setAttribute("type", "button");
    plus.value = "+";
    plus.addEventListener("click", () => {
        increaseQtdProduct(id);
    });
    const img = document.createElement("img");
    img.classList.add("item-img");
    img.src = "../build/img/placeholder-image.png";
    span.appendChild(minus);
    span.appendChild(qtd);
    span.appendChild(plus);
    body.appendChild(title);
    body.appendChild(span);
    card.appendChild(body);
    card.appendChild(img);
    card.id = `item${id}`;
    cartList.appendChild(card);
};
const updateCart = () => {
    const emptyCart = document.getElementById("empty-cart");
    if (isCartEmpty()) {
        emptyCart.style.display = "inline";
    }
    else {
        emptyCart.style.display = "none";
    }
    const cartTotal = document.querySelector(".cart-footer p");
    cartTotal.textContent = `Subtotal: R$${getCartTotal()}`;
};
const addProductToCart = (id) => {
    if (isProductInsideCart(id)) {
        increaseQtdProduct(id);
        return;
    }
    const product = list_products.find((p) => p.id === id);
    const item = new Item(product, 1);
    cart.items.push(item);
    updateCart();
    showProductFromCart(product.modelo, id);
};
const increaseQtdProduct = (id) => {
    const qtd = cartList.querySelector(`#item${id} #qtd`);
    const idProduct = cart.items.findIndex((p) => p.product.id === id);
    qtd.textContent = (++cart.items[idProduct].qtd).toString();
    updateCart();
};
const decreaseQtdProduct = (id) => {
    const idProduct = cart.items.findIndex((p) => p.product.id === id);
    const qtdProduct = --cart.items[idProduct].qtd;
    if (qtdProduct === 0) {
        cart.items.splice(idProduct, 1);
        cartList.removeChild(cartList.querySelector(`#item${id}`));
        updateCart();
        return;
    }
    const qtdLabel = cartList.querySelector(`#item${id} #qtd`);
    qtdLabel.textContent = qtdProduct.toString();
    updateCart();
};
clearCart.addEventListener("click", () => {
    cart.items = [];
    const children = cartList.children;
    for (let i = 0; i < children.length; i++) {
        if (children[i].tagName !== "IMG") {
            cartList.removeChild(children[i]);
        }
    }
    updateCart();
});
finishCart.addEventListener("click", () => {
    alert("Obrigada por comprar nossos produtos!");
});
loadProducts();
loadList();
updateCart();
