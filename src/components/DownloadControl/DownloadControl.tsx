import React from "react";

import style from "./DownloadControl.module.scss";

interface Props {
  /** porcentaje que se está utilizando */
  usageGB: number;

  /** maximum percentage */
  maxGb: number;
}

const DownloadControl: React.FC<Props> = ({ usageGB, maxGb }) => {
  const percentage = (usageGB * 100) / maxGb;
  const leftGB = maxGb - usageGB;

  return (
    <div className={style?.container}>
      <span className={style?.extra_info}>
        <span className={style?.leftGB}>{leftGB}</span> <span>GB LEFT</span>
      </span>
      <p className={style?.p_info}>
        You have use <strong>{usageGB}GB</strong> of your storage
      </p>
      <div className={style?.container_downloadBar}>
        <span style={{ width: `${percentage}%` }}> </span>
      </div>
      <div className={style?.container_parameters}>
        <span>0GB</span> <span>{maxGb}GB</span>
      </div>
    </div>
  );
};

export default React.memo(DownloadControl);
