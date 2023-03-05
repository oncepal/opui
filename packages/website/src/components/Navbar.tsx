import Link from 'next/link';
import { NavBar, Sidebar, Container, Text, Col, Row, Button, Switch, Popover, Tag, Icon } from '@sui/core';
import github from '../../public/github.svg';
import discord from '../../public/discord.svg';
import heart from '../../public/heart.svg'
const navigation = [
  { title: 'Guide', menus: [{ title: 'intro', link: 'docs/intro' }] },
  { title: 'Components', link: 'components', menus: [{ title: 'Button', link: 'docs/button' }] },
  { title: 'Blog', link: 'blog', menus: [] },
];
const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <NavBar
      sticky
      hideOnScroll
      css={theme => ({
        padding: '1em 22vw',
        backdropFilter: 'saturate(180%) blur(10px)',
        background: 'transparent',
        boxShadow: theme.shadows.xs,
      })}>
      <NavBar.Brand>
        <Link href={'/'}>
          <Text span size={'2em'}>
            ShitUI
          </Text>
        </Link>
        <Tag rounded css={{ marginLeft: '.5em', marginTop: '.2em' }}>
          <Text size={'.5em'} white blod>
            BETA
          </Text>
        </Tag>
      </NavBar.Brand>
      <NavBar.Content>
        <Row justify='center'>
          {navigation.map(v => (
            <Col pa='1em'>
              <Button text>
                <Text>{v.title}</Text>
              </Button>
            </Col>
          ))}
        </Row>
      </NavBar.Content>
      <NavBar.Extra>
        <Row justify='end' align='center' gap='.5em'>
 <Icon src={discord.src} />
        <Icon src={github.src} />
        <Switch textOn='暗' textOff='明' on={darkMode} onChange={() => setDarkMode(v => !v)} />
        <Button color={theme=>theme.darkMode?theme.colors.grey:theme.colors.greyLight}><Icon  color={theme=>theme.colors.red} src={heart.src} /> <Text span>财务捐助</Text></Button>
        </Row>
       
      </NavBar.Extra>
    </NavBar>
  );
};

export default Navbar;
