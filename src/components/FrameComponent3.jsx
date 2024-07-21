
import HashtagGenerator from "./HashtagGenerator";
import styles from "./FrameComponent3.module.css";



const FrameComponent3 = ({
  className = "",
}) => {
  return (
    <section className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.popularTools}>
        <div className={styles.popularToolTitle}>
          <h1 className={styles.popularTool}>{`Popular Tool `}</h1>
          <div className={styles.seeAllArticles}>
            <div className={styles.link}>
              <div className={styles.seeAlalTools}>See Alal Tools</div>
            </div>
          </div>
        </div>
        <div className={styles.instagramHashtagGenerator}>
          <HashtagGenerator
            rectangle5627="/rectangle-5627@2x.png"
            instagramHashtagGenerator="Instagram Hashtag Generator"
            rectangle56271="/rectangle-5627-1@2x.png"
            instagramHashtagGenerator1="Instagram Sponsored Post Calculator"
          />
          <HashtagGenerator
            rectangle5627="/rectangle-5627-2@2x.png"
            instagramHashtagGenerator="YouTube Money Calculator (earnings estimator)"
            rectangle56271="/rectangle-5627-3@2x.png"
            instagramHashtagGenerator1="TikTok Money Calculator"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
