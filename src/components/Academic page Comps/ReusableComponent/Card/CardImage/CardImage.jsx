import styles from "./CardImage.module.css";
function CardImage({ img_src }) {
  console.log(img_src);
  return (
    <>
      <img className={styles.CardImage} src={img_src} alt="icon" />
    </>
  );
}

export default CardImage;
