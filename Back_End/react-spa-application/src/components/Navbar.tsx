
const Navbar = () => {

    const scrollview = (id: any) =>
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })

    return (<>
        <div className="bg-black text-white flex justify-between p-3">
            <div>
                <h1>React</h1>
            </div>
            <div className="flex gap-5">
                <button onClick={() => scrollview('home')}>Home</button>
                <button onClick={() => scrollview('about')}>About</button>
                <button onClick={() => scrollview('contact')}>Contact</button>
            </div>
        </div>
    </>)
};

export default Navbar;

