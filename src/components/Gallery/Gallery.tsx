import { Tags } from '../Tags/Tags.tsx';
import './Gallery.styles.scss'
import fotos from './fotos.json'
import favorito from './assets/favorito.png'
import open from './assets/open.png'

export function Gallery() {
    return (
        <section className='galeria'>
            <h2>Navegue pela galeria</h2>
            <Tags />
            <ul className='lista'>
                {fotos.map((foto) => {
                    return (
                        <li key={foto.id} className='card'>
                            <img className='imagem' src={foto.imagem} alt={foto.titulo}/>
                            <p className='descricao'>{foto.titulo}</p>
                            <div>
                                <p>{foto.creditos}</p>
                                <span>
                                    <img src={favorito} alt='Curtir' />
                                    <img src={open} alt='Abrir modal' />
                                </span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}