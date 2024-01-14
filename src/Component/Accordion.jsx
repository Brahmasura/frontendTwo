import { useState } from "react";
import style from "./Accordion.module.scss";
import plus from '../assets/images/icon-plus.svg';
import minus from '../assets/images/icon-minus.svg';


const Accordion = ({index, text1, text2}) => {
    const [isOpen, setIsOpen] = useState(index === 1);



  return (
    <div className={style.accMainDiv}>
        <div className={style.titleDiv}>
            <p>{text1}</p>
            <img src={isOpen ? minus : plus} alt="state logo" onClick={() => setIsOpen(!isOpen)}/>
        </div>
        {isOpen ? (
         <p className={style.secondPara}>{text2}</p>

        ): ""}

    </div>
  )
}

export default Accordion;