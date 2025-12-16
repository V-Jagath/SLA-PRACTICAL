const NavBar = () => {

    const link: string[] = ["Home", "About", "Skills", "Project", "Contact"]

    return (<>
        <div className="bg-blue-700 text-white font-bold font-serif p-3 flex justify-between">

            <div>
                <h1>Jagathratchagan V</h1>
            </div>

            <div className="flex gap-5 justify-between">
                {link.map((e, i) => (
                    <a key={i} className="hover:bg-gray-800 text-white rounded-2xl w-20 text-center" href="">{e}</a>
                ))}
            </div>

        </div>
    </>)
};

export default NavBar;
