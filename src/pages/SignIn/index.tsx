import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useAuth } from '../../context/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

import logoImg from '../../assets/logo.svg';

interface formData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { user, signIn } = useAuth();

  const onSubmit = useCallback(
    async (data: formData): Promise<void> => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('E-mail inválido.')
            .required('E-mail é obrigatório.'),
          password: Yup.string().required('Senha obrigatória.'),
        });

        await schema.validate(data, { abortEarly: false });

        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form ref={formRef} onSubmit={onSubmit}>
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
        </Form>

        <a href="/forgot">
          <FiLogIn size={16} /> Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
