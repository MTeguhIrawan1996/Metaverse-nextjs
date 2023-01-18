import styles from "../styles";

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row gap-7`}>
    <div
      className={`${styles.flexCenter} w-[60px] h-[60px] rounded-3xl bg-[#323f5d]`}
    >
      <p className="font-bold text-[24px] text-white">{number}</p>
    </div>
    <p className="flex-1 font-normal text-[16px] text-[#B0B0B0] leading-8 ">
      {text}
    </p>
  </div>
);

export default StartSteps;
