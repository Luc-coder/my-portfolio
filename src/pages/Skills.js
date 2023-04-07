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
				<div className={styles.mainBoxU}>
					<div className={styles.singleBox}>
						<div className={styles.svgBoxFlex}>
							<div className={styles.dualBox}>
								<div className={styles.leftBox}><DiHtml5 color='#e34c26'/></div>
								<div className={styles.rightBox}><DiCss3 color='#2979ff'/></div>
							</div>
							<div className={styles.oneBox}><DiJavascript1 color='#f0db4f'/></div>
						</div>
						<div className={styles.nameBox}><p>HTML, CSS, JavaScript</p></div>
					</div>
					<div className={styles.singleBox}>
						<div className={styles.svgBox}><DiPhp color='rgb(119, 123, 179)'/></div>
						<div className={styles.nameBox}><p>PHP</p></div>
					</div>
					<div className={styles.singleBox}>
						<div className={styles.svgBox}><DiNodejsSmall color='#68a063'/></div>
						<div className={styles.nameBox}><p>Node.JS</p></div>
					</div>
				</div>
				<div className={styles.mainBoxD}>
					<div className={styles.singleBox}>
						<div className={styles.svgBox}><DiMysql color='#00758f'/></div> 
						<div className={styles.nameBox}><p>MySQL</p></div>
					</div>
					<div className={styles.singleBox}>
						<div className={styles.svgBox}><DiReact color='#7cc5d9'/></div>
						<div className={styles.nameBox}><p>React.JS</p></div>
					</div>
					<div className={styles.singleBox}>
						<div className={styles.svgBox}><DiPython color='#306998'/></div>
						<div className={styles.nameBox}><p>Python</p></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills