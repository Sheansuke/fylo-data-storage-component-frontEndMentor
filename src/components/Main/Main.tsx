/* eslint-disable global-require */
import React from "react";

// USEWINDOWSWIDTH
import { useWindowWidth } from "@react-hook/window-size";

// STYLE
import style from "./Main.module.scss";

// IMAGES
import bgDesktop from "../../images/bg-desktop.png";

// COMPONENTS
import FileControl from "../FileControl/FileControl";
import DownloadControl from "../DownloadControl/DownloadControl";

const Main: React.FC = () => {
  const width = useWindowWidth();

  return (
    // presents image only desktop view
    <main className={style.body}>
      {width > 768 && (
        <img src={bgDesktop} alt="bg-desktop" className={style.bgDesktop} />
      )}

      {/* component */}
      <div className={style.container}>
        <FileControl />
        <DownloadControl />
      </div>
    </main>
  );
};

export default Main;
