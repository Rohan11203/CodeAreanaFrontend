import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import gameImage from "../assets/backdashboard_img.jpeg";
import { useNavigate } from "react-router-dom";
export function GameCards({link,cardName}) {
  const navigate = new useNavigate();

  function handleClick(){
    navigate(link);
  }
  return (

    (<CardContainer className="inter-var">
      <CardBody
        className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
          {cardName}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img src={gameImage} alt="gameimage"></img>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            
            >
              <div className="" onClick={handleClick}>
                Play
              </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>)
  );
}
