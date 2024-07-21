import styles from "./FrameComponent4.module.css";



const FrameComponent4 = ({
  className = "",
  rectangle5627,
  instagramHashtagGenerator,
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <img
        className={styles.componentChild}
        loading="lazy"
        alt=""
        src={rectangle5627}
      />
      <div className={styles.instagramHashtagGenerator}>
        {instagramHashtagGenerator}
      </div>
    </div>
  );
};

export default FrameComponent4;
