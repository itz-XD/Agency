
import FrameComponent2 from "./FrameComponent2";
import styles from "./FrameComponent1.module.css";



const FrameComponent1 = ({
  className = "",
}) => {
  return (
    <section className={[styles.topAgenciesWrapper, className].join(" ")}>
      <div className={styles.topAgencies}>
        <div className={styles.topAgenciesTitle}>
          <h1 className={styles.topAgencies1}>Top Agencies</h1>
        </div>
        <div className={styles.agencies}>
          <div className={styles.modashAgency}>
            <FrameComponent2
              rectangle5627="/rectangle-5627-4@2x.png"
              modash="Modash"
              tenYearsAgoIfSomeoneSaidT="Ten years ago, if someone said to you, “Content creators for me were kind of the beacon of hope; they were the people I looked up to,” you’d pause for a second before asking, “What’s a content creator?” But social media...
"
            />
            <FrameComponent2
              rectangle5627="/rectangle-5627-5@2x.png"
              modash="Ubiquitous"
              tenYearsAgoIfSomeoneSaidT="While TikTok had reached “most downloaded app” status by 2018, it wasn’t until 2020 when the social network really became enmeshed in our cultural fabric. TikTok was a major way that people connected during the pandemic as..."
            />
            <FrameComponent2
              rectangle5627="/rectangle-5627-6@2x.png"
              modash="InsightIQ"
              tenYearsAgoIfSomeoneSaidT="Overview The world of influencer marketing is awash with platforms of all kinds: There are influencer marketplaces, influencer relationship platforms, analytics platforms, and end-to-end suites that cover just about everything. What the..."
            />
            <FrameComponent2
              rectangle5627="/rectangle-5627-7@2x.png"
              modash="Skeepers"
              tenYearsAgoIfSomeoneSaidT="Overview Influencer marketing, for all its 21st century bells and whistles, is just a more advanced, programmatic form of word-of-mouth marketing. Word-of-mouth marketing, of course, is just a more programmatic version of actual..."
            />
          </div>
          <div className={styles.seeAllArticles}>
            <div className={styles.link}>
              <div className={styles.seeAllAgencies}>See All Agencies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
