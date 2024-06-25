import { OPUIProvider, Text, Button, BottomNavigation, Container, NavBar, Row, Col, Grid, List } from '@opui/react';
import { SetStateAction, useState } from 'react';
import type { Theme } from '@opui/react';
import { linkToRoute } from '@oncepal/utils';
export default function NewPalNeed() {
 
  const [activeItem, setActiveItem] = useState('首页');
    const handleClickBackToHomeButton = ()=>{
        linkToRoute('/')
    }
  return (
      <Container main fullScreen background={'#fafafa'}>
       111
       <Button onClick={handleClickBackToHomeButton}>x</Button>
      </Container>
   
  );
}
