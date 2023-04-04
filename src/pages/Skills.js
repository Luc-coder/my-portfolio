import styles from '../components/css/Skills.module.css'
import '../components/css/root.css'

import { DiHtml5 } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import { DiJavascript1 } from 'react-icons/di'
import { DiPhp } from 'react-icons/di'
import { DiNodejsSmall } from 'react-icons/di'
import { DiMysql } from 'react-icons/di'
import { DiReact } from 'react-icons/di'
import { DiPython } from 'react-icons/di'

function Skills(){
	return(
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.title}>
					<h1>Habilidades e Conhecimentos</h1>
				</div>
				<div className={styles.mainBox}>
					<div className={styles.singleBox}>
						<DiHtml5 />
						<br></br>
						<DiCss3 />
						<br></br>
						<DiJavascript1 />
					</div>
					<div className={styles.singleBox}>
						<DiPhp />
					</div>
					<div className={styles.singleBox}>
						<DiNodejsSmall />
					</div>
				</div>
				<div className={styles.mainBox}>
					<div className={styles.singleBox}>
						<DiMysql /> 
					</div>
					<div className={styles.singleBox}>
						<DiReact />
					</div>
					<div className={styles.singleBox}>
						<DiPython />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills