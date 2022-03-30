import React from "react";

import logo from "../../Public/logo.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img src={logo} />
        </div>
        <div className="header__subTitle">React Course</div>
      </header>
    </>
  );
}
