import React from "react";

// STYLE
import style from "./IconComponent.module.scss";

interface Props {
  icon: string;
}
const App: React.FC<Props> = ({ icon }) => {
  return (
    <button type="button" className={style.container}>
      <img src={icon} alt={icon} className={style.imgSize} />
    </button>
  );
};

export default React.memo(App);
