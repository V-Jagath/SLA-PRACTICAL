import '../style/NavBar.css'

const NavBar = () => {

    const link: string[] = ["Home", "About", "Skills", "Project", "Contact"]

    return (<>
        <div className="Nav">

            <div>
                <h1>Jagathratchagan V</h1>
            </div>

            <div className="Link">
                {link.map((e, i) => (
                    <a key={i} className="" href="">{e}</a>
                ))}
            </div>

        </div >
    </>)
};

export default NavBar;
