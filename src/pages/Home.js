import styles from '../components/css/Home.module.css'

import { HiOutlineCode } from 'react-icons/hi'

import '../components/css/root.css'

function Home(){
	return(
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.names}>
					<div className={styles.fname}><p>Lucas</p></div>
					<div className={styles.mname}><p>Marques</p></div>
					<div className={styles.lname}><p>Russi</p></div>
				</div>
				<div className={styles.dev}>
					<div className={styles.text}>
						<p>WEB<br></br>DEVELOPER</p>
					</div>
					<div className={styles.imgBox}>
						<HiOutlineCode color='white'/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home