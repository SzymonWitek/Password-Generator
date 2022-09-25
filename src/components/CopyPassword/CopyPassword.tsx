import { useState, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';

import { PasswordContext, PasswordContextI } from 'contexts';
import { Text } from './CopyPassword.css';
import { Clipboard, Modal } from 'components';

function CopyPassword() {
  const { password } = useContext(PasswordContext) as PasswordContextI;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Clipboard copyValue={password} onSuccess={openModal} />
      <AnimatePresence>
        {isModalOpen && (
          <Modal setOpen={setIsModalOpen}>
            <Text bold textAlign="center">
              Password copied to clipboard!
            </Text>
            <Text textAlign="center">
              To paste the password, press CTRL + V on your keyboard.
            </Text>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}

export default CopyPassword;
