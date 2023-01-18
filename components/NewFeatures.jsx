import styles from "../styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] bg-[#323F5D]`}
    >
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 className="mt-[22px] font-bold text-[24px] leading-[30.24px] text-white">
      {title}
    </h1>
    <p className="flex-1 mt-[12px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);
export default NewFeatures;
