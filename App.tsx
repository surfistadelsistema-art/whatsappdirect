import React, { useEffect } from 'react';

// Defined outside the App component to prevent re-creation on every render.
const WhatsAppIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-16 w-16 text-green-400"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.505 1.905 6.344l-1.218 4.459 4.639-1.225zM12 4.475c4.708 0 8.533 3.824 8.533 8.532 0 4.708-3.825 8.532-8.533 8.532-4.708 0-8.533-3.824-8.533-8.532 0-4.708 3.825-8.532 8.533-8.532zm2.181 10.158c-.144-.072-1.332-.656-1.539-.731-.208-.074-.358-.117-.508.118-.15.234-.582.731-.714.878-.132.148-.264.167-.492.057-.229-.111-.967-.355-1.841-1.134-.68-.58-.129-1.134.118-1.483.226-.32.454-.537.604-.731.15-.195.074-.358-.041-.49-.116-.132-.508-1.215-.696-1.663-.186-.448-.375-.386-.508-.392-.122-.006-.263-.008-.404-.008s-.375.056-.582.274c-.208.218-.792.775-.792 1.883s.81 2.187.926 2.335c.117.148 1.583 2.418 3.833 3.375 2.25 0.957 2.25 0.637 2.648 0.581 0.4-.056 1.332-.544 1.52-1.071s.187-.995.132-1.071c-.055-.075-.205-.118-.349-.19z" />
  </svg>
);

const App: React.FC = () => {
  const WHATSAPP_LINK = 'https://wa.link/mw0ng0';

  useEffect(() => {
    // Redirect to the WhatsApp link after a short delay to allow the user to see the message.
    const timer = setTimeout(() => {
      window.location.href = WHATSAPP_LINK;
    }, 1500); // 1.5 second delay

    // Cleanup the timer if the component unmounts to prevent memory leaks
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
            <div className="animate-pulse">
                <WhatsAppIcon />
            </div>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-green-400 mb-2">Redirigiendo a WhatsApp</h1>
        <p className="text-gray-300 mb-6">
          Serás redirigido en unos momentos. Si no funciona, por favor haz clic en el botón de abajo.
        </p>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-400 mx-auto mb-6"></div>
        <a
          href={WHATSAPP_LINK}
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg"
          rel="noopener noreferrer"
        >
          Ir a WhatsApp Ahora
        </a>
      </div>
       <footer className="absolute bottom-4 text-gray-500 text-sm">
        Creado para redirigir a tu chat de WhatsApp.
      </footer>
    </div>
  );
};

export default App;
