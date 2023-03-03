import { Container } from '@sui/core';

const Footer = () => {
  return (
    <Container
      footer
      w='100%'
      h='15em'
      background={theme => {
        console.log('darkMode', theme.darkMode);

        return theme.colors.black;
      }}>
      footer
    </Container>
  );
};

export default Footer;
