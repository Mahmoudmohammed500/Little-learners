import CardContainer from "../ReusableComponent/Card/CardContainer/CardContainer.jsx";
import Div from "../ReusableComponent/Header/Div/Div.jsx";
import styles from "./FeauresContainer.module.css";
import {
  FeaturesCardsInfo,
  bText,
  hText,
  pText,
} from "../Features/FeaturesCardsInfo.js"; // Importing feature cards information
// import featureimg from "../../../Images/Acdemic imgs/Icon Container (1).png";

function FeauresContainer(props) {
  return (
    <>
      <Div buttonText={bText} headerText={hText} paragraphText={pText} />
      <div className={styles.FeaturesContainer}>
        {FeaturesCardsInfo.map((feature, index) => (
          <CardContainer
            key={index}
            Image={feature.ImageSrc}
            headertext={feature.title}
            paragraphtext={feature.description}
          />
        ))}
      </div>
    </>
  );
}

export default FeauresContainer;
