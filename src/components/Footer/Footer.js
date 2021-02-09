import React from 'react'
import styles from './Footer.module.scss'
import FooterItem from './FooterItem/FooterItem'
import Box from '../UI/Box'
import gitFull from '../../assets/git_full.svg'
import gitOutline from '../../assets/git_outline.svg'
import linkedinFull from '../../assets/linkedin_full.svg'
import linkedinOutline from '../../assets/linkedin_outline.svg'
import mailFull from '../../assets/mail_full.svg'
import mailOutline from '../../assets/mail_outline.svg'

const Footer = () => {
   return (
      <footer className={styles.Footer}>
         <Box 
            addClass={styles.box}
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
      </footer>
   )
}

export default Footer
