import { useMemo, useState } from 'react';
import { pronouns } from '../data/pronouns';

function Main() {
  const [text, settext] = useState<string>('');

  const wordCount = useMemo(
    () => text.trim().split(/\s+/).filter(Boolean).length,
    [text]
  );

  const pronounCount = useMemo(() => {
    const textWords = text.split(' ');
    let count = 0;

    for (let i = 0; i < textWords.length; i++) {
      if (pronouns.includes(textWords[i])) {
        count++;
      }
    }

    return count;
  }, [text]);

  const avgReadingTime = useMemo(() => Math.ceil(wordCount / 183), [wordCount]);

  const longestWord = useMemo(() => {
    const words = text.split(' ');
    let longestWord = '';

    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }

    return longestWord;
  }, [text]);

  return (
    <main className='flex-1 justify-center flex items-center my-6'>
      <section className='container gap-5 flex flex-col h-full'>
        <article className='bg-white text-lg dark:bg-gray-800 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-600 dark:text-gray-400'>
          <div className='flex items-center justify-center p-4 rounded-md flex-col'>
            <h2>Words</h2>
            <h4 className='font-bold text-gray-800 dark:text-gray-300'>
              {wordCount}
            </h4>
          </div>
          <div className='flex items-center justify-center p-4 rounded-md flex-col'>
            <h2>Characters</h2>
            <h4 className='font-bold text-gray-800 dark:text-gray-300'>
              {text.length}
            </h4>
          </div>
          <div className='flex items-center justify-center p-4 rounded-md flex-col'>
            <h2>Pronouns</h2>
            <h4 className='font-bold text-gray-800 dark:text-gray-300'>
              {pronounCount}
            </h4>
          </div>
        </article>

        <textarea
          rows={10}
          className='flex-1 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Start Typing...'
          autoComplete='on'
          autoFocus
          value={text}
          onChange={(e) => settext(e.target.value)}
        />

        <article className='bg-white dark:bg-gray-800 p-4 rounded-lg grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-400'>
          <h2 className='flex items-center justify-center p-4 rounded-md flex-col'>
            Average Reading Time
            <span className='font-bold text-gray-800 dark:text-gray-300'>
              {avgReadingTime ? `~${avgReadingTime} mins` : '-'}
            </span>
          </h2>
          <h2 className='flex items-center justify-center p-4 rounded-md flex-col'>
            Longest Word
            <span className='font-bold text-gray-800 dark:text-gray-300'>
              {longestWord || '-'}
            </span>
          </h2>
        </article>
      </section>
    </main>
  );
}

export default Main;
