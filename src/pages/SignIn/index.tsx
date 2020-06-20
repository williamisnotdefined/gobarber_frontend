import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <form>
          <h1>Faça seu login</h1>

          <Input icon={FiMail} name="email" placeholder="e-mail" />

          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="senha"
          />

          <Button type="submit">Entrar</Button>
          <a href="/forgot">esqueci minha senha</a>
        </form>

        <a href="/forgot">
          <FiLogIn size={16} /> Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
