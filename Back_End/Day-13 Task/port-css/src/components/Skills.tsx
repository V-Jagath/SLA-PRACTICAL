import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import bootstrap from '../assets/images/bootstrap.png'
import javascript from '../assets/images/js.png'
import typescript from '../assets/images/ts.png'
import '../style/skills.css'
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
        { img: typescript, skill: "TypeScript", description: "find a runtime error" },
    ];

    return (<>

        <div className='Skills'>
            <h1>Technical Skills</h1>
            <div className='Tech-skill'>
                {skill.map((e, i) => (
                    <div key={i} className='Skill-card'>
                        <div>
                            <img src={e.img} alt="img" />
                        </div>
                        <h3>{e.skill}</h3>
                        <h5>{e.description}</h5>
                    </div>
                ))}
            </div>
        </div>

    </>)
};

export default Skills;
