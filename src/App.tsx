import { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Main from './components/text-analyzer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode((prev) => !prev);
  }
  return (
    <div
      className={`h-screen flex flex-col ${
        isDarkMode
          ? 'dark  bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700'
          : 'light bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'
      }`}
    >
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
