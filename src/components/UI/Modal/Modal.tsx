import { faX } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { createPortal } from 'react-dom';
import { Content, Overlay, CloseWrapper, CloseIcon, Body } from './Modal.css';

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
    </Overlay>,
    document.getElementById('root')!
  );
}

export default Modal;
