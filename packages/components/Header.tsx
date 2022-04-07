import React, { useRef, useState } from "react";

export function Header({ navigation, logo, theme = "light" }: any) {
  return (
    <>
      <div
        data-theme={theme || "dark"}
        className="w-full h-28 flex fixed z-10 bg-C1 relative"
      >
        <div className="absolute inset-0 -bottom-10 bg-opacity-10 bg-gradient-to-b from-[#0004] to-transparent"></div>
        <div className="w-10/12 m-auto h-full flex">
          <Logo {...logo} />
          <Menu navigation={navigation} />
        </div>
      </div>
    </>
  );
}

const Logo = ({ src }: any) => (
  <div className="relative h-full w-[220px]">
    <div className="absolute inset-0">
      <div className="p-3 bg-white rounded-md mt-4 overflow-hidden">
        <img className="w-sm" src={src} />
      </div>
    </div>
  </div>
);

const Menu = ({ navigation }: any) => (
  <div className="p-10 h-full z-30">
    <div className="menu-content relative">
      {navigation?.map((item: any, i: number) => (
        <MenuItem item={item} key={i} />
      ))}
    </div>
  </div>
);

const MenuItem = ({ item }: any) => {
  const hoverRef = useRef(null);
  const [over, setHover] = useState(false);
  return (
    <div
      ref={hoverRef}
      className="item"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="content">
        <div className="label">{item.label}</div>
        {item.children && <Caret />}
      </div>
      {item.children && <DropDown open={over} items={item.children} />}
    </div>
  );
};

const DropDown = ({ items, open }: any) => {
  return (
    open && (
      <div className="dropdown-menu absolute bg-white top-[50px] rounded py-2 shadow-md drop-shadow-xl">
        {items.map((item: any, i: number) => (
          <div className="dropdown-item" key={i}>
            {item.label}
          </div>
        ))}
      </div>
    )
  );
};

const Caret = () => (
  <svg
    className="caret w-5"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clip-rule="evenodd"
    />
  </svg>
);
