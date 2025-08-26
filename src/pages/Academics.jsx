import styles from "../style/AcademicsPage.module.css";
import FeauresContainer from "../components/Academic page Comps/Features/FeauresContainer.jsx";
import StudiesContainer from "../components/Academic page Comps/Studies/StudiesContainer.jsx";
import GalleriesContainer from "../components/Academic page Comps/Galleries/GalleriesContainer.jsx";
import AcademicWelcomeSec from "../components/Academic page Comps/AcademicWelcomeSec.jsx";

function Academics() {
  return (
    <div className={styles.AcademicsPage}>
      <AcademicWelcomeSec />
      <FeauresContainer />
      {/* <StudiesContainer /> */}
      {/* <GalleriesContainer /> */}
    </div>
  );
}

export default Academics;
