import logo from './assets/logo.png';
import searchIcon from './assets/search.png'

export function Header() {
    return (
        <header>
            <img src={logo} alt='Logo Alura Space' />
            <div>
                <input type='text' placeholder='O que você procura?' />
                <img src={searchIcon} alt='Lupa' />
            </div>
        </header>
    )
}