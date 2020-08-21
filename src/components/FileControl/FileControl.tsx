import React from "react";

// style
import style from "./FileControl.module.scss";

// COMPONENTS
import IconComponent from "./IconComponent/IconComponent";

// SVG
import logo from "../../images/logo.svg";
import iconDocument from "../../images/icon-document.svg";
import iconFolder from "../../images/icon-folder.svg";
import iconUpload from "../../images/icon-upload.svg";

const FileControl: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.container_elements}>
        {/* logo */}
        <img src={logo} alt="logo" className={style.img_component} />

        {/* buttons */}
        <div className={style.icon_container}>
          <IconComponent icon={iconDocument} />
          <IconComponent icon={iconFolder} />
          <IconComponent icon={iconUpload} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(FileControl);
