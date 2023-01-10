import up from "../assets/up-circle.svg";
import down from "../assets/down-circle.svg";
import left from "../assets/left-circle.svg";
import right from "../assets/right-circle.svg";

const BtnCircleControl = () => {
  return (
    <div class="grid-container">
      <div class="item1">
        <img className="p-2 w-16" src={up} alt="" />
      </div>
      <div class="item2">
        <img className="p-2 w-16" src={left} alt="" />
      </div>
      <div class="item3">
        <img className="p-2 w-16" src={right} alt="" />
      </div>
      <div class="item4">
        <img className="p-2 w-16" src={down} alt="" />
      </div>
    </div>
  );
};

export default BtnCircleControl;
