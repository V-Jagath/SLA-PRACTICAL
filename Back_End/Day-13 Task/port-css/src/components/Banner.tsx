import profilePic from '../assets/images/LinkedIn-Profile.png'
import '../style/Banner.css'
const Banner = () => {
    const button: string[] = ["Contact", "View Projects"]
    return (<>
        <div className='Banner'>
            <img src={profilePic} alt="Profile" />
            <h1>Creative Frontend Developer</h1>
            <p>Creating modern web experiences that inspire.</p>
            {button.map((button, i) => (
                <div key={i}>
                    <button>{button}</button>
                </div>
            ))}
        </div>
    </>)
};

export default Banner;
