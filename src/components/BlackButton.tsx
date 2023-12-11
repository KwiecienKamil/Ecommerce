type ButtonType = {
    children: React.ReactNode;
    classname?: string
    onClick? : () => void
}

const BlackButton = ({children, classname}: ButtonType)  => {
  return (
    <button onClick={() => {}} className={`py-2 px-2 bg-black text-white rounded-md shadow-md hover:opacity-75 ${classname}`}>
      <h1>{children}</h1>
    </button>
  )
}

export default BlackButton
