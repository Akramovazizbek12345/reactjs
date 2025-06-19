import './header.css';
function Header(props) {
	return (
		<>
		{/* <div className='divi'></div> */}
			<h3>{props.name}</h3>
			<a href="e">{props.a}</a>
			<p>{props.p}</p>
		</>
	)
}

export default Header