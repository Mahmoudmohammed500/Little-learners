import styles from "./Shape.module.css";
import shape from "../../../../../Images/Acdemic imgs/Shape.png";
function Shape() {
  return (
    <>
      <img className={styles.Shape} src={shape} alt="icon" />
    </>
  );
}

export default Shape;
