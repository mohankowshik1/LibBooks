import Header from '../components/Header'
import logo from "../assets/logo.jpg"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
   <>
   <Header />
   <div className="home-hero">
    <img src={logo} alt="LIB books logo" className='w-3/5 md:w-1/3 mx-auto' />
    <div className='text-center px-20 py-5 text-lg font-semibold'>
        Explore Resources and reference materials within the click of a button
    </div>
    <div className="home-hero-cta flex justify-center items-center p-5">
        <Link to={"/discover"}>
        <button className='px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-800 h-auto font-semibold'>
            Get started
        </button>
        </Link>
    </div>
   </div>
   </>
  )
}

export default Home