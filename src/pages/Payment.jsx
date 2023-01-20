import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';

const Payment = () => {
  const [productData, setProductData] = useState({
    name: 'Orange Product',
    img: '',
    price: '30000',
  });
  const [userData, setUserData] = useState({
    name: 'Paul Ishili',
    email: 'paulishaili@gmail.com',
    phoneNumber: '09161464483',
  });

  const paystackPublicKey = import.meta.env.VITE_REACT_APP_PAYSTACK_PUBLIC_KEY;

  const componentProps = {
    email: userData.email,
    amount: productData.price,
    metadata: {
      name: userData.name,
      phone: userData.phoneNumber,
    },
    publicKey: paystackPublicKey,
    text: 'Buy Now',
    onSuccess: ({ reference }) => {
      alert(
        `Your purchase was successful! Transaction reference: ${reference}`
      );
      //   Send info to backend api to record transactions
      resetForm();
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  return (
    <main>
      <section className="flex flex-col justify-center">
        <div className="container flex flex-col md:flex-row mx-auto my-[5%] w-full max-w-lg bg-white shadow-md">
          <div className="">
            <img src="" alt="" />
          </div>
          <div className="">
            <PaystackButton {...componentProps} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Payment;
