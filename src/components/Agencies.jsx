import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./Agencies.module.css";



const Agencies = ({ className = "" }) => {
  return (
    <section className={[styles.agencies, className].join(" ")}>
      <div className={styles.agenciesContainer}>
        <div className={styles.agenciesImage} />
        <div className={styles.agenciesContent}>
          <div className={styles.topAgencies}>
            <img
              className={styles.agenciesCardOneImage}
              loading="lazy"
              alt=""
              src="/rectangle-5625@2x.png"
            />
            <div className={styles.agenciesCardOneContent}>
              <div className={styles.agenciesCardOneHeading}>
                <h1 className={styles.influencerMarketingAgencies}>
                  Influencer Marketing Agencies
                </h1>
                <div className={styles.viewACollection}>
                  View a collection of the globe's leading marketing agencies
                  all in one place
                </div>
              </div>
              <Button
                className={styles.viewAgencies}
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  background: "#eb3c75",
                  borderRadius: "500px",
                  "&:hover": { background: "#eb3c75" },
                  width: 241,
                  height: 60,
                }}
              >
                View Agencies
              </Button>
            </div>
          </div>
          <div className={styles.agenciesCardTwo}>
            <div className={styles.agenciesCardTwoContent}>
              <div className={styles.agenciesCardTwoHeading}>
                <h1 className={styles.influencerMarketingPlatforms}>
                  Influencer Marketing Platforms
                </h1>
                <div className={styles.allTheLeading}>
                  All the leading influencer marketing platforms rated and
                  reviewed
                </div>
              </div>
              <Button
                className={styles.viewPlatforms}
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  background: "#eb3c75",
                  borderRadius: "500px",
                  "&:hover": { background: "#eb3c75" },
                  width: 246,
                  height: 60,
                }}
              >
                View Platforms
              </Button>
            </div>
            <img
              className={styles.bottomImageIcon}
              loading="lazy"
              alt=""
              src="/rectangle-5626@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.lineParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
      </div>
    </section>
  );
};

export default Agencies;
