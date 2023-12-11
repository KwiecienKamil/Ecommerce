
import {BsSearch} from 'react-icons/bs'
import BlackButton from './BlackButton'

const Searchbar = () => {
  return (
    <div className="flex items-center">
          <input type="text" placeholder='T-shirt...' className="outline outline-black outline-1 rounded-l-lg py-[2px] pl-4"/>
          <BlackButton classname="rounded-sm py-[7px] mb-[.5px]"><BsSearch /></BlackButton>
        </div>
  )
}

export default Searchbar
