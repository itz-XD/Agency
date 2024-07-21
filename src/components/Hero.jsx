import { Button } from "@mui/material";
import styles from "./Hero.module.css";



const Hero= ({ className = "" }) => {
  return (
    <div className={[styles.hero, className].join(" ")}>
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <div className={styles.heroLeftContainer}>
            <div className={styles.heroHeading}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className={styles.heroDescription}>
              <div className={styles.heroParagraph}>
                <div className={styles.descriptionContent}>
                  <h1 className={styles.theLeadingSocial}>
                    The leading Social Media resource for Brands
                  </h1>
                </div>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  et efficitur lorem, ut condimentum nisi. Integer molestie
                  tellus vel nunc sagittis dignissim
                </div>
                <div className={styles.aboutContact}>
                  <Button
                    className={styles.links}
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "18",
                      background: "#eb3c75",
                      borderRadius: "500px",
                      "&:hover": { background: "#eb3c75" },
                      width: 192,
                      height: 60,
                    }}
                  >
                    About Us
                  </Button>
                  <Button
                    className={styles.links1}
                    disableElevation
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "18",
                      borderColor: "#fff",
                      borderRadius: "500px",
                      "&:hover": { borderColor: "#fff" },
                      height: 60,
                    }}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.vectorWrapper}>
            <img
              className={styles.vectorIcon1}
              loading="lazy"
              alt=""
              src="/vector-11.svg"
            />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.heroImage}>
            <img
              className={styles.imagesIcon}
              loading="lazy"
              alt=""
              src="/rectangle-5631@2x.png"
            />
            <div className={styles.imageOne}>
              <img
                className={styles.imageOneChild}
                alt=""
                src="/rectangle-5632@2x.png"
              />
              <div className={styles.imageOneContent} />
            </div>
            <div className={styles.imageTwo}>
              <img
                className={styles.imageTwoChild}
                alt=""
                src="/rectangle-5633@2x.png"
              />
              <div className={styles.imageTwoContent} />
            </div>
            <img
              className={styles.imagesIcon1}
              loading="lazy"
              alt=""
              src="/rectangle-5634@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
