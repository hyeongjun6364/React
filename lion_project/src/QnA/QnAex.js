import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import cn from "classnames";


const Menu = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <div className={cn("MenuSection")}>
      <div
        className={cn("hideMenuSection", {
          show: visible,
          hide: !visible,
        })}
      >
        <ul className={cn("hideMenuUl")}>
          <li className={cn("Menulist")}>
            <Link className={cn("MenuLink")} to="/Login">
              Login/Join
            </Link>
          </li>
          <li className={cn("Menulist")}>
            <Link className={cn("MenuLink")} to="/">
              Home
            </Link>
          </li>
          <li className={cn("Menulist")}>
            <Link className={cn("MenuLink")} to="/Map">
              Map
            </Link>
          </li>
          <li className={cn("Menulist")}>
            <Link className={cn("MenuLink")} to="/Bug">
              Bug
            </Link>
          </li>
          <li className={cn("Menulist")}>
            <Link className={cn("MenuLink")} to="/Notice">
              Notice
            </Link>
          </li>
          <li className={cn("Menulist")}>
            <Link className={cn("MenuLink")} to="/About">
              About us
            </Link>
          </li>
        </ul>
      </div>

      <button className={cn("MenuButton")} onClick={toggleMenu}>
        {visible ? (
          <FiX className={cn("closeButton")} />
        ) : (
          <FiMenu className={cn("openButton")} />
        )}
      </button>
    </div>
  );
};

export default Menu;
