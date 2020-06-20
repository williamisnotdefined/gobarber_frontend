import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <form>
          <h1>Faça seu cadastro</h1>

          <Input icon={FiUser} name="user" placeholder="nome" />
          <Input icon={FiMail} name="mail" placeholder="e-mail" />
          <Input icon={FiLock} name="pwd" type="password" placeholder="senha" />

          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="/forgot">
          <FiArrowLeft size={16} /> Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
