import styles from "../styles/advisors.module.css";
import DivLoadingSkeleton from "./DivLoadingSkeleton";

const AdvisorsLoadingSkeleton = ({
  height,
  width,
  imageH,
  imageW,
  nameH,
  nameW,
  positionH,
  positionW,
  descriptionH,
  descriptionW,
  bgColor = "#777",
  fgColor = "#999",
  speedInS,
  typeOfAnimation,
  bRadius,
}) => {
  const cardStyle = {
    width,
    height,
  };

  return (
    <div className={styles.advisor} style={cardStyle}>
      <div className={`${styles.image} ${styles.mt75}`}>
        <DivLoadingSkeleton
          height={imageH}
          width={imageW}
          bgColor={bgColor}
          fgColor={fgColor}
          speedInS={speedInS}
          typeOfAnimation={typeOfAnimation}
          bRadius={bRadius}
        />
      </div>
      <div className={`${styles.name} ${styles.mt75}`}>
        <DivLoadingSkeleton
          height={nameH}
          width={nameW}
          bgColor={bgColor}
          fgColor={fgColor}
          speedInS={speedInS}
          typeOfAnimation={typeOfAnimation}
          bRadius={bRadius}
        />
      </div>
      <div className={`${styles.position} ${styles.mt75}`}>
        <DivLoadingSkeleton
          height={positionH}
          width={positionW}
          bgColor={bgColor}
          fgColor={fgColor}
          speedInS={speedInS}
          typeOfAnimation={typeOfAnimation}
          bRadius={bRadius}
        />
      </div>
      <div className={`${styles.description} ${styles.mt75}`}>
        {[...Array(3)].map((_, index) => (
          <div className={`${styles.line} ${styles.mt75}`} key={index}>
            <DivLoadingSkeleton
              width={descriptionW}
              height={descriptionH}
              bgColor={bgColor}
              fgColor={fgColor}
              bRadius={bRadius}
              typeOfAnimation={typeOfAnimation}
              speedInS={speedInS}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvisorsLoadingSkeleton;
