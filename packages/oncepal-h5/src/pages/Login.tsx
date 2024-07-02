import { OPUIProvider, Text, Button, BottomNavigation, Container, NavBar, Row, Col, Grid, List } from '@opui/react';
import { SetStateAction, useState } from 'react';
import type { Theme } from '@opui/react';
import { fetchGet, fetchPost } from '../server/htttp';
import { useNavigate, useParams } from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate();
  let { nextPath } = useParams();
  const [activeItem, setActiveItem] = useState('首页');
  const handleClickPalNeed = (needId: string) => {
    navigate(nextPath || '/');
  };
  return <Container main pa='2em' fullScreen css={theme => ({
    background: theme.colors.lightBackground,
    
  })}>
<NavBar fixed>
    <NavBar.Brand />
    <NavBar.Content>

    </NavBar.Content>
    <NavBar.Actions />
  </NavBar>

  </Container>;
}
