import NewConceptImage from '../assets/images/Projects/NewConcept/LandingPage1.png';
import NasaAppImage from '../assets/images/Projects/ReactNasaApp/Landing.png';
import DevsQuizImage from '../assets/images/Projects/DevsQuiz/DevsQuizImage.png';
import { technologies } from './technologies';

const reactTech = technologies.find(tech => tech.name === 'React');
const reduxTech = technologies.find(tech => tech.name === 'Redux');
const materialTech = technologies.find(tech => tech.name === 'Material UI');
const nodeTech = technologies.find(tech => tech.name === 'NodeJS');
const mongoTech = technologies.find(tech => tech.name === 'MongoDB');
const MySQLTech =  technologies.find(tech => tech.name === 'MySQL');


export const projects = [
    { name: 'New Concept Gym', image: NewConceptImage, link: '/newconcept', projectTechs: [reactTech, materialTech, nodeTech, MySQLTech] },
    { name: 'DevsQuiz', image: DevsQuizImage, link: '/devsquiz', projectTechs: [reactTech, materialTech, nodeTech, mongoTech] },
    { name: 'React Nasa App', image: NasaAppImage, link: '/reactnasaapp', projectTechs: [reactTech, reduxTech, materialTech] }
    
]