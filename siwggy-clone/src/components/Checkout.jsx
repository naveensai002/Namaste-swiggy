import React from 'react';
import { clearCart } from '../features/cart/cartSlice';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
  const price = useSelector((state) => state.cart.orderTotal);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePayment = () => {
    dispatch(clearCart());
    navigate('/');
  };

  const launchRazorPay = () => {
    let options = {
      key: 'rzp_test_nX8vfzrmgj0rey',
      amount: price,
      currency: 'INR',
      name: 'Foodio Sirsa',
      description: 'Order food online',
      // image: Logo,
      handler: handlePayment,
      theme: { color: '#c4242d' },
    };

    const razorPayment = new window.Razorpay(options);
    razorPayment.open();
  };

  return launchRazorPay;
}
