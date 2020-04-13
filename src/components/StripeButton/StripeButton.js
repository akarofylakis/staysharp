import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_VudDN0kMYOiSljOsBBRf6Y9400Lu0Dnnvs';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment Successful');
      })
      .catch((error) => {
        console.log('Payment Error ' + JSON.parse(error));
        alert('There was an issue with your payment');
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='StaySharp Ltd.'
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
