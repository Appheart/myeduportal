import React, { useContext, useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { UserContext } from '../App';

const Payment = () => {
  const user = useContext(UserContext);
  const [productData, setProductData] = useState({
    name: 'Orange Product',
    img: '',
    price: 30000 * 100 + 1.5 / 100,
  });
  const [userData, setUserData] = useState({
    name: user.name,
    email: user.email,
    phoneNumber: user.tel,
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
      sendToServer({
        transactionId: reference,
        user: {
          name: userData.name,
          email: userData.email,
          tel: userData.phoneNumber,
        },
        product: {
          name: '',
          img: '',
          price: '',
          status: true,
        },
      });
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  const sendToServer = (data) => {
    console.log(data);
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
