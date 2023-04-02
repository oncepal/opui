import { Container, Text, Row, Col, Divider } from '@sui/core';

const Footer = () => {
  return (
    <Container
      footer
      w='100%'
      h='15em'
      background={theme => {
    

        return theme.darkMode ? theme.colors.white : theme.colors.black;
      }}>
      <Row justify='center' pa='3em'>
        <Col>
          {' '}
          <Text
            size={'2em'}
            color={theme => {
         

              return theme.darkMode ? theme.colors.black : theme.colors.white;
            }}>
            Supported By WebCypher
          </Text>
          <Divider my='2em' />
          <Text
            color={theme => {
              return theme.darkMode ? theme.colors.grey : theme.colors.white;
            }}>
            Copyright 2023 WebCypher | Privacy Policy
          </Text>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
