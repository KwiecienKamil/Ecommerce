type ButtonType = {
    children: React.ReactNode;
    classname?: string
    onClick? : () => void
}

const BlackButton = ({children, classname, onClick,}: ButtonType)  => {
  return (
    <button onClick={onClick} className={`py-2 px-2 bg-accent text-black rounded-md shadow-md hover:bg-orange-400 duration-300 ${classname}`}>
      <h1>{children}</h1>
    </button>
  )
}

export default BlackButton
