import styles from "./CardContainer.module.css";
import CardImage from "../CardImage/CardImage.jsx";
import CardHeader from "../CardHeader/CardHeader.jsx";
import CardParagraph from "../CardParagraph/CardParagraph.jsx";

function CardContainer(props) {
  return (
    <div className={styles.CardContainer}>
      <CardImage img_src={props.Image} />
      <CardHeader text={props.headertext} />
      <CardParagraph text={props.paragraphtext} />
    </div>
  );
}

export default CardContainer;
