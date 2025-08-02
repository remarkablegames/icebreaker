import { useState } from 'preact/hooks';

import questions from './questions.json';

const questionsLength = questions.length;

const getQuestion = (): string =>
  questions[Math.floor(Math.random() * questionsLength)].question;

export default function App() {
  const [question, setQuestion] = useState(getQuestion());

  return (
    <>
      <h1 class="text-center font-serif text-4xl text-stone-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-stone-100">
        {question}
      </h1>

      <br />
      <br />

      <button
        class="cursor-pointer rounded-full border border-blue-500 p-2.5 text-blue-700 hover:bg-blue-100 hover:text-white focus:ring-4 focus:ring-blue-100 focus:outline-none"
        onClick={() => {
          let _question = question;
          while (_question === question) {
            _question = getQuestion();
          }
          setQuestion(_question);
        }}
        type="button"
        title="Refresh"
      >
        <svg
          class="h-6 w-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
          />
        </svg>

        <span class="sr-only">Refresh</span>
      </button>
    </>
  );
}
