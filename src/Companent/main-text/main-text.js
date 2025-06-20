import './main-text.css'
function Text(props) {
	return (
		<div className='main_text_div_surish'>
		<div className='main_text_div'>
			<p className='savol'>{props.name}?</p>
			<p className='javob'>{props.text}</p>
		</div>
		</div>
	)
}

export default Text