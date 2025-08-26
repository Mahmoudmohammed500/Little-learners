import styles from "./StudiesCard.module.css";
import CardHeader from "../Card/CardHeader/CardHeader.jsx";
import CardParagraph from "../Card/CardParagraph/CardParagraph.jsx";
import Shape from "./Shape/Shape.jsx";
import StudiesImg from "./StudiesImg.jsx";

function StudiesCard(props) {
  // const cardWidth = `calc(${100 / props.cardsPerRow}% - 2em)`;
  return (
    <div className={styles.StudiesCard}>
      <Shape />
      <StudiesImg img_src={props.imginfo} />
      <CardHeader text={props.headertext} />
      <CardParagraph text={props.paragraphtext} />
    </div>
  );
}

export default StudiesCard;
