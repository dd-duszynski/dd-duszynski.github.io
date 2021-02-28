import React, { useContext } from 'react'
import { NavLink } from "react-router-dom"
import { NavHashLink } from 'react-router-hash-link';
import styles from './Footer.module.scss'
import FooterItem from './FooterItem/FooterItem'
import Box from '../UI/Box'
import ToTheTop from '../UI/ToTheTop'
import H3 from '../UI/H3'
import gitFull from '../../assets/git_full.svg'
import gitOutline from '../../assets/git_outline.svg'
import linkedinFull from '../../assets/linkedin_full.svg'
import linkedinOutline from '../../assets/linkedin_outline.svg'
import mailFull from '../../assets/mail_full.svg'
import mailOutline from '../../assets/mail_outline.svg'
import { AppContext } from '../../context/context'
import Paragraph from '../UI/Paragraph';

const Footer = () => {
   const { size, textContent } = useContext(AppContext)
   const isHash = i => i.indexOf("#") > 0;
   const largeDevices = (
      <footer className={styles.Footer_Large}>
         <div
            className={styles.container}
         >
            <Box
               addClass={styles.innerBox}
               justify="flex-start"
               align="flex-start"
               column
            >
               <H3 text="Kontakt:" addClass={styles.header} />
               <FooterItem
                  text="linkedin.com/in/dd-duszynski"
                  url="https://www.linkedin.com/in/dd-duszynski"
                  activeIcon={linkedinOutline}
                  icon={linkedinFull}
                  description="linkedin icon"
               />
               <FooterItem
                  text="dd.duszynski@gmail.com"
                  url="mailto:dd.duszynski@gmail.com"
                  activeIcon={mailOutline}
                  icon={mailFull}
                  description="mail icon"
               />
               <FooterItem
                  text="github.com/dd-duszynski"
                  url="https://github.com/dd-duszynski"
                  activeIcon={gitOutline}
                  icon={gitFull}
                  description="github icon"
               />
            </Box>
            <Box
               justify="space-between"
               align="flex-start"
               column
            >
               <H3 text="Menu:" />
               {textContent.navigation.map(item => {
                  if (isHash(item[1])) {
                     return (
                        <NavHashLink
                           key={item[0]}
                           smooth
                           exact to={item[1]}
                           className={styles.footerLink}
                           activeClassName={styles.navLinkActive}
                        >
                           {item[0]}
                        </NavHashLink>
                     )
                  } else {
                     return (
                        <NavLink
                           key={item[0]}
                           exact to={item[1]}
                           className={styles.footerLink}
                           activeClassName={styles.navLinkActive}
                        >
                           {item[0]}
                        </NavLink>
                     )
                  }
               })
               }
            </Box>
            <Box
               justify="space-between"
               align="flex-end"
               column
            >
               <ToTheTop />
               <Paragraph text="© Damian Duszyński 2021" addClass={styles.copyright} />
            </Box>
         </div>
      </footer>
   )

   const smallDevice = (
      <footer className={styles.Footer}>
         <Box
            addClass={styles.smallDevice}
            justify="space-between"
            align="center"
         >
            <FooterItem
               url="https://www.linkedin.com/in/dd-duszynski"
               activeIcon={linkedinOutline}
               icon={linkedinFull}
               description="linkedin icon"
            />
            <FooterItem
               url="mailto:dd.duszynski@gmail.com"
               activeIcon={mailOutline}
               icon={mailFull}
               description="mail icon"
            />
            <FooterItem
               url="https://github.com/dd-duszynski"
               activeIcon={gitOutline}
               icon={gitFull}
               description="github icon"
            />
         </Box>
      </footer>
   )
   return (
      size >= 800 ? largeDevices : smallDevice
   )
}

export default Footer
