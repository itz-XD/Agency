import { Button } from "@mui/material";
import CardsContainer from "./CardsContainer";
import styles from "./News.module.css";


const News = ({ className = "" }) => {
  return (
    <section className={[styles.news, className].join(" ")}>
      <div className={styles.newsContainer}>
        <h1 className={styles.latestNews}>Latest News</h1>
        <div className={styles.newsContent}>
          <div className={styles.topNews}>
            <div className={styles.newsCardOne}>
              <img
                className={styles.cardOneImage}
                loading="lazy"
                alt=""
                src="/rectangle-5624@2x.png"
              />
              <h1 className={styles.essentialToolsFor}>
                7 Essential Tools for Forward-Thinking Creative Agencies
              </h1>
              <div className={styles.creativeAgenciesWork}>
                Creative agencies work on many projects simultaneously, making
                advanced project management tools necessary. However, many
                agencies are still…
              </div>
            </div>
            <Button
              className={styles.readMore}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#eb3c75",
                borderRadius: "500px",
                "&:hover": { background: "#eb3c75" },
                width: 206,
                height: 60,
              }}
            >
              Read More
            </Button>
          </div>
          <div className={styles.newsCardTwo}>
            <CardsContainer
              cardImages="/rectangle-5623@2x.png"
              trendsShapingTheFutureOfC="8 Trends Shaping the Future of Creative Agencies"
              creativeAgenciesHaveAnInd="Creative agencies have an indisputable role as change agents amid evolving consumer behavior and client expectations. Agencies stretch…"
            />
            <CardsContainer
              cardImages="/rectangle-5623-1@2x.png"
              trendsShapingTheFutureOfC="Ultimate Guide to Choosing Tools for Digital Marketing Agencies..."
              creativeAgenciesHaveAnInd="In the throes of 2024’s digital marketing agency arena, the tremors from OpenAI’s latest conference have sent a…"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
