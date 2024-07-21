
import { Button } from "@mui/material";
import styles from "./FrameComponent2.module.css";



const FrameComponent2= ({
  className = "",
  rectangle5627,
  modash,
  tenYearsAgoIfSomeoneSaidT,
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <img
        className={styles.componentChild}
        loading="lazy"
        alt=""
        src={rectangle5627}
      />
      <div className={styles.modashContent}>
        <div className={styles.modashName}>
          <h2 className={styles.modash}>{modash}</h2>
          <div className={styles.tenYearsAgo}>{tenYearsAgoIfSomeoneSaidT}</div>
        </div>
        <Button
          className={styles.viewDetails}
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#eb3c75",
            fontSize: "18",
            borderColor: "#eb3c75",
            borderRadius: "500px",
            "&:hover": { borderColor: "#eb3c75" },
            width: 200,
            height: 50,
          }}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default FrameComponent2;
