import React from 'react'
import { GrGatsbyjs, GrNode, GrMysql } from 'react-icons/gr';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { SiRedux, SiMaterialUi, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';
import { BsKanban } from 'react-icons/bs';
import { DiScrum, DiTrello, DiSass } from 'react-icons/di';
import { GiPencilBrush } from 'react-icons/gi';
import { CgFigma } from 'react-icons/cg';
import Express from '../../assets/icons/express.svg';
import Illustrator from '../../assets/icons/illustrator.svg';
import { MdDevices } from 'react-icons/md';
import { SiAdobexd, SiAdobephotoshop, SiAffinitydesigner, SiAffinitypublisher, SiVisualstudiocode, SiMicrosoftexcel } from 'react-icons/si';

const SwitchIcon = ({ name }) => {
   let icon;
   switch (name) {
      case 'JavaScript':
         icon = <SiJavascript />
         break
      case 'HTML':
         icon = <SiHtml5 />
         break
      case 'CSS':
         icon = <SiCss3 />
         break
      case 'Sass':
         icon = <DiSass />
         break
      case 'Material UI':
         icon = <SiMaterialUi />
         break
      case 'React':
         icon = <FaReact />
         break
      case 'Redux':
         icon = <SiRedux />
         break
      case 'Gatsby':
         icon = <GrGatsbyjs />
         break
      case 'Node':
         icon = <GrNode />
         break
      case 'Express':
         icon = <img src={Express} alt="express"/>
         break
      case 'MySQL':
         icon = <GrMysql />
         break
      case 'Git':
         icon = <FaGitAlt />
         break
      case 'VSC':
         icon = <SiVisualstudiocode />
         break
      // Design
      case 'UX Design':
         icon = <MdDevices />
         break
      case 'UI Design':
         icon = <GiPencilBrush />
         break
      case 'Adobe XD':
         icon = <SiAdobexd />
         break
      case 'Adobe Photoshop':
         icon = <SiAdobephotoshop />
         break
      case 'Adobe Illustrator':
         icon = <img src={Illustrator} alt="illustrator"/>
         break
      case 'Figma':
         icon = <CgFigma />
         break
      case 'Affinity Designer':
         icon = <SiAffinitydesigner />
         break
      case 'Affinity Publisher':
         icon = <SiAffinitypublisher />
         break
      // Others
      case 'Scrum':
         icon = <DiScrum />
         break
      case 'Kanban':
         icon = <BsKanban />
         break

      case 'Trello':
         icon = <DiTrello />
         break
      case 'Excel':
         icon = <SiMicrosoftexcel />
         break
      default:
         icon = <SiRedux />
   }
   return icon
}

export default SwitchIcon
