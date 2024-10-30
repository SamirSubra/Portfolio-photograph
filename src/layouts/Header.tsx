import "@/styles/layouts/Header.scss";
import {useRef, useState} from "react";

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const menu= useRef<HTMLDivElement | null>(null)
    const navigation= useRef<HTMLDivElement | null>(null)

    const toggleActive = () : void =>{
        setIsActive(!isActive);
        if(menu.current){
            const text: HTMLElement | null = menu.current.querySelector("p");
            if(!isActive){
                text ? text.textContent = "Close" : "";
            }else{
                text ? text.textContent = "Menu" : "";
            }
            }
        }



    return (
        <header id="header">
            <div className="container">
                <div className="left">
                    <p className="vertical"><span>M</span><span>o</span><span>n</span><span>o</span></p>
                    <p className="horizontal">Studio</p>
                </div>
                <div className="right">
                    <div ref={menu} onClick={toggleActive} className={`menu ${isActive ? "active" : ""}`}><span className="bar">|</span><span className="bar">|</span><span className="bar">|</span><span className="cross"></span> <p>Menu</p></div>
                    <nav ref={navigation} className={`navigation ${isActive ? "active" : ""}`}>
                        <ul className="navigation__menu">
                            <li className="navigation__menu__item">
                                <a href="" target="">Services</a>
                            </li>
                            <li className="navigation__menu__item">
                                <a href="" target="">Works</a>
                            </li>
                            <li className="navigation__menu__item">
                                <a href="" target="">About us</a>
                            </li>
                            <li className="navigation__menu__item">
                                <a href="" target="">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;