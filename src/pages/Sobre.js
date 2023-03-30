import styles from '../components/css/Sobre.module.css'

function Sobre(){
	return(
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.boxText}>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium quam non justo pretium finibus. Nunc quis ipsum fermentum est dictum tincidunt. Quisque dapibus nisi vel elit porta suscipit. Aenean feugiat lorem id dolor semper eleifend.</p>
				</div>
				<div className={styles.boxText}>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium quam non justo pretium finibus. Nunc quis ipsum fermentum est dictum tincidunt. Quisque dapibus nisi vel elit porta suscipit. Aenean feugiat lorem id dolor semper eleifend.</p>
				</div>
				<div className={styles.boxText}>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium quam non justo pretium finibus. Nunc quis ipsum fermentum est dictum tincidunt. Quisque dapibus nisi vel elit porta suscipit. Aenean feugiat lorem id dolor semper eleifend.</p>
				</div>

				<div className={styles.boxGaleria}>
					<div className={styles.galeria}>
						<div className={styles.galeriaSingle}>

						</div>
						<div className={styles.galeriaSingle}>
							
						</div>
						<div className={styles.galeriaSingle}>
							
						</div>
						<div className={styles.galeriaSingle}>
							
						</div>
						<div className={styles.galeriaSingle}>
							
						</div>
					</div>
				</div>
			</div>
			
		</div>
	)
}

export default Sobre