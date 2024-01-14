import style from "./App.module.scss";
import Accordion from "./Component/Accordion";
import star from "./assets/images/icon-star.svg";

const App = () => {
  const arr = [
    {
      text1: "What is FrontEnd Mentor and how will it help me?",
      text2:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in  HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building. ",
    },
    {
      text1: "Is Frontend Mentor free?",
      text2:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in  HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building. ",
    },
    {
      text1: "Can i use Frontend Mentor projects in my portfolio?",
      text2:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in  HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building. ",
    },
    {
      text1: "How can i get help if i'm stuck on a challenge?",
      text2:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in  HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building. ",
    },
  ];

  return (
    <div className={style.mainDiv}>
      <div className={style.contentDiv}>
        <div className={style.faqDiv}>
          <img src={star} alt="star logo" />
          <p>FAQs</p>
        </div>
        {arr.map((item, index) => (
          <Accordion key={index} index={index+1} text1={item.text1} text2={item.text2}/>
        ))}
      </div>
    </div>
  );
};

export default App;
