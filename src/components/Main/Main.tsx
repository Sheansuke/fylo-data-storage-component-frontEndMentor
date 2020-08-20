/* eslint-disable global-require */
import React from "react";

// useWindowWidth
import { useWindowWidth } from "@react-hook/window-size";

// styles
import style from "./Main.module.scss";

// images
import bgDesktop from "../../images/bg-desktop.png";

// component
import FileControl from "../FileControl/FileControl";
import DownloadControl from "../DownloadControl/DownloadControl";

const Main: React.FC = () => {
  const width = useWindowWidth();

  return (
    <main className={style.body}>
      {width > 768 && (
        <img src={bgDesktop} alt="bg-desktop" className={style.bgDesktop} />
      )}

      <div className={style.container}>
        <FileControl />
        <DownloadControl usageGB={815} maxGb={1000} />
      </div>
    </main>
  );
};

export default Main;
