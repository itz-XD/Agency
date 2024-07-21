import ArticleItem from "./ArticleItem";
import styles from "./GuidesReports.module.css";


const GuidesReports = ({
  className = "",
}) => {
  return (
    <div className={[styles.guidesReports, className].join(" ")}>
      <div className={styles.guidesReportsChild} />
      <div className={styles.guidesReportsTitle}>
        <div className={styles.guidesReportsParent}>
          <h1 className={styles.guidesReports1}>{`Guides & Reports`}</h1>
          <div className={styles.seeAllArticles}>
            <div className={styles.link}>
              <div className={styles.seeAll}>See All</div>
            </div>
          </div>
        </div>
        <div className={styles.guidesReportsItems}>
          <ArticleItem
            component71="/component-71-5@2x.png"
            digitalMarketing="AI Marketing"
            aDeepDiveIntoDigitalMarke="Artificial Intelligence (AI) Marketing Benchmark Report: 2023"
            inTheEarlyDaysOfDigitalMa="The AI Marketing Benchmark Report 2023 is our inaugural overview of the use of AI by the marketing…
"
            propFlex="unset"
            propMinWidth="unset"
            propBackgroundColor="#fff"
          />
          <ArticleItem
            component71="/component-71-6@2x.png"
            digitalMarketing="Influencer Marketing"
            aDeepDiveIntoDigitalMarke="May 2024 Influencer Marketing Report"
            inTheEarlyDaysOfDigitalMa="The Influencer Marketing Report May 2024 provides an in-depth look at the current state of the influencer marketing…
"
            propFlex="unset"
            propMinWidth="unset"
            propBackgroundColor="#fff"
          />
          <ArticleItem
            component71="/component-71-7@2x.png"
            digitalMarketing="Digital Marketing"
            aDeepDiveIntoDigitalMarke="Digital Marketing Benchmark Report 2024"
            inTheEarlyDaysOfDigitalMa="The Digital Marketing Benchmark Report 2024 offers an extensive analysis of the digital marketing landscape, gathering insights from…"
            propFlex="unset"
            propMinWidth="unset"
            propBackgroundColor="#fff"
          />
        </div>
      </div>
    </div>
  );
};

export default GuidesReports;
