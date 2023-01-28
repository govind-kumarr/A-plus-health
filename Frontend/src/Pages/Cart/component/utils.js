function givePrice(price) {
  price = price.replace("Rs. ", "");
  price = price.replace(",", "");
  price = price.replace(".", "");
  price = +price;
  price = price / 100;
  return price;
}

export { givePrice };
