import Head from 'next/head';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import DescPNG from '../../public/desc.png';
import UtilsPNG from '../../public/utils.png';
import { App, NavBar, Sidebar, Container, Text, Col, Row, Button, Switch, Popover } from '@sui/core';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Layout from './Layout';
export default function Docs() {
  return (
    <Container main fullHeight>
      <Row>
        <Col flex={1}>1</Col>
        <Col flex={2}>2</Col>
        <Col flex={2}>3</Col>
      </Row>
    </Container>
  );
}
