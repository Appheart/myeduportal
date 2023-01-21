import React, { useContext, useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { UserContext } from '../App';

const Payment = () => {
  const user = useContext(UserContext);

  const [productData, setProductData] = useState({
    name: 'Orange Product',
    img: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
    price: 260000,
  });
  const [userData, setUserData] = useState({
    name: user.name,
    email: user.email,
    phoneNumber: user.tel,
  });

  const waiverFee = () => {
    let { price } = productData;
    let fee = () => {
      if (price <= 2500) return (price * 1.5) / 100;
      else return (price * 1.5) / 100 + 100;
    };

    if (fee() <= 2000) return fee();
    else return 2000;
  };

  const amountToPay = () => {
    return Math.ceil((productData.price + waiverFee()) * 100);
  };

  const formatPriceToCurency = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const paystackPublicKey = import.meta.env.VITE_REACT_APP_PAYSTACK_PUBLIC_KEY;

  const componentProps = {
    email: userData.email,
    amount: amountToPay(),
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
      //   Send info to backend api to record transaction
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
    onClose: () => alert("Wait! You need this product, don't go!!!!"),
  };

  const sendToServer = (data) => {
    console.log(data);
  };

  return (
    <main>
      <section className="flex flex-col justify-center">
        <div className="container h-full max-h-80vh flex flex-col md:flex-row mx-auto my-[5%] w-full max-w-xl bg-white shadow-md">
          <div className="relative h-full  w-full md:w-[50%] ">
            <img
              className="h-full w-full md:min-h-[380px]  object-cover"
              src={productData.img}
              alt={productData.name}
            />

            <div className="absolute bottom-0 left-0 p-2 flex flex-col gap-2">
              <h3 className="font-bold text-lg">{productData.name}</h3>
              <h3 className="font-bold text-lg">
                {formatPriceToCurency(productData.price)}
              </h3>
            </div>
          </div>
          <div className="w-full md:w-[50%] px-3 py-2">
            <PaystackButton {...componentProps} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Payment;
