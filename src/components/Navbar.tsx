
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between py-4'>
      {/* Left side - Links */}
      <div className='flex items-center gap-6 text-base font-medium'>
        <Link to="/" className='hover:text-blue-600 transition-colors duration-200'>
          Shop
        </Link>
      </div>

      {/* Right side - Cart icon */}
      <div className='flex items-center'>
        <Link
          to="/cart"
          className='relative text-neutral-700 hover:text-blue-600 transition-colors duration-200'
        >
          <FaShoppingCart size={28} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
