import React, { useState } from "react";
import MenuEditor from "./MenuEditor";

function MenuListerDetail({
  id = "",
  name = "",
  calory = 0,
  carbonhydrate = 0,
  protein = 0,
  fat = 0,
  sodium = 0,
  freq = 0,
  removeFromList = (f) => f,
  updateList = (f) => f,
}) {
  const [editable, setEditable] = useState(false);
  const [showable, setShowable] = useState(false);

  return (
    <div>
      <p onClick={() => (showable ? setShowable(false) : setShowable(true))}>
        {name}
      </p>
      {showable ? (
        <div>
          <p>
            칼로리(열량): {calory}kcal 탄수화물: {carbonhydrate}g 단백질:{" "}
            {protein}g 지방: {fat}g 나트륨: {sodium}mg, 최근 30일간 선택횟수:{" "}
            {freq}회
            <button
              onClick={() =>
                editable ? setEditable(false) : setEditable(true)
              }
            >
              수정
            </button>
            <button onClick={() => removeFromList(id)}>삭제</button>
          </p>
        </div>
      ) : null}
      {editable ? (
        <MenuEditor
          id={id}
          name={name}
          calory={calory}
          carbonhydrate={carbonhydrate}
          protein={protein}
          fat={fat}
          sodium={sodium}
          updateList={updateList}
        />
      ) : null}
    </div>
  );
}

export default MenuListerDetail;
