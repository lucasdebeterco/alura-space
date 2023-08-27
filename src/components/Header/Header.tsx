import logo from './assets/logo.png';
import searchIcon from './assets/search.png'
import './header.styles.scss'

export function Header() {
    return (
        <header>
            <img src={logo} alt='Logo Alura Space' />
            <div className='container'>
                <input type='text' placeholder='O que você procura?' />
                <img src={searchIcon} alt='Lupa' />
            </div>
        </header>
    )
}