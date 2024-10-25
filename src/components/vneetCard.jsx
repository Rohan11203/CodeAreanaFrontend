import { CardContainer, CardItem } from "../components/ui/card";
import gameImage from "../assets/backdashboard_img.jpeg";
const  Card = () => {
  return (
    <div className="flex justify-center items-center h-fit py-7  w-full px-2 ">
      <div className="relative cursor-pointer animate-float  md:block mr-8">
        <CardContainer className=" cursor-pointer">
          <div className="px-8 py-7 max-w-[400px] border-solid gap-5 bg-black flex flex-col justify-start item-center border-2  rounded-2xl">
            <CardItem>
              <img
                src={gameImage}
                alt={"platform"}
                width={400}
                height={400}
                className="rounded-[3rem]"
              />
            </CardItem>
 
            <div className="px-4 flex flex-col justify-center items-start gap-5">
              <h1 className="text-4xl  text-white font-bold">V3cn</h1>
 
              <h4 className="text-lg text-white">
                Here you will get components which you wont get anywhere.
              </h4>
 
              <p className="text-purple-400">Made by Vineet & Team</p>
            </div>
          </div>
        </CardContainer>
      </div>
    </div>
  );
};
export { Card };