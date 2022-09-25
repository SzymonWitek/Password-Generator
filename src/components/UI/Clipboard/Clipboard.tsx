import { faCopy } from '@fortawesome/free-solid-svg-icons';

import { Icon } from './Clipboard.css';

interface ClipboardProps {
  copyValue: string;
  onSuccess: () => void;
}

function Clipboard({ copyValue, onSuccess }: ClipboardProps) {
  const handleClipboardClick = () => {
    if (!(copyValue.length > 0)) return;
    navigator.clipboard
      .writeText(copyValue)
      .then(() => onSuccess())
      .catch((err: Error) => console.error(err));
  };

  return <Icon icon={faCopy} onClick={handleClipboardClick} />;
}

export default Clipboard;
