import React, { useEffect, useState } from "react";
import QuestionList from "./QuestionList";

const FAQ = () => {
  const [userFAQ, setUserFAQ] = useState("");

  const fetchFAQ = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/support/issues/faq");
    const json = await data.json();

    setUserFAQ(json);
    console.log(json);
    console.log(userFAQ?.data?.issues?.data[0]);
  };

  useEffect(() => {
    fetchFAQ();
  }, []);

return (
  <div className="bg-transparent mr-14 my-10 w-full min-h-screen max-md:px-8 max-md:my-4">
    <div className="font-bold text-3xl text-[#2a2c3f]">FAQs</div>
    <div>
      {userFAQ?.data?.issues?.data.map((Question) => (
        <div className="h-auto m-auto" key={Question.id}>
          <QuestionList {...Question} />
        </div>
      ))}
    </div>
  </div>
);
};

export default FAQ;
