import Box from '../box/box';
import Paragraph from '../paragraph/paragraph';
import { ScrollToTopButton } from '../scroll-to-top-button/scroll-to-top-button';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footerLarge}>
      <div className={styles.container}>
        <Box justify='space-between' align='center' direction='row'>
          <Paragraph
            text='© Damian Duszyński 2024'
            addClass={styles.copyright}
          />
          <ScrollToTopButton />
        </Box>
      </div>
    </footer>
  );
};
