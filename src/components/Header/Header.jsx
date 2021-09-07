import style from './Header.module.css'

function Header() {
    return (
        <header className={style.header}>
            <img src="https://img2.freepng.ru/20180509/gvw/kisspng-globe-earth-clip-art-5af366a46f1587.271956161525900964455.jpg" alt="Лого"/>
        </header>
    );
}

export default Header;