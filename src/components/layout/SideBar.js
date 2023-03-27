import { Link } from 'react-router-dom'

import styles from '../css/SideBar.module.css'



function SideBar(){
	return(
		<div className={styles.main}>
			
			<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/sobre'>Sobre</Link>
					</li>
					<li>
						<Link to='/contato'>Contato</Link>
					</li>
				</ul>
		</div>
	)
}

export default SideBar