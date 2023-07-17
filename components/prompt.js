import { useState, useEffect } from 'react';
import { openPrompt } from './promptUtils';

const PromptComponent = () => {
  const [userResponse, setUserResponse] = useState(null);
  const [hasPromptDisplayed, setHasPromptDisplayed] = useState(false);

  useEffect(() => {
    const handlePrompt = async () => {
      if (!hasPromptDisplayed) {
        const response = await openPrompt();
        setUserResponse(response);
        setHasPromptDisplayed(true);
      }
    };

    handlePrompt();
  }, [hasPromptDisplayed]);

  return (
    <div>
      {userResponse !== null && <p>Você clicou em: {userResponse ? 'Verdadeiro' : 'Falso'}</p>}
    </div>
  );
};

export default PromptComponent;
