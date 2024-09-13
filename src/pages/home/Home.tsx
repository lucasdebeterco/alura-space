import { Header } from '../../components/Header/Header.tsx'
import { Menu } from '../../components/Menu/Menu.tsx'
import banner from './banner.png'
import './Home.styles.scss'
import { Gallery } from '../../components/Gallery/Gallery.tsx'
import { Populares } from '../../components/populares/Populares.tsx'
import { Footer } from '../../components/Footer/Footer.tsx'


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
                <div className='areaGaleria'>
                    <Gallery />
                    <Populares />
                </div>
            </main>
            <Footer />
        </>

    )
}