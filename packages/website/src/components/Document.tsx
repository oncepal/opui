import Head from 'next/head';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import DescPNG from '../../public/desc.png';
import UtilsPNG from '../../public/utils.png';
import { App, NavBar, Menu, Container, Text, Col, Row, Button, Switch, Popover } from '@sui/core';
import { ReactNode, useEffect, useState } from 'react';
import Image from 'next/image';
import Layout from './Layout';
type Menu = { icon?: any; title: ReactNode; children?: Menu[] };
type Anchor = { icon?: any; title: ReactNode; children?: Menu[] };
type DocsProps = { menus?: Menu[]; children?: ReactNode; anchors?: Anchor[] };
export default function Docs({ menus, children, anchors }: DocsProps) {
  return (
    <Container main fullHeight>
      <Row>
        <Col flex={1}>
          <Menu>
            {menus.map(v => (
              <Menu.Item></Menu.Item>
            ))}
          </Menu>
        </Col>
        <Col flex={2}>{children}</Col>
        <Col flex={2}>
          {' '}
          {anchors.map(v => (
            <Menu.Item></Menu.Item>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
