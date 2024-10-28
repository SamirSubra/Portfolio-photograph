import "@/styles/layouts/Header.scss";

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <nav className="navigation">
                    <a href="" className="navigation__logo"><img src="./src/assets/images/logo.png" alt="Logo"/></a>
                    <ul className="navigation__menu">
                        {/*boucle */}
                        <li className="navigation__menu__item">
                            <a href="" target="">Header</a>
                        </li>
                        <li className="navigation__menu__item">
                            <a href="" target="">Header</a>
                        </li>
                        <li className="navigation__menu__item">
                            <a href="" target="">Header</a>
                        </li>
                    </ul>
                    <button className="navigation__burger-menu">
                        <span className="burger-bar"></span>
                        <span className="burger-bar"></span>
                        <span className="burger-bar"></span>
                    </button>
                </nav>
            </div>
        </header>
);
};

export default Header;