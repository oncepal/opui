import {
  OPUIProvider,
  Text,
  Button,
  CheckBox,
  Container,
  NavBar,
  Row,
  Col,
  Grid,
  List,
  Icon,
  Input,
} from '@opui/react';
import { ChangeEvent, SetStateAction, useState } from 'react';
import type { Theme } from '@opui/react';
import { useGet, usePost } from '../server/htttp';
import { useNavigate, useParams } from 'react-router-dom';
import { login } from '../server/auth';
export default function Login() {
  const navigate = useNavigate();
  let { nextPath } = useParams();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validCode, setValidCode] = useState('');
  const handleClickPalNeed = (needId: string) => {
    navigate(nextPath || '/');
  };
  const handleClickClose = () => {};
  const handlePhoneNumberInputChange = (v: string) => {
    setPhoneNumber(v);
  };
  const handleValidCodeInputChange = (v: string) => {
    setValidCode(v);
  };

  const handleLogin = async ()=>{
    const result = await login({})
  }
  return (
    <Container main pa='2em' fullScreen>
      <Icon size={'2rem'} type='close' onClick={handleClickClose} />
      <Container px='.4em'>
        <Row vertical py='1em'>
          <Col leftText>
            <Text blod size={'1.6rem'}>
              短信验证码登录
            </Text>
          </Col>
          <Col leftText py='.5em'>
            <Text color={theme => theme.colors.lightGreyText!}>未注册手机验证后自动登录</Text>
          </Col>
        </Row>

        <Container>
          <Input
            contentStyle={theme => ({
              borderBottom: '1px solid ' + theme.colors.lightScrim,
            })}
            closable
            prefix={
              <Container width='3em'>
                <Text blod>+86</Text>
              </Container>
            }
            onChange={handlePhoneNumberInputChange}
            value={phoneNumber}
          />
        </Container>
        <Container mt='1em'>
          <Input
            contentStyle={theme => ({
              borderBottom: '1px solid ' + theme.colors.lightScrim,
            })}
            prefix={
              <Container width='3em'>
                <Text blod>验证码</Text>
              </Container>
            }
            suffix={<Button text>发送验证码</Button>}
            onChange={handleValidCodeInputChange}
            value={validCode}
          />
        </Container>
        <Row mt='5em' vertical gap='1em' align='center'>
          <Col w='100%'>
            <Button block disabled={!phoneNumber || !validCode}>
              立即登录
            </Button>
          </Col>
          <Col w='100%'>
            <Button block color={theme => theme.colors.greyLight!}>
              其他方式
            </Button>
          </Col>
          <Col>
            <CheckBox>
              <Text size={'.9rem'} color={theme => theme.colors.lightGreyText!}>
                我已阅读并同意
                <Text color={theme => theme.colors.primary!} px='.2em'>
                  ONCEPAL 用户协议
                </Text>
                和
                <Text px='.2em' color={theme => theme.colors.primary!}>
                  隐私政策
                </Text>
              </Text>
            </CheckBox>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
