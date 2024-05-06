import { OPUIProvider, Button, Container, NavBar, Row, Col, Grid } from '@opui/react';
export default function App() {
  return (
    <OPUIProvider>
      <Container main fullScreen background={'#fafafa'}>
        <NavBar fixed>
          <NavBar.Brand />
          <NavBar.Content>title</NavBar.Content>
          <NavBar.Extra />
        </NavBar>
        <Container section fullScreen px='1.5em'>
          <Grid
            col={3}
            css={theme => ({
              minHeight: 'inherit',
            })}>
            <Grid.Item pa='4em'> Make beautiful websites regardless of your design experience.</Grid.Item>
            <Grid.Item pa='4em' span='2'>
              {' '}
              components
            </Grid.Item>
          </Grid>
        </Container>
      </Container>
    </OPUIProvider>
  );
}
