import { OPUIProvider, Text, Button, BottomNavigation, Container, NavBar, Row, Col, Grid, List } from '@opui/react';
import { SetStateAction, useState } from 'react';
import type { Theme } from '@opui/react';
import { Routes, Route, useParams } from 'react-router-dom';
export default function Login() {
  let { needId } = useParams();
  const [activeItem, setActiveItem] = useState('首页');

  return (
      <Container main fullScreen background={'#fafafa'}>
       
      </Container>
   
  );
}
