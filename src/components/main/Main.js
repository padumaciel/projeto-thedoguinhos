import React from 'react';
import Card from "../card/Card";
import styles from "./Main.module.css"

const Main = (props) => {

    const cardsArray = props.cards.map((cardURL) => {
        return <Card url={cardURL} racas={cardURL.split('/')[4].split('-')[0].toUpperCase()} subracas={cardURL.split('/')[4].split('-').reverse()[0].toUpperCase()} />
    })

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                {cardsArray}
            </div>
        </div>
    )
}

export default Main;