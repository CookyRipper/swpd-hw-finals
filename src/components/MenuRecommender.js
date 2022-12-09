import React, { useState, useCallback } from "react";
import RandomGenerator from "./RandomGenerator";

function MenuRecommender({ menus = [], freqs = {}, addFrequency = (f) => f }) {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  return (
    <div>
      <RandomGenerator
        menus={menus}
        freqs={freqs}
        addFrequency={addFrequency}
      />
      <button onClick={forceUpdate}>다시 추천하기</button>
    </div>
  );
}

export default MenuRecommender;
