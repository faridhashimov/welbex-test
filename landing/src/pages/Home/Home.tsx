import style from './Home.module.css'
import { Footer, Header, Main } from '../../components'

const Home = () => {
    return (
        <div className={style.root}>
            <div className={style.homeContainer}>
                <Header />
                <Main />
                <Footer />
                <div className={style.redBall}></div>
                <div className={style.purpleBall}></div>
                <div className={style.redBallSm}></div>
                <div className={style.redLight}></div>
                <div className={style.purpleLight}></div>
            </div>
        </div>
    )
}

export default Home
