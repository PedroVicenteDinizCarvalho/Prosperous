import logo from '../../images/logo.png';
const Loader = () => {
    return (
        <div className="flex justify-center items-center py-3">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-700">
                <img src={logo} alt="Logo" className='w-48 cursor-pointer py-10'/>
            </div>
        </div>
    );
}

export default Loader;