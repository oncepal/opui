import Head from 'next/head';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import DescPNG from '../../public/desc.png';
import UtilsPNG from '../../public/utils.png';
import { App, NavBar, Container, Text, Col, Row, Button, Switch, Popover, Sidebar } from '@sui/core';
import { ReactNode, useEffect, useState } from 'react';
import Image from 'next/image';
import Layout from './Layout';

type Menu = { icon?: any; title: ReactNode;href:string, children?: Menu[] };
type Anchor = { icon?: any; title: ReactNode; children?: Menu[] };
type DocsProps = { menus?: Menu[]; children?: ReactNode; anchors: Anchor[] };
const linkStyles = {color:'inherit',background:'inherit'}
export default function Docs({ menus, children, anchors }: DocsProps) {
  const [selectComponentIndex,setSelectComponentIndex] = useState(0)
  return (
    <Container main fullHeight css={{
      maxWidth:'1200px',
      margin:'0 auto'
    }}>
      <Row>
        <Col>
          <Sidebar selectedIndex={selectComponentIndex} onSelect={i=>setSelectComponentIndex(i)}>
            {menus.map(v => (
              <Sidebar.Item css={{
                fontSize:'1.2em'
              }}><Link href={v.href} style={linkStyles}>{v.title}</Link></Sidebar.Item>
            ))}
          </Sidebar>
        </Col>
        <Col flex={2}>{children}</Col>
        <Col flex={1}>
          {/* <Sidebar>
            {anchors.map(v => (
              <Sidebar.Item>{v?.title}</Sidebar.Item>
            ))}
          </Sidebar> */}
        </Col>
      </Row>
    </Container>
  );
}
