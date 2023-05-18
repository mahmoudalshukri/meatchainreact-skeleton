import styles from "../styles/digitalShare.module.css";
import DivLoadingSkeleton from "./DivLoadingSkeleton";

const DigitalShareLoadingSkeleton = ({
  width,
  height,
  bgColor,
  fgColor,
  bRadius,
  typeOfAnimation,
  speedInS,
  theme,
  lineH,
  lineW,
  imageH,
  imageW,
}) => {
  const cardStyle = {
    width,
    height,
    background: theme === "dark" ? "#232330" : "#F9FBE7",
    borderRadius: bRadius,
  };

  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.title}>
        <div className={styles.text}>
          <div className={styles.line}>
            <DivLoadingSkeleton
              width={lineW}
              height={lineH}
              bgColor={bgColor}
              fgColor={fgColor}
              bRadius={bRadius}
              typeOfAnimation={typeOfAnimation}
              speedInS={speedInS}
            />
          </div>
          <div className={styles.line}>
            <DivLoadingSkeleton
              width={lineW}
              height={lineH}
              bgColor={bgColor}
              fgColor={fgColor}
              bRadius={bRadius}
              typeOfAnimation={typeOfAnimation}
              speedInS={speedInS}
            />
          </div>
        </div>
        <div className={styles.text}>
          <div className={styles.line}>
            <DivLoadingSkeleton
              width={lineW}
              height={lineH}
              bgColor={bgColor}
              fgColor={fgColor}
              bRadius={bRadius}
              typeOfAnimation={typeOfAnimation}
              speedInS={speedInS}
            />
          </div>
          <div className={styles.line}>
            <DivLoadingSkeleton
              width={lineW}
              height={lineH}
              bgColor={bgColor}
              fgColor={fgColor}
              bRadius={bRadius}
              typeOfAnimation={typeOfAnimation}
              speedInS={speedInS}
            />
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <DivLoadingSkeleton
          width={imageW}
          height={imageH}
          bgColor={bgColor}
          fgColor={fgColor}
          bRadius={bRadius}
          typeOfAnimation={typeOfAnimation}
          speedInS={speedInS}
        />
      </div>
    </div>
  );
};

export default DigitalShareLoadingSkeleton;
