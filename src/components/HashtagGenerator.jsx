import FrameComponent4 from "./FrameComponent4";
import styles from "./HashtagGenerator.module.css";



const HashtagGenerator= ({
  className = "",
  rectangle5627,
  instagramHashtagGenerator,
  rectangle56271,
  instagramHashtagGenerator1,
}) => {
  return (
    <div className={[styles.hashtagGenerator, className].join(" ")}>
      <FrameComponent4
        rectangle5627="/rectangle-5627@2x.png"
        instagramHashtagGenerator="Instagram Hashtag Generator"
      />
      <FrameComponent4
        rectangle5627="/rectangle-5627-1@2x.png"
        instagramHashtagGenerator="Instagram Sponsored Post Calculator"
      />
    </div>
  );
};

export default HashtagGenerator;
