import { Link } from 'react-router-dom'

import styles from '../css/SideBar.module.css'

import '../css/root.css'



function SideBar(){
	return(
		<div className={styles.main}>
			<div className={styles.photo}>
				<div className={styles.pic}></div>
			</div>

			<div className={styles.list}>
				<nav>
					<ul>
						<li>
							<Link className={styles.link} to='/home'>Home</Link>
						</li>
						<li>
							<Link className={styles.link} to='/sobre'>Sobre Mim</Link>
						</li>
						<li>
							<Link className={styles.link} to='/skills'>Skills</Link>
						</li>
						<li>
							<Link className={styles.link} to='/contato'>Contato</Link>
						</li>
					</ul>
				</nav>
			</div>	
		</div>
	)
}

export default SideBar