import React from "react";

function RandomGenerator({ menus = [], freqs = {}, addFrequency = (f) => f }) {
  const selectedMenu = menus.at(
    Math.floor(Math.random() * Math.floor(menus.length))
  );
  const clickSelect = (obj) => {
    addFrequency(obj.id);
    alert(`${obj.name}을(를) 선택하셨습니다! 맛있는 식사되세요!`);
  };

  return (
    <div>
      <span>{selectedMenu.name} </span>
      <button onClick={() => clickSelect(selectedMenu)}>선택</button>

      <div>
        칼로리(열량): {selectedMenu.calory}kcal 탄수화물:{" "}
        {selectedMenu.carbonhydrate}g 단백질: {selectedMenu.protein}g 지방:{" "}
        {selectedMenu.fat}g 나트륨: {selectedMenu.sodium}mg, 최근 30일간
        선택횟수:{" "}
        {freqs[selectedMenu.id].reduce((partialSum, a) => partialSum + a, 0)}회
      </div>
    </div>
  );
}

export default RandomGenerator;
