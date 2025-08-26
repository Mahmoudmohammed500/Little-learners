import Styles from "../../../../style/AcademicsPage.module.css";
function StudiesImg({ img_src }) {
  console.log(img_src);
  return (
    <>
      <img className={Styles.studiesimg} src={img_src} alt="icon" />
    </>
  );
}

export default StudiesImg;
