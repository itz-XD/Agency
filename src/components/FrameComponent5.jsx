import FrameComponent6 from "./FrameComponent6";
import styles from "./FrameComponent5.module.css";



const FrameComponent5= ({
  className = "",
}) => {
  return (
    <header className={[styles.contentBgParent, className].join(" ")}>
      <div className={styles.contentBg} />
      <div className={styles.contentContainer}>
        <div className={styles.topLinks}>
          <div className={styles.topLeftLinks}>
            <img
              className={styles.topLeftLinksChild}
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
            <img
              className={styles.topLeftLinksItem}
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <a className={styles.influencer}>Influencer</a>
          <a className={styles.marketinghub}>MarketingHub</a>
        </div>
        <FrameComponent6 />
      </div>
    </header>
  );
};

export default FrameComponent5;
