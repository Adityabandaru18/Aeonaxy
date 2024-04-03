import React, { useState } from 'react';
import {  faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FaqItem = ({ question, answer }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(true);

  const toggleAnswer = () => {
    setIsAnswerVisible(prevState => !prevState);
  };
  <FontAwesomeIcon icon={faAngleDown} />

  return (
    <div>
      <div className='h-[1px] bg-gray-300 mt-10'></div>
      <div onClick={toggleAnswer} className='my-5 text-[16px] font-normal font-sans flex flex-row justify-between'>
        <div>

        {question}
        </div>
        <div>
            {isAnswerVisible ? <FontAwesomeIcon icon={faAngleUp} className='font-light'/> :  <FontAwesomeIcon icon={faAngleDown}  className='font-light'/>}
        </div>
      </div>
      <div className={`${isAnswerVisible ? 'max-h-full' : 'max-h-0'}`}>
        {isAnswerVisible && (
          <div className="my-5 font-light font-serif">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqItem;