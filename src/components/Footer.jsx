
import ArticleItem from "./ArticleItem";
import styles from "./Footer.module.css";



const Footer = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.articles}>
          <div className={styles.titleSubtitle}>
            <h1 className={styles.latestArticles}>Latest Articles</h1>
          </div>
          <div className={styles.articles1}>
            <div className={styles.articlesRowOne}>
              <ArticleItem
                component71="/component-71@2x.png"
                digitalMarketing="Digital Marketing"
                aDeepDiveIntoDigitalMarke={`A Deep Dive into Digital Marketing Metrics & KPIs`}
                inTheEarlyDaysOfDigitalMa="In the early days of digital marketing, gauging success relied on responses; today, the landscape is defined by…"
              />
              <ArticleItem
                component71="/component-71-1@2x.png"
                digitalMarketing="Digital Marketing"
                aDeepDiveIntoDigitalMarke="Content Marketing Guide for 2024 (Post-AI and Helpful-Content..."
                inTheEarlyDaysOfDigitalMa="Artificial intelligence is throwing content marketing on its head. On one end, you have unethical brands mass-producing bad…"
                propFlex="unset"
                propMinWidth="unset"
                propBackgroundColor="rgba(1, 1, 1, 0.02)"
              />
              <ArticleItem
                component71="/component-71-2@2x.png"
                digitalMarketing="Digital Marketing"
                aDeepDiveIntoDigitalMarke="5 Ways to Search a Website for Keywords"
                inTheEarlyDaysOfDigitalMa="﻿Finding what keywords a particular website (or webpage) is using can open up a lot of opportunities for…"
                propFlex="unset"
                propMinWidth="unset"
                propBackgroundColor="rgba(1, 1, 1, 0.02)"
              />
            </div>
            <div className={styles.articleItemsUnsplash}>
              <div className={styles.articleUnsplash}>
                <ArticleItem
                  component71="/component-71-3@2x.png"
                  digitalMarketing="Digital Marketing"
                  aDeepDiveIntoDigitalMarke="The Ultimate Guide to Performing a Competitive Analysis"
                  inTheEarlyDaysOfDigitalMa="Business success requires a thorough understanding of your competition. Which is where performing a competitive analysis can help…"
                  propFlex="1"
                  propMinWidth="210px"
                  propBackgroundColor="rgba(1, 1, 1, 0.02)"
                />
                <ArticleItem
                  component71="/component-71-4@2x.png"
                  digitalMarketing="Digital Marketing"
                  aDeepDiveIntoDigitalMarke={`What Are Keyword Rankings & How to Improve Them`}
                  inTheEarlyDaysOfDigitalMa="Your website’s keyword rankings can impact how much traffic your website gets. And ultimately how much revenue you…"
                  propFlex="1"
                  propMinWidth="210px"
                  propBackgroundColor="rgba(1, 1, 1, 0.02)"
                />
              </div>
              <div className={styles.unsplash8iiudnrq87o}>
                <div className={styles.howToGetBacklinks10TrustParent}>
                  <h1 className={styles.howToGet}>
                    How to Get Backlinks: 10 Trusted Methods
                  </h1>
                  <div className={styles.theRightBacklinks}>
                    The right backlinks act as endorsements from other websites
                    that tell search engines your site is helpful,
                    authoritative,…
                  </div>
                  <div className={styles.label}>
                    <div className={styles.digitalMarketingWrapper}>
                      <div className={styles.digitalMarketing}>
                        Digital Marketing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.seeAllArticles}>
          <div className={styles.link}>
            <div className={styles.link1}>See All Articles</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
