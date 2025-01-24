const Button = ({ text, onClick }) => {
  return (
    <button
      className="py-2 px-4 inline-block bg-blue-500 text-white font-bold rounded-xl cursor-pointer"
      onClick={onClick}
    >{text}</button>
  )
}

export default Button