import { NavBar, Text } from '@opui/react';
type AppBarProps = {
    title:string
}
const AppBar = ({title}:AppBarProps) => (
  <NavBar fixed isBordered>
    <NavBar.Brand />
    <NavBar.Content>
      <Text blod>{title}</Text>
    </NavBar.Content>
    <NavBar.Actions />
  </NavBar>
);
export default AppBar;
