import { useState } from "react";
import React  from "react";

const Section = ({ title, details }) => {

     const [isVisible, setIsVisible] = useState(false);

  return (
    <div className=" border-b-2 border-b-snow  my-[50px]  relative flex flex-wrap justify-between  items-center">
      <h1 className="text-l font-bold text-[#706b74] hover:text-orange-600">
        {title}
      </h1>

      {isVisible ? (
        <button
          className="underline arrow-up"
          onClick={() => setIsVisible(false)}
        >
          Hide
        </button>
      ) : (
        <button className="underline" onClick={() => setIsVisible(true)}>
          Show
        </button>
      )}
      {isVisible && (
        <p className="text-xs">
          <h2>No Response</h2> :{details}
        </p>
      )}
    </div>
  );
};

const QuestionList = ({ id, title, description }) => {
  return (
    <>
      <div className="">

        <Section title={title} details={description}/>
        
      </div>
    </>
  );
};

export default QuestionList;
