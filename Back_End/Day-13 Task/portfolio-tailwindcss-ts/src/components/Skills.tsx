import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import bootstrap from '../assets/images/bootstrap.png'
import javascript from '../assets/images/js.png'
import typescript from '../assets/images/ts.png'

const Skills = () => {

    interface KnowSkills {
        img: any,
        skill: string,
        description: string,
    }

    const skill: KnowSkills[] = [
        { img: html, skill: "HTML5", description: "Semantic structure & clean markup" },
        { img: css, skill: "CSS3", description: "Responsive design & animation" },
        { img: bootstrap, skill: "Bootstrap 5", description: "UI components & grid system markup" },
        { img: javascript, skill: "Java Script ES6+", description: "Dynamic & interactive web apps" },
        { img: typescript, skill: "TypeScript", description: "find a runtime error and its used js" },
    ];

    return (<>

        <div className='bg-blue-600 p-5'>
            <h1 className='text-center text-white text-3xl text-bolder'>Technical Skills</h1>
            <div className='flex p-5 justify-around'>
                {skill.map((e, i) => (
                    <div key={i} className='bg-gray-800 rounded-2xl text-white flex flex-col  gap-3 justify-center items-center text-center h-50 w-50 p-5'>
                        <div>
                            <img src={e.img} className='w-20 h-20 rounded' alt="img" />
                        </div>
                        <h1>{e.skill}</h1>
                        <h3>{e.description}</h3>
                    </div>
                ))}
            </div>
        </div>

    </>)
};

export default Skills;
