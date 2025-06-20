import './main-cards.css'
function Maincards(props) {
	return (
		<div className='cards'>
			<div>
				<i class={props.iconca}></i>
				<h4>{props.name}</h4>
				<p>{props.text}</p>
			</div>
		</div>
	)
}
export default Maincards