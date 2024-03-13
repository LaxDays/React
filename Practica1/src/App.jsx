import KoderCard from "./components/KoderCard";
import Buttons from "./components/Buttons";

export default function App() {
    return (
        <main>
        <section className="koders_cards_container">
            <div className="contenedorSup">
                    <h1><span>Vite</span> <br/>Next Generation <br/>Frontend Tooling</h1>
                    <p>Get ready for a development environment that <br/>can finally catch up with you.</p>
                    <Buttons textButton="Get Started"/>
                    <Buttons textButton="Why Vite"/>
                    <Buttons textButton="View on GitHub"/>
                    <Buttons textButton="ViteConf 23!"/>
            </div>
                <img className="logo" src="https://vitejs.dev/logo-with-shadow.png"/>

            <KoderCard
                icon = '💡' 
                title = 'Instant Server Start'
                text = 'On demand file serving over native ESM, no bundling required!'
            />
            <KoderCard 
                icon="⚡"
                title= 'Lightning Fast HMR'
                text= 'Hot Module Replacement (HMR) that stays fast regardless of app size.'
            />
            <KoderCard 
                icon= "🛠️"
                title= 'Rich Features'
                text= 'Out-of-the-box support for TypeScript, JSX, CSS and more.'
            />
            <KoderCard 
                icon="📦"
                title='Optimized Build'
                text='Pre-configured Rollup build with multi-page and library mode support.'
            />
            <KoderCard 
                icon="🔩"
                title='Universal Plugins'
                text='Rollup-superset plugin interface shared between dev and build.'
            />
            <KoderCard 
                icon="🔑"
                title='Fully Typed APIs'
                text='Flexible programmatic APIs with full TypeScript typing.'
            />
        </section>
        <div className="btn_abajo_contenedor">
            <Buttons textButton="Sponsor Vite"/>
            <Buttons textButton="Sponsor Evan You"/>
        </div>
    </main>
    )
}