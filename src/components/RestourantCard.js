import { IMG_CDN_URL } from "../config";

const RestourantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  deliveryTime,
}) => {
  //   const { name, cuisines, deliveryTime, cloudinaryImageId } = Restourant;
  return (
    <>
      <div
        className="card w-[200px] h-[250px] shadow-lg  p-2.5 flex flex-col m-2.5 hover:border-[2px] hover:shadow-2xl transition-transform"
        key={cloudinaryImageId}
      >
        <div className="top">
          <div className="card-img  bg-cover w-auto h-[120px]">
            <img
              className="relative  w-full h-full"
              src={IMG_CDN_URL + cloudinaryImageId}
            />
          </div>
        </div>
        <div className="bottom flex flex-col justify-center">
          <h3 className="font-bold text-[15px]">{name}</h3>
          <h6 className="text-[10px]">{cuisines.join(", ")}</h6>
          <h6 className="text-[10px]">{deliveryTime} minutes</h6>
          {/* <button className="btn border bg-green-600 w-[80px] h-8 item-center ">Add</button> */}
        </div>
      </div>
    </>
  );
};

export default RestourantCard;
