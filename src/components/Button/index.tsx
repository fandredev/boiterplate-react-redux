interface Props<T> {
  value?: T
  type?: T
}


export const Button: React.FC<Props<string>> = ({ type = 'submit', value = 'Login' }) =>
  <input type={type} className="btn" value={value} />
