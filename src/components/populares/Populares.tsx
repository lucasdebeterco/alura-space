import fotosPopulares from './fotos-populares.json'
import './Populares.styles.scss'

export function Populares() {
    return (
        <aside className='populares'>
            <h2>Populares</h2>
            <ul className='imagens'>
                {fotosPopulares.map((fotoPopular) => {
                    return(
                        <li key={fotoPopular.id}>
                            <img src={fotoPopular.path} alt={fotoPopular.alt} />
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}