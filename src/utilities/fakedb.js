// use local storage to manage cart data
const addToDb = id => {
  let bookingItem = getBookingItem()

  // add quantity
  const quantity = bookingItem[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    bookingItem[id] = newQuantity;
  }
  else {
    bookingItem[id] = 1;
  }
  localStorage.setItem('booking-cart', JSON.stringify(bookingItem));
}

const removeFromDb = id => {
  const bookingCartItem = localStorage.getItem('booking-cart');
  if (bookingCartItem) {
    const bookingCart = JSON.parse(bookingCartItem);
    if (id in bookingCart) {
      delete bookingCart[id];
      localStorage.setItem('booking-cart', JSON.stringify(bookingCart));
    }
  }
}

const getBookingItem = () => {
  let bookingCart = {};
  //get the shopping cart from local storage
  const bookingCartItem = localStorage.getItem('booking-cart');
  if (bookingCartItem) {
    bookingCart = JSON.parse(bookingCartItem);
  }
  return bookingCart
}

const deleteShoppingCart = () => {
  localStorage.removeItem('booking-cart');
}

export {
  addToDb,
  getBookingItem,
  removeFromDb,
  deleteShoppingCart
}