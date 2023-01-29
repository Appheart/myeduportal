import React from 'react';

const Loading = () => {
  return (
    <div
      className={
        'flex py-7 text-center bg-white shadow-sm update flex-col border  p-3 rounded gap-1 text-gray-700 h-[10rem]'
      }
    >
      <img
        src="/images/gif/loading.gif"
        alt="news_loading_state"
        height={60}
        width={60}
        className="object-contain w-full h-full"
        loading="lazy"
      />
    </div>
  );
};

export default Loading;
