import { OPUIProvider, Text, Button, BottomNavigation, Container, NavBar, Row, Col, Grid, List } from '@opui/react';
import { SetStateAction, useState } from 'react';
import type { Theme } from '@opui/react';
import {
  RouterProvider,
} from "react-router-dom";
import router from './routers';
import { Link } from "react-router-dom";

export default function App() {
  const [customTheme, setCustomTheme] = useState<Partial<Theme>>({
    colors: {
      primary: '#C80036',
    },
    darkMode: false,
  });
 

  return (
    <OPUIProvider customTheme={customTheme}>
      <RouterProvider router={router} />
      
    </OPUIProvider>
  );
}
