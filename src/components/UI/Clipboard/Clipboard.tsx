import { useState } from 'react';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

import { Modal } from 'components';
import { Icon, Text } from './Clipboard.css';

interface ClipboardProps {
  copyValue: string;
}

function Clipboard({ copyValue }: ClipboardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClipboardClick = () => {
    setIsModalOpen(true);
    navigator.clipboard.writeText(copyValue);
  };

  return (
    <>
      <Icon icon={faCopy} onClick={handleClipboardClick} />
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
    </>
  );
}

export default Clipboard;
