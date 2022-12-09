import "./App.css";
import { useState } from "react";
import { v4 } from "uuid";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuLister from "./components/MenuLister";
import MenuEditor from "./components/MenuEditor";
import menus from "./data/menus.json";
import menuFreq from "./data/menuFreq.json";
import MenuRecommender from "./components/MenuRecommender";

function App() {
  const [menuList, setMenus] = useState(menus.menuList);
  const [menuFrequency, setFreq] = useState(menuFreq.menuFrequency);

  const addMenu = (name, calory, carbonhydrate, protein, fat, sodium) => {
    const new_id = v4();
    const newMenu = {
      id: new_id,
      name,
      calory,
      carbonhydrate,
      protein,
      fat,
      sodium,
    };
    const newMenuFreq = Array.from({ length: 30 }, () => 0);
    const newFreqArr = { ...menuFrequency };

    newFreqArr[new_id] = newMenuFreq;

    setMenus([...menuList, newMenu]);
    setFreq(newFreqArr);
  };

  const removeMenu = (id) => {
    const newMenuList = menuList.filter((menu) => menu.id !== id);
    const newFreq = Object.fromEntries(
      Object.entries(menuFrequency).filter(([k, v]) => k !== id)
    );

    setMenus(newMenuList);
    setFreq(newFreq);
  };

  const updateMenuList = (
    id,
    name,
    calory,
    carbonhydrate,
    protein,
    fat,
    sodium
  ) => {
    const newMenuList = menuList.map((menu) =>
      menu.id === id
        ? { id, name, calory, carbonhydrate, protein, fat, sodium }
        : menu
    );
    setMenus(newMenuList);
  };

  const freqOneAdd = (id) => {
    let newFreqArr = { ...menuFrequency };
    newFreqArr[id] = [...menuFrequency[id].slice(1, 30), 1];
    setFreq(newFreqArr);
  };

  return (
    <div className="App">
      <Header title="오늘 점심 뭐 먹지?" />
      <p>
        <b>==등록된 메뉴 리스트==</b>
      </p>
      <MenuLister
        menus={menuList}
        freqs={menuFrequency}
        removeFromList={removeMenu}
        updateList={updateMenuList}
      />
      <p>
        <i>공지 추가하기</i>
      </p>
      <MenuEditor addToList={addMenu} />
      <Footer copyright="소프트웨어개발실습2" />
      <MenuRecommender
        menus={menuList}
        freqs={menuFrequency}
        addFrequency={freqOneAdd}
      />
    </div>
  );
}

export default App;
