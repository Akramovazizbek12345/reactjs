import './Main.css'
import Maincards from '../main-cards/main-cards'
function Main() {
	return(
		<div >
			<p className='main_text_katta'>The best place to tell people why they are here</p>
			<p className='main_p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Non aliquid corrupti debitis nobis <br /> Lorem ipsum dolor sit amet consectetur.</p>
			<p className='main_cards_text'>Reasons to use this template</p>
			<div className='cards-div'>
			<Maincards iconca='fa-solid fa-gears fa-shake' name='Bootstrap-powered' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolore in quia, cupiditate quaerat rem cum quis necessitatibus, repudiandae debitis consequatur nemo,' />
						<Maincards iconca='fa-solid fa-bolt fa-beat-fade' name='Fat-free' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolore in quia, cupiditate quaerat rem cum quis necessitatibus, repudiandae debitis consequatur nemo,' />
									<Maincards iconca='fa-solid fa-heart fa-beat' name='Creative Commons' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolore in quia, cupiditate quaerat rem cum quis necessitatibus, repudiandae debitis consequatur nemo,' />
												<Maincards iconca='fa-regular fa-face-smile fa-bounce' name="Author's support" text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolore in quia, cupiditate quaerat rem cum quis necessitatibus, repudiandae debitis consequatur nemo,' />
												</div>
		</div>
	)
}

export default Main