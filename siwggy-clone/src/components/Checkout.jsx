import React from 'react';
import { clearCart } from '../features/cart/cartSlice';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const price = useSelector((store) => store.cart.totalPrice);
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
      name: 'Raghav Foods',
      description: 'Order food online',
      // image: Logo,
      handler: handlePayment,
      theme: { color: '#c4242d' },
    };

    const razorPayment = new window.Razorpay(options);
    razorPayment.open();
  };

  return launchRazorPay;
};

export default Payment;
