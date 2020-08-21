import React, { useState } from "react";

// STYLE
import style from "./DownloadControl.module.scss";

// COMPONENTS
import Modify from "./Modify/Modify";

interface GbsState {
  usageGB: number;
  maxGB: number;
}

const DownloadControl: React.FC = () => {
  const [gbs, setGbs] = useState<GbsState>({
    usageGB: 815,
    maxGB: 1000,
  });

  const percentage = (gbs?.usageGB * 100) / gbs?.maxGB;
  const leftGB = gbs?.maxGB - gbs?.usageGB;

  return (
    <div className={style?.container}>
      {/* info gb left */}
      <span className={style?.extra_info}>
        <span className={style?.leftGB}>{leftGB}</span> <span>GB LEFT</span>
      </span>
      {/* info usage storage */}
      <p className={style?.p_info}>
        You have use <strong>{gbs?.usageGB}GB</strong> of your storage
      </p>
      {/* download bar */}
      <div className={style?.container_downloadBar}>
        <span style={{ width: `${percentage}%` }}> </span>
      </div>
      {/* parameters download min and max */}
      <div className={style?.container_parameters}>
        <span>0GB</span> <span>{gbs?.maxGB}GB</span>
      </div>
      <Modify usageGB={gbs?.usageGB} maxGB={gbs?.maxGB} setGbs={setGbs} />
    </div>
  );
};

export default React.memo(DownloadControl);
