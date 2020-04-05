import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_VudDN0kMYOiSljOsBBRf6Y9400Lu0Dnnvs';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successfull');
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
