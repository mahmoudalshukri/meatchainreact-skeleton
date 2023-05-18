import styles from "../styles/buyDigital.module.css";
import DivLoadingSkeleton from "./DivLoadingSkeleton";

const BuyDigitalShareLoadingSkeleton = ({
  width,
  height,
  fgColor,
  bgColor,
  bRadius,
  typeOfAnimation,
  speedInS,
  theme,
  titleW,
  titleH,
  lineW,
  lineH,
  bnbAdressW,
  bnbAdressH,
  maxBtnW,
  maxBtnH,
  submitW,
  submitH,
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
        <DivLoadingSkeleton
          width={titleW}
          height={titleH}
          bRadius={bRadius}
          fgColor={fgColor}
          bgColor={bgColor}
          typeOfAnimation={typeOfAnimation}
          speedInS={speedInS}
        />
      </div>
      <div className={styles.bnb}>
        <div className={styles.number}>
          <div className={styles.line}>
            <DivLoadingSkeleton
              width={lineW}
              height={lineH}
              bRadius={bRadius}
              fgColor={fgColor}
              bgColor={bgColor}
              typeOfAnimation={typeOfAnimation}
              speedInS={speedInS}
            />
          </div>
          <div className={styles.line}>
            <DivLoadingSkeleton
              width={lineW}
              height={lineH}
              bRadius={bRadius}
              fgColor={fgColor}
              bgColor={bgColor}
              typeOfAnimation={typeOfAnimation}
              speedInS={speedInS}
            />
          </div>
        </div>
        <div className={styles.address}>
          <DivLoadingSkeleton
            width={bnbAdressW}
            height={bnbAdressH}
            bRadius={bRadius}
            fgColor={fgColor}
            bgColor={bgColor}
            typeOfAnimation={typeOfAnimation}
            speedInS={speedInS}
          />
        </div>
      </div>
      <div className={styles.amountToBuy}>
        <div className={styles.number}>
          <div className={styles.line}>
            <DivLoadingSkeleton
              width={lineW}
              height={lineH}
              bRadius={bRadius}
              fgColor={fgColor}
              bgColor={bgColor}
              typeOfAnimation={typeOfAnimation}
              speedInS={speedInS}
            />
          </div>
          <div className={styles.line}>
            <DivLoadingSkeleton
              width={lineW}
              height={lineH}
              bRadius={bRadius}
              fgColor={fgColor}
              bgColor={bgColor}
              typeOfAnimation={typeOfAnimation}
              speedInS={speedInS}
            />
          </div>
        </div>
        <div className={styles.address}>
          <DivLoadingSkeleton
            width={maxBtnW}
            height={maxBtnH}
            bRadius={bRadius}
            fgColor={fgColor}
            bgColor={bgColor}
            typeOfAnimation={typeOfAnimation}
            speedInS={speedInS}
          />
        </div>
      </div>
      <div className={styles.data}>
        <div className={styles.price}>
          <div className={styles.line}>
            <DivLoadingSkeleton
              width={lineW}
              height={lineH}
              bRadius={bRadius}
              fgColor={fgColor}
              bgColor={bgColor}
              typeOfAnimation={typeOfAnimation}
              speedInS={speedInS}
            />
          </div>
          <div className={styles.line}>
            <DivLoadingSkeleton
              width={lineW}
              height={lineH}
              bRadius={bRadius}
              fgColor={fgColor}
              bgColor={bgColor}
              typeOfAnimation={typeOfAnimation}
              speedInS={speedInS}
            />
          </div>
        </div>
        <div className={styles.amount}>
          <div className={styles.line}>
            <DivLoadingSkeleton
              width={lineW}
              height={lineH}
              bRadius={bRadius}
              fgColor={fgColor}
              bgColor={bgColor}
              typeOfAnimation={typeOfAnimation}
              speedInS={speedInS}
            />
          </div>
          <div className={styles.line}>
            <DivLoadingSkeleton
              width={lineW}
              height={lineH}
              bRadius={bRadius}
              fgColor={fgColor}
              bgColor={bgColor}
              typeOfAnimation={typeOfAnimation}
              speedInS={speedInS}
            />
          </div>
        </div>
      </div>
      <div className={styles.submit}>
        <DivLoadingSkeleton
          width={submitW}
          height={submitH}
          bRadius={bRadius}
          fgColor={fgColor}
          bgColor={bgColor}
          typeOfAnimation={typeOfAnimation}
          speedInS={speedInS}
        />
      </div>
    </div>
  );
};

export default BuyDigitalShareLoadingSkeleton;
