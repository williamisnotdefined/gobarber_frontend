import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

import logoImg from '../../assets/logo.svg';

interface formData {
  name?: string;
  email?: string;
  password?: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const onSubmit = useCallback(async (data: formData): Promise<void> => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório.'),
        email: Yup.string()
          .email('E-mail inválido.')
          .required('E-mail é obrigatório.'),
        password: Yup.string().min(6, 'Mínimo de 6 caracteres.'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={onSubmit}>
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
