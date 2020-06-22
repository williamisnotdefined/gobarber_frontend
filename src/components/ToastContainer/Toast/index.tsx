import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../context/ToastContext';

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
}

const iconsMap = {
  info: <FiInfo size={20} />,
  error: <FiAlertCircle size={20} />,
  success: <FiCheckCircle size={20} />,
};

const Toast: React.FC<ToastProps> = ({ message }) => {
  const { id, type, description, title } = message;
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast]);

  return (
    <Container key={id} type={type} hasDescription={!!description}>
      {iconsMap[type || 'info']}

      <div>
        <b>{title}</b>
        {description && <p>{description}</p>}
      </div>

      <button type="button">
        <FiXCircle size={18} onClick={() => removeToast(id)} />
      </button>
    </Container>
  );
};

export default Toast;
