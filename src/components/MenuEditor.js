import React, { useState } from "react";

function MenuEditor({
  id = "",
  name = "",
  calory = 0,
  carbonhydrate = 0,
  protein = 0,
  fat = 0,
  sodium = 0,
  addToList = (f) => f,
  updateList = (f) => f,
}) {
  const [inputName, setName] = useState(name);
  const [InputCalory, setCalory] = useState(calory);
  const [inputCarbon, setCarbon] = useState(carbonhydrate);
  const [inputProtein, setProtein] = useState(protein);
  const [inputFat, setFat] = useState(fat);
  const [inputSodium, setSodium] = useState(sodium);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      updateList(
        id,
        inputName,
        InputCalory,
        inputCarbon,
        inputProtein,
        inputFat,
        inputSodium
      );
    } else {
      addToList(
        inputName,
        InputCalory,
        inputCarbon,
        inputProtein,
        inputFat,
        inputSodium
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputName}
          onChange={(event) => setName(event.target.value)}
          placeholder="Menu Name"
          required
        />
        <input
          type="text"
          value={InputCalory}
          onChange={(event) => setCalory(event.target.value)}
          placeholder="Calories (kcal)"
          required
        />
        <input
          type="text"
          value={inputCarbon}
          onChange={(event) => setCarbon(event.target.value)}
          placeholder="Carbonhydrate (g)"
          required
        />
        <input
          type="text"
          value={inputProtein}
          onChange={(event) => setProtein(event.target.value)}
          placeholder="Proteins (g)"
          required
        />
        <input
          type="text"
          value={inputFat}
          onChange={(event) => setFat(event.target.value)}
          placeholder="Fats (g)"
          required
        />
        <input
          type="text"
          value={inputSodium}
          onChange={(event) => setSodium(event.target.value)}
          placeholder="Sodiums (mg)"
          required
        />
        <input type="submit" value={id ? "수정" : "추가"}></input>
      </form>
    </div>
  );
}

export default MenuEditor;
