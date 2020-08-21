import React, { useState } from "react";

// STYLE
import style from "./Modify.module.scss";

interface Props {
  usageGB: number;
  maxGB: number;
  setGbs: Function;
}

const App: React.FC<Props> = ({ usageGB, maxGB, setGbs }) => {
  const [showInputs, setShowInputs] = useState<boolean>(false);
  const [inputUsageGB, setInputUsageGB] = useState<number>(usageGB);
  const [inputMaxGB, setInputMaxGB] = useState<number>(maxGB);

  const confirm = (): void => {
    setShowInputs(!showInputs);
    if (inputUsageGB > inputMaxGB) {
      // eslint-disable-next-line no-alert
      alert("Usage GB must contain a smaller value than Max GB ");
      setShowInputs(true);
      return;
    }

    setGbs((prevState) => {
      return { ...prevState, ...{ usageGB: inputUsageGB, maxGB: inputMaxGB } };
    });
  };
  console.log(inputUsageGB, inputMaxGB);
  return (
    <div className={style?.container_modify}>
      {showInputs && (
        <div className={style.container_form}>
          <label htmlFor="usageGB">
            Usage GB:{" "}
            <input
              type="number"
              name="usageGB"
              min={0}
              max={maxGB}
              value={inputUsageGB}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): unknown =>
                setInputUsageGB(Number(e.target.value))
              }
            />
          </label>
          <label htmlFor="maxGB">
            Max GB:{" "}
            <input
              type="number"
              name="maxGB"
              min={0}
              max={maxGB}
              value={inputMaxGB}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): unknown =>
                setInputMaxGB(Number(e.target.value))
              }
            />
          </label>
        </div>
      )}
      <button type="button" onClick={confirm}>
        {showInputs ? "Confirm Changes" : "Open Modify"}
      </button>
    </div>
  );
};

export default React.memo(App);
