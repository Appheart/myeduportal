import React from 'react';
import Skeleton from './Skeleton';

const SkeletonNews = () => {
  return (
    <div className="news">
      <Skeleton classes={'title width-50'} />
      <Skeleton classes={'text width-100'} />
    </div>
  );
};

export default SkeletonNews;
