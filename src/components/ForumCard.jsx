import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import LinkBtn from './Link';

const ForumCard = () => {
  return (
    <div className="flex text-sm text-gray-800 leading-normal bg-white shadow-md rounded-md flex-col gap-2 px-3 py-3">
      <h2 className="text-lg font-bold font-serif">
        Lorem ipsum dolor sit amet consectetur adipisicing elit?
      </h2>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
        voluptatibus dolore natus placeat unde? Voluptatum atque consequatur
        praesentium?
      </p>

      <p className="flex gap-2 items-center">
        Related topics:
        <span className="text-xs bg-green-600 rounded-md px-2 py-1 text-white">
          lorem ipsum
        </span>
        <span className="text-xs bg-green-600 rounded-md px-3 py-1 text-white">
          lorem ipsum
        </span>
      </p>

      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <span className="hover:text-blue-600 cursor-pointer">
            <FontAwesomeIcon icon={faThumbsUp} />
          </span>
          3
        </div>
        <p className="viewCounts flex gap-1 text-xs items-center font-serif font-bold text-blue-500">
          <span className="hover:text-blue-600 ">304</span> Views
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <div className="avatar">
            <img src="" alt="" />
          </div>
          <small>
            Posted by <span>amportr</span>
          </small>
        </div>

        <div className="flex gap-1 ">
          <span>1</span> <span>days</span>ago
        </div>
      </div>

      <div className="flex gap-2 text-xs">
        <LinkBtn
          link={'/forum'}
          className={
            'py-1 px-3 border-green-600 border-2 text-gray-700 rounded-md'
          }
        >
          Read reponses
        </LinkBtn>
        <LinkBtn
          link={'/forum/'}
          className={
            'py-1 px-3 border-2 border-yellow-600 text-gray-800 rounded-md'
          }
        >
          Reply
        </LinkBtn>
      </div>
    </div>
  );
};

export default ForumCard;
