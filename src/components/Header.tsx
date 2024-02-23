import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../commons/redux";
import { togglerMenuBurger } from "../../redux/reducers/header";
import { Link } from "react-router-dom";

export default function Header() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.header.buttonBurger);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className="header mb-5">
      <div className="navbar max-md:flex max-md:justify-around bg-base-300 items-center">
        <div className="flex-1">
          <div className="w-26">
            <Link to={"/"}>
              <img src="/src/assets/logo.png" alt="" width={50} height={50} />
            </Link>
          </div>
        </div>
        <ul
          className={`menu menu-horizontal px-1 ${
            windowWidth < 640 ? "hidden" : "visible"
          }`}
        >
          <li>
            <a href="#" className="tablet:text-xs">
              Exemple de lien 1
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="tablet:text-xs">
              Exemple de lien 2
            </a>
          </li>
        </ul>
        {/* Boutton burger */}
        <button
          type="button"
          className="lg:focus:outline-none flex flex-col mb-2 ml-10"
          onClick={() => {
            dispatch(togglerMenuBurger(!isOpen));
          }}
        >
          <span
            className={`block h-[2px] w-5 bg-base-content rounded-full  transition-all duration-1000 transform ${
              isOpen ? "rotate-45 translate-y-2 mt-1" : "mt-2"
            }`}
          ></span>
          <span
            className={`block h-[2px] w-5 bg-base-content rounded-full mt-1 transition-all duration-1000 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-[2px] w-5 bg-base-content rounded-full  transition-all duration-1000 transform ${
              isOpen ? "-rotate-45 -translate-y-2 mt-2" : "mt-1"
            }`}
          ></span>
        </button>
        {/* Menu déroulant */}
        <div
          style={{ zIndex: 999 }}
          className={`p-2 bg-base-100 rounded-box shadow w-52 absolute top-16 right-5 flex-col tablet:w-40 ${
            isOpen ? "visible" : "hidden"
          }`}
        >
          <ul>
            <li>
              <a
                className="btn btn-sm btn-ghost w-[180px] tablet:btn-xs"
                onClick={() => {
                  dispatch(togglerMenuBurger(false));
                }}
              >
                Se connecter
              </a>
            </li>

            <li className={`${windowWidth < 640 ? "visible" : "hidden"}`}>
              <a
                className="btn btn-sm btn-ghost btn-block tablet:btn-xs"
                href="#"
                target="_blank"
              >
                Exemple de lien 1
              </a>
            </li>
            <li className={`${windowWidth < 640 ? "visible" : "hidden"}`}>
              <a
                className="btn btn-sm btn-ghost btn-block tablet:btn-xs"
                href="#"
                target="_blank"
              >
                Exemple de lien 2
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
