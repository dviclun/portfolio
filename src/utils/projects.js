import NewConceptImage from '../assets/images/Projects/NewConcept/LandingPage1.png';
import NasaAppImage from '../assets/images/Projects/ReactNasaApp/Dashboard.png';
import { technologies } from './technologies';

const reactTech = technologies.find(tech => tech.name === 'React');
const reduxTech = technologies.find(tech => tech.name === 'Redux');
const materialTech = technologies.find(tech => tech.name === 'Material UI');
const nodeTech = technologies.find(tech => tech.name === 'NodeJS');

export const projects = [
    {name: 'New Concept Gym', image: NewConceptImage, link: '/newconcept', projectTechs: [reactTech, materialTech, nodeTech]},
    {name: 'React Nasa App', image: NasaAppImage, link: '/reactnasaapp', projectTechs: [reactTech, reduxTech, materialTech] }
]