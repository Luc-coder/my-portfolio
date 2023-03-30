// import { BsGithub } from 'react-icons/bs'

import styles from '../components/css/Contato.module.css'

function Contato(){
	return(
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.mainBox}>
					<div className={styles.singleBox}>
						<p>Github: <a href='https://github.com/Luc-coder'>https://github.com/Luc-coder</a></p>
					</div>
					<div className={styles.singleBox}>
						<p>Linkedin: <a href='https://www.linkedin.com/in/lucas-marques-russi/'>https://www.linkedin.com/in/lucas-marques-russi/</a></p>
					</div>
					<div className={styles.singleBox}>
						<p>Email: lucasmarquesrussi8@gmail.com</p>
					</div>
					<div className={styles.singleBox}>
						<p>Tel: (11) 97951-1800</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contato