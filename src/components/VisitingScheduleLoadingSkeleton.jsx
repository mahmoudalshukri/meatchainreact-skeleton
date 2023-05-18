import styles from "../styles/visitingSchedule.module.css";
import DivLoadingSkeleton from "./DivLoadingSkeleton";
import TableLoadingSkeleton from "./TableLoadingSkeleton";

const VisitingScheduleLoadingSkeleton = ({
  width,
  height,
  bgColor,
  fgColor,
  typeOfAnimation,
  speedInS,
  bRadius,
  theme,
  lineH,
  lineW,
  rowsNumber,
  rowH,
  bRadiusBottom
}) => {
  const cardStyle = {
    width,
    height,
    background: theme === "dark" ? "#232330" : "#F9FBE7",
    borderRadius: bRadius,
  };
  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.header}>
        <DivLoadingSkeleton 
            width={lineW}
            height={lineH}
            fgColor={fgColor}
            bgColor={bgColor}
            typeOfAnimation={typeOfAnimation}
            speedInS={speedInS}
            bRadius={bRadius}
        />
        <DivLoadingSkeleton 
            width={lineW}
            height={lineH}
            fgColor={fgColor}
            bgColor={bgColor}
            typeOfAnimation={typeOfAnimation}
            speedInS={speedInS}
            bRadius={bRadius}
        />
        <DivLoadingSkeleton 
            width={lineW}
            height={lineH}
            fgColor={fgColor}
            bgColor={bgColor}
            typeOfAnimation={typeOfAnimation}
            speedInS={speedInS}
            bRadius={bRadius}
        />
      </div>
      <div className={styles.break}>

      </div>
      <div className={styles.data}>
        <TableLoadingSkeleton 
            width={width}
            height={rowH}
            rowsNumber={rowsNumber}
            bgColor={bgColor}
            fgColor={fgColor}
            speedInS={speedInS}
            typeOfAnimation={typeOfAnimation}
            bRadius={bRadius}
            bRadiusBottom={bRadiusBottom}
        />
      </div>
    </div>
  );
};

export default VisitingScheduleLoadingSkeleton;
