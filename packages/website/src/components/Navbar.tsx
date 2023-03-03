import Link from 'next/link';
import { NavBar, Sidebar, Container, Text, Col, Row, Button, Switch, Popover } from '@sui/core';

const navigation = [
  { title: 'Guide', menus: [{ title: 'intro', link: 'docs/intro' }] },
  { title: 'Components', link: 'components', menus: [{ title: 'Button', link: 'docs/button' }] },
  { title: 'Blog', link: 'blog', menus: [] },
];
const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <NavBar
      hideOnScroll
      css={theme => ({
        position: 'sticky',
        top: 0,
        padding: '1em',
        backdropFilter: 'saturate(180%) blur(10px)',
        background: 'transparent',
        boxShadow: theme.shadows.xs,
      })}>
      <NavBar.Brand>
        <Link href={'/'}>
          <Text h1 size={'2em'}>
            Shit UI
          </Text>
        </Link>
      </NavBar.Brand>
      <NavBar.Content>
        <Row>
          {navigation.map(v => (
            <Popover>
              <Popover.Trigger>
                <Col pa='1em'>
                  <Button text>
                    <Text>{v.title}</Text>
                  </Button>
                </Col>
              </Popover.Trigger>

              <Popover.Content>
                <Container
                  pa='1em'
                  css={theme => ({
                    boxShadow: theme.shadows.xm,
                  })}>
                  {v.menus.map(m => {
                    return (
                      <Button>
                        <Link href={m.link}>{m.title}</Link>
                      </Button>
                    );
                  })}
                </Container>
              </Popover.Content>
            </Popover>
          ))}
        </Row>
      </NavBar.Content>
      <NavBar.Extra>
        <Switch textOn='暗' textOff='明' on={darkMode} onChange={() => setDarkMode(v => !v)} />
      </NavBar.Extra>
    </NavBar>
  );
};

export default Navbar;
