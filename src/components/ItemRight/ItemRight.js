import './ItemRighr.css';
export const ItemRight = ({ text, all }) => {
	return (
		<li className='itemR'>
			<input className='ItemInput' type='checkbox' />
			<p className='ItemRText'>{text}</p>
			<button className='ItemButton'>{all}</button>
		</li>
	);
};
