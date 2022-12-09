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

  const [findName, setName] = useState("");

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
      <div className="wrapper">
        <div className="container">
          <section className="main-wrap">
            <div className="main-left-container">
              <Header title="오늘 점심 뭐 먹지?" />
              <p>
                ==등록된 메뉴 리스트==
              </p>
              <input
                type="text"
                value={findName}
                onChange={(event) => setName(event.target.value)}
                placeholder="Name to find..."
              ></input>
            </div>
            <div className="main-right-container">
              <img src={process.env.PUBLIC_URL + '/eat_food.png'} alt="main-food-icon" />
            </div>
            
          </section>
          <section className="menu-list-wrap">
            <MenuLister
                findName={findName}
                menus={menuList}
                freqs={menuFrequency}
                removeFromList={removeMenu}
                updateList={updateMenuList}
              />
          </section>
          <section className="detail-wrap">
            <h1 className="main-section-title">Today's pick!</h1>
            <MenuRecommender
              menus={menuList}
              freqs={menuFrequency}
              addFrequency={freqOneAdd}
            />
          </section>
          <section className="menu-add-wrap">
          <h1 className="main-section-title">메뉴 추가하기</h1>
            <MenuEditor addToList={addMenu} />
          </section>

          <Footer copyright="소프트웨어개발실습2" />
        </div>
      </div>
    </div>
  );
}

export default App;
