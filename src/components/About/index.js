import AnimatedLetters from '../animatedLetters';
import './index.scss'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faGitAlt, faAws, faReact, faJsSquare, faRaspberryPi } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
  
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15} />
                    </h1>
                    <p>
                        I am a high school student in year 12 at cherry creek high school.
                        I moved 14,116Km away from my family at 16 to pursue a more
                        computer-science-oriented education. I have participated in a number
                        of programs such as; the Lockheed Martin Career Launch Program, A
                        student internship at Accenture Australia, and completed then
                        automated Google's "Foobar" hiring challenge.
                    </p>
                    <p>
                        I'm a very ambitious developer looking for a role in an
                        an IT company for the opportunity to further my education
                        and learn how to work with  and utilise the latest
                        technologies.
                    </p>
                    <p>
                        I'm very confident, naturally curious, and perpetually working on
                        improving my skills one problem at a time.
                    </p>
                </div>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faPython} color="#ffd343" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faRaspberryPi} color="#bc1142
" />
                    </div> 
                    <div className="face3">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faAws} color="#FF9900" />
                    </div>
                    
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#c9510c" />
                    </div>
                </div>
            </div>
        <Loader type="pacman" />
    </>
    );
}

export default About