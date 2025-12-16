import profilePic from '../assets/images/LinkedIn-Profile.png'

const Banner = () => {
    const button: string[] = ["Contact", "View Projects"]
    return (<>
        <div className='bg-blue-900 text-white h-100 flex justify-center items-center flex-col gap-2'>
            <img className='w-30 rounded-full' src={profilePic} alt="Profile" />
            <h1>Creative Frontend Developer</h1>
            <p>Creating modern web experiences that inspire.</p>
            {button.map((button, i) => (
                <div className=''>
                    <button key={i} className='p-1 w-40 font-bold hover:bg-gray-900 hover:text-white rounded-2xl bg-white text-blue-900'>{button}</button>
                </div>
            ))}
        </div>
    </>)
};

export default Banner;
