import { Tags } from '../Tags/Tags.tsx';
import './Gallery.styles.scss'
import fotos from './fotos.json'
import favorito from './assets/favorito.png'
import open from './assets/open.png'
import { useState } from 'react';

export function Gallery() {
    const [itens, setItens] = useState(fotos)
    const tags = [... new Set(fotos.map((tag) => tag.tag))]

    function filtraFotos(tag: any) {
        const novasFotos = fotos.filter((foto) => {
            return foto.tag === tag
        })

        setItens(novasFotos)
    }

    return (
        <section className='galeria'>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filtraFotos={filtraFotos} />
            <ul className='cards'>
                {itens.map((foto) => {
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