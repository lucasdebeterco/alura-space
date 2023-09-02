import { Header } from 'src/components/Header/Header.tsx';
import { Menu } from 'src/components/Menu/Menu.tsx';
import banner from './banner.png'
import './Home.styles.scss'
import { Footer } from 'src/components/Footer/Footer.tsx';
import { Gallery } from 'src/components/Gallery/Gallery.tsx';
import { Populares } from 'src/components/populares/Populares.tsx';


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