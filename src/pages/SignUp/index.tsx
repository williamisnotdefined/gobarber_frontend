import React, { useCallback } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  const onSubmit = useCallback(async (data: object): Promise<void> => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório.'),
        email: Yup.string()
          .email('Digite um e-mail válido.')
          .required('E-mail é obrigatório.'),
        password: Yup.string().min(6, 'Mínimo de 6 caracteres.'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form onSubmit={onSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input icon={FiUser} name="name" placeholder="nome" />
          <Input icon={FiMail} name="email" placeholder="e-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="/forgot">
          <FiArrowLeft size={16} /> Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
