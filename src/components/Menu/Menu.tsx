import home from '../../assets/icones/home-ativo.png'
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png'
import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import surpreendaMe from '../../assets/icones/surpreenda-me-inativo.png'
import './menu.styles.scss'

export function Menu() {
    return (
        <nav className='menu'>
            <ul>
                <li>
                    <img src={home} alt='Início' />
                    <a href='/'>Início</a>
                </li>
                <li>
                    <img src={maisCurtidas} alt='Mais curtidas' />
                    <a href='/'>Mais curtidas</a>
                </li>
                <li>
                    <img src={maisVistas} alt='Mais vistas' />
                    <a href='/'>Mais vistas</a>
                </li>
                <li>
                    <img src={novas} alt='Novas' />
                    <a href='/'>Novas</a>
                </li>
                <li>
                    <img src={surpreendaMe} alt='Surpreenda-me' />
                    <a href='/'>Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}