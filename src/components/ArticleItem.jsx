import styles from "./ArticleItem.module.css";
import {useMemo} from "react"


const ArticleItem = ({
  className = "",
  component71,
  digitalMarketing,
  aDeepDiveIntoDigitalMarke,
  inTheEarlyDaysOfDigitalMa,
  propFlex,
  propMinWidth,
  propBackgroundColor,
}) => {
  const articleItemStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      backgroundColor: propBackgroundColor,
    };
  }, [propFlex, propMinWidth, propBackgroundColor]);

  return (
    <div
      className={[styles.articleItem, className].join(" ")}
      style={articleItemStyle}
    >
      <img
        className={styles.component71Icon}
        loading="lazy"
        alt=""
        src={component71}
      />
      <div className={styles.titleContent}>
        <div className={styles.content}>
          <div className={styles.label}>
            <div className={styles.digitalMarketingWrapper}>
              <div className={styles.digitalMarketing}>{digitalMarketing}</div>
            </div>
          </div>
          <div className={styles.title}>
            <div className={styles.aDeepDive}>{aDeepDiveIntoDigitalMarke}</div>
          </div>
          <div className={styles.subtitle}>
            <div className={styles.inTheEarly}>{inTheEarlyDaysOfDigitalMa}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
