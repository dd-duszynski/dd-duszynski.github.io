'use client';

import { BsKanban } from 'react-icons/bs';
import { CgFigma } from 'react-icons/cg';
import { DiSass, DiScrum, DiTrello } from 'react-icons/di';
import { FaBootstrap, FaFileImage, FaGitAlt, FaReact } from 'react-icons/fa';
import { FaBusinessTime } from 'react-icons/fa6';
import { GiPencilBrush } from 'react-icons/gi';
import { GrGatsbyjs, GrMysql, GrNode } from 'react-icons/gr';
import { ImLab } from 'react-icons/im';
import { IoIosPrint } from 'react-icons/io';
import { LiaProjectDiagramSolid } from 'react-icons/lia';
import { MdDesignServices, MdDevices } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiAffinitydesigner,
  SiAffinitypublisher,
  SiCheckmarx,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMicrosoftexcel,
  SiMicrosoftsharepoint,
  SiNextdotjs,
  SiNotion,
  SiRedux,
  SiSonarcloud,
  SiTestinglibrary,
  SiTypescript,
  SiVisualstudiocode,
} from 'react-icons/si';
import { Tooltip } from 'react-tooltip';
// import Express from '../../public/icons/express.svg';
import { SiExpress } from 'react-icons/si';

interface SwitchIconProps {
  name: string;
  withTooltip: boolean;
}

const SwitchIcon = ({ name, withTooltip }: SwitchIconProps) => {
  let icon;
  const tooltipId = name.replace(/\s/g, '');
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
      // icon = <Image src={Express} alt='express' width={30} height={30} />;
      icon = <SiExpress />;
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
      // icon = <SiAdobephotoshop />;
      break;
    case 'Adobe Illustrator':
      icon = <SiAdobeillustrator />;
      // icon = <Image src={Illustrator} alt='illustrator' width={30} />;
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
    case 'Bootstrap':
      icon = <FaBootstrap />;
      break;
    case 'Sharepoint':
      icon = <SiMicrosoftsharepoint />;
      break;
    case 'Jest':
      icon = <SiJest />;
      break;
    case 'Checkmarx':
      icon = <SiCheckmarx />;
      break;
    case 'React Testing Library':
      icon = <SiTestinglibrary />;
      break;
    case 'SonarCloud':
      icon = <SiSonarcloud />;
      break;
    case 'Research and Development':
      icon = <ImLab />;
      break;
    case 'Digital Printing':
      icon = <IoIosPrint />;
      break;
    case 'Business Analysis':
      icon = <FaBusinessTime />;
      break;
    case 'Project Management':
      icon = <LiaProjectDiagramSolid />;
      break;
    case 'Team Management':
      icon = <RiTeamFill />;
      break;
    case 'DTP':
      icon = <FaFileImage />;
      break;
    case 'Graphic Design':
      icon = <MdDesignServices />;
      break;
    case 'Notion':
      icon = <SiNotion />;
      break;
    default:
      icon = <SiRedux />;
  }

  if (!withTooltip) {
    return icon;
  }

  return (
    <>
      <span id={tooltipId}>{icon}</span>
      <Tooltip
        anchorSelect={`#${tooltipId}`}
        place='top'
        style={{
          backgroundColor: '#90ee90',
          color: '#000',
          fontWeight: 500,
          fontSize: '1.2rem',
          marginTop: '-2.5rem',
        }}
      >
        {name}
      </Tooltip>
    </>
  );
};

export default SwitchIcon;
