import React, { useState } from "react";
import MenuListerDetail from "./MenuListerDetail";

function MenuLister({
  menus = [],
  freqs = {},
  removeFromList = (f) => f,
  updateList = (f) => f,
  findName = ""
}) {
  // const [findName, setName] = useState("");
  console.log(menus);
  console.log(freqs);
  console.log(findName)
  console.log(`ML menus: ${menus[0][0]}`);
  console.log(`ML freqs: ${freqs[2]}`);

  return (
    <>
        <h1 className="main-section-title">Menu List</h1>
        <div className="menu-wrap">
          {menus
            .filter((user) => user.name.includes(findName))
            .map((menu) => (
              <MenuListerDetail
                key={menu.id}
                {...menu}
                freq={freqs[menu.id].reduce(
                  (partialSum, a) => partialSum + a,
                  0
                )}
                removeFromList={removeFromList}
                updateList={updateList}
              />
            ))}
        </div>
    </>
  );
}

export default MenuLister;
