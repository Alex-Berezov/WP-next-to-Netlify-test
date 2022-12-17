import useSite from 'hooks/use-site';

import Section from 'components/Section';
import Container from 'components/Container';

import styles from './Footer.module.scss';

const Footer = () => {
  const { metadata = {} } = useSite();
  const { title } = metadata;

  return (
    <footer className={styles.footer}>
      <Section className={styles.footerLegal}>
        <Container>
          <p>
            &copy; 2022 - {new Date().getFullYear()} {title}
          </p>
        </Container>
      </Section>
    </footer>
  );
};

export default Footer;
