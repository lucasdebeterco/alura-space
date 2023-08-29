import { Header } from '../../components/Header/Header.tsx';
import { Menu } from '../../components/Menu/Menu.tsx';
import banner from './banner.png'
import './Home.styles.scss'

export function Home() {
    return (
        <>
            <Header />
            <main>
                <section className='principal'>
                    <Menu />
                    <div className='imagem'>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={banner} alt='Terra vista do espaço' />
                    </div>
                </section>
            </main>
        </>

    )
}