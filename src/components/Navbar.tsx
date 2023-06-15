import { FiSun, FiMoon } from 'react-icons/fi';

function Navbar({
  toggleDarkMode,
  isDarkMode,
}: {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}) {
  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900 flex items-center p-4'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='https://flowbite.com/' className='flex items-center'>
          <img
            src='https://flowbite.com/docs/images/logo.svg'
            className='h-8 mr-3'
            alt='Flowbite Logo'
          />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Text Analyzer
          </span>
        </a>
      </div>
      <div>
        <button
          className='p-2 bg-gray-200 dark:bg-gray-800 dark:text-orange-600 text-gray-800 rounded'
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
