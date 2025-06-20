import './Navbar.css'
function Navbar() {
	return (
		<div className='navbar'>
			<img src="/images/logo.png" alt="" />
			<div className='navbar_divi'>
			<a href="a" className='activ'>Home</a>
			<a href="z">About</a>
			<select name="page" id="">
				<option value="">Page</option>
				<option value="">Page-1</option>
				<option value="">Page-1</option>
			</select>
			<a href="i">Contact</a>
			<div>sign in / sign up</div>
			</div>
		</div>
	)
}

export default Navbar