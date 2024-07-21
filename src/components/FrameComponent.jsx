
import styles from "./FrameComponent.module.css";



const FrameComponent = ({
  className = "",
}) => {
  return (
    <footer className={[styles.companyFooterParent, className].join(" ")}>
      <div className={styles.companyFooter}>
        <div className={styles.companyInfo}>
          <div className={styles.companyLinks}>
            <div className={styles.company}>Company</div>
            <div className={styles.footerLinks}>
              <div className={styles.articles}>Articles</div>
              <div className={styles.platforms}>Platforms</div>
              <div className={styles.agencies}>Agencies</div>
              <div className={styles.resources}>Resources</div>
              <div className={styles.contactUs}>Contact Us</div>
            </div>
          </div>
          <div className={styles.popularLinks}>
            <div className={styles.popular}>Popular</div>
            <div className={styles.marketingCategories}>
              <div className={styles.influencerMarketingPlatforms}>
                Influencer Marketing Platforms
              </div>
              <div className={styles.influencerMarketingAgencies}>
                Influencer Marketing Agencies
              </div>
              <div className={styles.socialMediaMarketing}>
                Social Media Marketing Platforms
              </div>
              <div className={styles.socialMediaAgencies}>
                Social Media Agencies
              </div>
              <div className={styles.emailMarketingSoftware}>
                Email Marketing Software
              </div>
              <div className={styles.digitalMarketingAgencies}>
                Digital Marketing Agencies
              </div>
            </div>
          </div>
          <div className={styles.freeToolsParent}>
            <div className={styles.freeTools}>Free Tools</div>
            <div className={styles.tiktokEngagementCalculatorParent}>
              <div className={styles.tiktokEngagementCalculator}>
                TikTok Engagement Calculator
              </div>
              <div className={styles.instagramCalculator}>
                Instagram Calculator
              </div>
              <div className={styles.youtubeCalculator}>YouTube Calculator</div>
              <div className={styles.glossary}>Glossary</div>
              <div className={styles.imageResizer}>Image Resizer</div>
            </div>
          </div>
          <div className={styles.otherLinksParent}>
            <div className={styles.otherLinks}>Other Links</div>
            <div className={styles.cookiePolicyParent}>
              <div className={styles.cookiePolicy}>Cookie Policy</div>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.affiliateDisclaimer}>
                Affiliate Disclaimer
              </div>
              <div className={styles.memberLogin}>Member Login</div>
              <div className={styles.authorsAndExperts}>
                Authors and Experts
              </div>
              <div className={styles.agencyHub}>Agency Hub</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.companyFooterChild} />
      <div className={styles.frameWrapper}>
        {/* <div className={styles.companyFooterChild} /> */}
        <div className={styles.copyright2024InfluencermarkeParent}>
          <div className={styles.copyright2024Influencermarke}>
            Copyright 2024 influencermarketinghub. all rights reserved
          </div>
          <div className={styles.socialMediaIconsParent}>
            <div className={styles.socialMediaIcons}>
              <img
                className={styles.logoTwitterIcon}
                loading="lazy"
                alt=""
                src="/logotwitter.svg"
              />
            </div>
            <div className={styles.socialMediaIcons1}>
              <img
                className={styles.logoFacebookIcon}
                loading="lazy"
                alt=""
                src="/logofacebook.svg"
              />
            </div>
            <div className={styles.socialMediaIcons2}>
              <img
                className={styles.logoInstagramIcon}
                loading="lazy"
                alt=""
                src="/logoinstagram@2x.png"
              />
            </div>
            <div className={styles.socialMediaIcons3}>
              <img
                className={styles.tiktokSvgrepoCom1Icon}
                loading="lazy"
                alt=""
                src="/tiktoksvgrepocom-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
