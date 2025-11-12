import { useEffect } from 'react';

const App = () => {
  const WHATSAPP_LINK = 'https://wa.link/mw0ng0';

  useEffect(() => {
    // Immediately redirect to the WhatsApp link.
    window.location.href = WHATSAPP_LINK;
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Render nothing as the redirect happens instantly.
  return null;
};

export default App;
