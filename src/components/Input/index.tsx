

interface Props {
  icon: string
  typeInput?: string
  className: string
  placeholder: string
}

const Input: React.FC<Props> = ({ placeholder, icon, typeInput = 'text', className } ) => {
	return (
		<div className={`input-div ${className}`}>
			<div className="i">
				<i className={`fas fa-${icon}`}></i>
			</div>
			<div className="div">
				<input type={typeInput} className="input" placeholder={placeholder}/>
			</div>
		</div>
	);
};

export default Input;
