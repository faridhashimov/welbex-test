import style from './Main.module.css'

const Main = () => {
    return (
        <div className={style.main}>
            <div className={style.mainBg}></div>
            <div className={style.mainContainer}>
                <div className={style.mainLeft}>
                    <h1>
                        Зарабатывайте <br /> больше <br />
                        <span>c WELBEX</span>
                    </h1>
                    <p>
                        Развиваем и контролируем <br /> продажи за вас
                    </p>
                </div>
                <div className={style.mainRight}>
                    <h4>
                        Вместе с{' '}
                        <span>
                            бесплатной <br /> консультацией
                        </span>{' '}
                        мы дарим:
                    </h4>
                    <div className={style.rightTop}>
                        <div>
                            <h4>виджеты</h4>
                            <p>
                                30 готовых <br /> решений
                            </p>
                        </div>
                        <div>
                            <h4>Dashboard</h4>
                            <p>
                                с показателями <br /> вашего бизнеса
                            </p>
                        </div>
                    </div>
                    <div className={style.rightBottom}>
                        <div>
                            <h4>Skype Аудит</h4>
                            <p>
                                отдела продаж <br /> и CRM системы
                            </p>
                        </div>
                        <div>
                            <h4>35 дней</h4>
                            <p>
                                использования <br /> CRM
                            </p>
                        </div>
                    </div>
                    <button className={style.consultation}>
                        Получить консультацию
                    </button>
                </div>
                <div className={style.mobileMainRight}>
                    <h4>
                        Вместе с&nbsp;
                        <span>
                            бесплатной <br /> консультацией&nbsp;
                        </span>
                        мы дарим:
                    </h4>
                    <div className={style.services}>
                        <div className={style.service}>
                            <div className={style.line}></div>
                            <span>Skype аудит</span>
                        </div>
                        <div className={style.service}>
                            <div className={style.line}></div>
                            <span>30 виджетов</span>
                        </div>
                        <div className={style.service}>
                            <div className={style.line}></div>
                            <span>Dashboard</span>
                        </div>
                        <div className={style.service}>
                            <div className={style.line}></div>
                            <span>Месяц amoCRM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
