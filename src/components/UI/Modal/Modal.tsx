import { faX } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { createPortal } from 'react-dom';
import { Content, Overlay, CloseWrapper, CloseIcon, Body } from './Modal.css';

import { motion } from 'framer-motion';

interface ModalProps {
  children: React.ReactNode;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ setOpen, children }: ModalProps) {
  const closeModal = () => {
    setOpen(false);
  };

  return createPortal(
    <Overlay onClick={closeModal}>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <Content
          onClick={(event: React.MouseEvent<HTMLDivElement>) =>
            event.stopPropagation()
          }
        >
          <CloseWrapper>
            <CloseIcon icon={faX} onClick={closeModal} />
          </CloseWrapper>
          <Body>{children}</Body>
        </Content>
      </motion.div>
    </Overlay>,
    document.getElementById('root')!
  );
}

export default Modal;
