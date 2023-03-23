import React, {createContext, useEffect, useState} from 'react';


export const CartContext = createContext();


const CartProvider = ( { children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price * item.amount, 0);
  
    setTotal(total);})

  useEffect(() => {
    if (cart) {
        const amount = cart.reduce((total, item) => {
          return total + item.amount;
      }, 0);
      setItemAmount(amount);
    }
    }, [cart]) 

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

  
    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          return {
          ...item,
            amount: cartItem.amount + 1
          }}
        else{  return item;}
      })
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id!== id));
  };
  const increaseAmount = (id) => {
   const cartItem = cart.find(item => item.id === id);
   addToCart(cartItem, id);
  };
  const decreaseAmount = (id) => {
    const cartItem = cart.find(item => item.id === id);
    
    if (cartItem) {
      const newCart = cart.map(item => {
        if (item.id === id) {
          return {
          ...item,
            amount: cartItem.amount - 1
          }}
        else{  return item;}
      })
      setCart(newCart);
    } 
    if (cartItem.amount < 2) { 
      removeFromCart(id);
    }
   };

  return <CartContext.Provider value={ {cart, addToCart, removeFromCart, decreaseAmount, increaseAmount, itemAmount, total} }>{children}</CartContext.Provider>;
};

export default CartProvider;
