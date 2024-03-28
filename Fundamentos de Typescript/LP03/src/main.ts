import { TV, Celular, Bicicleta, Item, Cart } from "./classes";

const productList: HTMLElement = document.getElementById("list")!;
const cartList: HTMLElement = document.getElementById("cart-items")!;
const clearCart: HTMLElement = document.getElementById("clear-cart")!;
const finishCart: HTMLElement = document.getElementById("finish-cart")!;

type Product = TV | Celular | Bicicleta;

const list_products: Product[] = [];
const cart: Cart<Product> = new Cart([]);

const loadProducts = () => {
  const television = new TV("TV Epsilon", "FullHD", 50, "LG", 6510);
  const cellphone = new Celular("Celular Epsilon", 500, "Samsung", 3500);
  const bicycle = new Bicicleta("Bicicleta Epsilon", 17, "Caloi", 4350);

  list_products.push(television);
  list_products.push(cellphone);
  list_products.push(bicycle);
};

const addProductToScreen = (product: Product) => {
  const card: HTMLElement = document.createElement("article");
  card.classList.add("card");

  const img: HTMLImageElement = document.createElement("img");
  img.classList.add("card-img");
  img.src = "../build/img/placeholder-image.png";

  const body: HTMLDivElement = document.createElement("div");
  body.classList.add("card-body");

  const head: HTMLDivElement = document.createElement("div");
  head.classList.add("head");

  const title: HTMLHeadingElement = document.createElement("h4");
  title.textContent = product.modelo;

  const spanLeft: HTMLSpanElement = document.createElement("span");

  const price: HTMLParagraphElement = document.createElement("p");
  price.textContent = `R$${product.valor}`;

  const btnAddToCart: HTMLSpanElement = document.createElement("span");
  btnAddToCart.classList.add("close");
  btnAddToCart.innerHTML = "&plus;";
  btnAddToCart.addEventListener("click", () => {
    addProductToCart(product.id);
  });

  const description: HTMLParagraphElement = document.createElement("p");
  if (product instanceof TV) {
    description.textContent = `${product.modelo} ${product.resolucao} ${product.polegadas} ${product.fabricante}`;
  } else if (product instanceof Celular) {
    description.textContent = `${product.modelo} ${product.memoria} ${product.fabricante}`;
  } else {
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
  return cart.items.reduce(
    (total, item) => total + item.product.valor * item.qtd,
    0
  );
};

const isCartEmpty = () => {
  return cart.items.length === 0;
};

const isProductInsideCart = (id: number) => {
  return cart.items.some((item) => item.product.id === id);
};

const showProductFromCart = (modelo: string, id: number) => {
  const card: HTMLElement = document.createElement("article");
  card.classList.add("cart-item");

  const body: HTMLDivElement = document.createElement("div");
  body.classList.add("item-body");

  const title: HTMLHeadingElement = document.createElement("h4");
  title.textContent = modelo;

  const span: HTMLElement = document.createElement("span");
  span.classList.add("minus-plus");

  const minus: HTMLInputElement = document.createElement("input");
  minus.setAttribute("type", "button");
  minus.value = "-";
  minus.addEventListener("click", () => {
    decreaseQtdProduct(id);
  });

  const qtd: HTMLParagraphElement = document.createElement("p");
  qtd.id = "qtd";
  qtd.textContent = "1";

  const plus: HTMLInputElement = document.createElement("input");
  plus.setAttribute("type", "button");
  plus.value = "+";
  plus.addEventListener("click", () => {
    increaseQtdProduct(id);
  });

  const img: HTMLImageElement = document.createElement("img");
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
  const emptyCart: HTMLElement = document.getElementById("empty-cart")!;

  if (isCartEmpty()) {
    emptyCart.style.display = "inline";
  } else {
    emptyCart.style.display = "none";
  }

  const cartTotal: HTMLParagraphElement =
    document.querySelector(".cart-footer p")!;
  cartTotal.textContent = `Subtotal: R$${getCartTotal()}`;
};

const addProductToCart = (id: number) => {
  if (isProductInsideCart(id)) {
    increaseQtdProduct(id);
    return;
  }

  const product: Product = list_products.find((p) => p.id === id)!;

  const item = new Item(product, 1);
  cart.items.push(item);

  updateCart();
  showProductFromCart(product.modelo, id);
};

const increaseQtdProduct = (id: number) => {
  const qtd: HTMLParagraphElement = cartList.querySelector(`#item${id} #qtd`)!;
  const idProduct = cart.items.findIndex((p) => p.product.id === id);
  qtd.textContent = (++cart.items[idProduct].qtd).toString();
  updateCart();
};

const decreaseQtdProduct = (id: number) => {
  const idProduct = cart.items.findIndex((p) => p.product.id === id);
  const qtdProduct: number = --cart.items[idProduct].qtd;
  if (qtdProduct === 0) {
    cart.items.splice(idProduct, 1);
    cartList.removeChild(cartList.querySelector(`#item${id}`)!);
    updateCart();
    return;
  }

  const qtdLabel: HTMLParagraphElement = cartList.querySelector(
    `#item${id} #qtd`
  )!;
  qtdLabel.textContent = qtdProduct.toString();
  updateCart();
};

clearCart.addEventListener("click", () => {
  cart.items = [];

  const children: HTMLCollection = cartList.children;

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
