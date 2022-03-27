import styles from "./Card.module.css"
import React from 'react';

const Card = (props) => {

	return (
		<div className={styles.child}>
            < img className={styles.card} src={props.url} alt='Imagem aleatória de um cachorro'/>
            <div className={styles.infos}>
            <p className={styles.raca}><strong>RAÇA:</strong> {props.racas}</p>
            <p className={styles.subraca}><strong>SUB-RAÇA:</strong> {props.subracas}</p>
            </div>
		</div>
	)
}

export default Card;