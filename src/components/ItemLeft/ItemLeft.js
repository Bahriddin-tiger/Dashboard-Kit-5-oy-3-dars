import './item.css';
export const ItemLeft = ({ text, num }) => {
	return (
		<li className='itemLeft'>
			<p className='ltext'>{text}</p>
			<strong className='number'>{num}</strong>
		</li>
	);
};
