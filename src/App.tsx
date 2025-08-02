import questions from './questions.json';

const questionsLength = questions.length;

const randomQuestion = (): string =>
  questions[Math.floor(Math.random() * questionsLength)].question;

export default function App() {
  return (
    <h1 class="text-center font-serif text-5xl text-stone-900 sm:text-6xl lg:text-7xl dark:text-stone-100">
      {randomQuestion()}
    </h1>
  );
}
