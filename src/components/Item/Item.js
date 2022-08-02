import './item.css';
export const Item = ({ img, text }) => {
	return (
		<li className='item'>
			<img className='item-img' alt=' img' src={img} />
			<p className='item-text'>{text}</p>
		</li>
	);
};
