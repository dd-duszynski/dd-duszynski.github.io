import Image from 'next/image';
import { BsKanban } from 'react-icons/bs';
import { CgFigma } from 'react-icons/cg';
import { DiSass, DiScrum, DiTrello } from 'react-icons/di';
import { FaGitAlt, FaReact } from 'react-icons/fa';
import { GiPencilBrush } from 'react-icons/gi';
import { GrGatsbyjs, GrMysql, GrNode } from 'react-icons/gr';
import { MdDevices } from 'react-icons/md';
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiAffinitydesigner,
  SiAffinitypublisher,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMicrosoftexcel,
  SiRedux,
  SiTypescript,
  SiVisualstudiocode,
} from 'react-icons/si';
import Express from '../../public/icons/express.svg';
import Illustrator from '../../public/icons/illustrator.svg';
import { SiNextdotjs } from 'react-icons/si';

const SwitchIcon = ({ name }: { name: string }) => {
  let icon;
  switch (name) {
    case 'JavaScript':
      icon = <SiJavascript />;
      break;
    case 'HTML':
      icon = <SiHtml5 />;
      break;
    case 'CSS':
      icon = <SiCss3 />;
      break;
    case 'Sass':
      icon = <DiSass />;
      break;
    case 'TypeScript':
      icon = <SiTypescript />;
      break;
    case 'React':
      icon = <FaReact />;
      break;
    case 'Redux':
      icon = <SiRedux />;
      break;
    case 'Gatsby':
      icon = <GrGatsbyjs />;
      break;
    case 'Next':
      icon = <SiNextdotjs />;
      break;
    case 'Node':
      icon = <GrNode />;
      break;
    case 'Express':
      icon = <Image src={Express} alt='express' width={30} height={30} />;
      break;
    case 'MySQL':
      icon = <GrMysql />;
      break;
    case 'Git':
      icon = <FaGitAlt />;
      break;
    case 'VSC':
      icon = <SiVisualstudiocode />;
      break;
    // Design
    case 'UX Design':
      icon = <MdDevices />;
      break;
    case 'UI Design':
      icon = <GiPencilBrush />;
      break;
    case 'Adobe XD':
      icon = <SiAdobexd />;
      break;
    case 'Adobe Photoshop':
      icon = <SiAdobephotoshop />;
      break;
    case 'Adobe Illustrator':
      icon = <Image src={Illustrator} alt='illustrator' width={30} />;
      break;
    case 'Figma':
      icon = <CgFigma />;
      break;
    case 'Affinity Designer':
      icon = <SiAffinitydesigner />;
      break;
    case 'Affinity Publisher':
      icon = <SiAffinitypublisher />;
      break;
    // Others
    case 'Scrum':
      icon = <DiScrum />;
      break;
    case 'Kanban':
      icon = <BsKanban />;
      break;
    case 'Trello':
      icon = <DiTrello />;
      break;
    case 'Excel':
      icon = <SiMicrosoftexcel />;
      break;
    default:
      icon = <SiRedux />;
  }
  return icon;
};

export default SwitchIcon;
