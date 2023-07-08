"use client"
import BTWLogo from './components/BTWlogo'
import { useState } from 'react'
import DesignRespML from './DesignRespML/page';
import ItRespML from './ItRespML/page';
import LogisticRespML from './LogisticRespML/page';
import QA from './components/QA';

type ActiveMlState = 'design' | 'it' | 'logist' | 'none'

export default function Home() {
  const [state, setState] = useState<ActiveMlState>('none');
  return (
    <main className="flex flex-col items-center lg:p-24 p-8 ">
      <h1 className='text-2xl'>
        Привіт Привіт, тут зібрані мотиваційні листи Боді Вівчара на проєкт BTW XII!</h1>
      <h2 className='text-l'>(Для початку оберіть мотивашку, яку хочите прочитати)</h2>

      <div className="lg:mt-20 mt-5 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          onClick={() => { setState('design') }}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Мотивашка на ДИЗАЙНЕРАА{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-70`}>
            Гарний дизайн ти вже бачиш, але почитати мотивацію тоже круто!!!
          </p>
        </a>

        <a
          onClick={() => { setState('logist') }}
          // href="/LogisticRespML"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Мотивашка на ЛОГІСТААА{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-70`}>
            Розказую про жосткі схеми як зафармити на бус!!!
          </p>
        </a>

        <a
          onClick={() => { setState('it') }}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Мотивашка на ІТ ІТ ІТ{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0  text-sm opacity-70`}>
            Сайтик написав то і гарного мотивуючого тексту треба!!!
          </p>
        </a>
      </div>
      <div className={`${state !== 'none' ? "rounded-lg border border-gray-700 lg:px-16 p-8" : ""}`}
      >
        {state === 'design' ? (
          <DesignRespML />
        ) : state === 'it' ? (
          <ItRespML />
        ) : state === 'logist' ? (
          <LogisticRespML />
        ) : null}
      </div>
      <div className='lg:pt-16 pt-8'>
        <h1 className="bg:text-2xl sm:text-xl font-black text-center">Секція питаняяяяяя - відповідьььь(на питання треба нажимати!)</h1>
        <QA />
      </div>
      <div className='grid lg:grid-cols-3'>
        <BTWLogo className="dark:invert" />
        <BTWLogo />
        <BTWLogo className="dark:invert" />
        <BTWLogo />
        <BTWLogo className="dark:invert" />
        <BTWLogo />
      </div>
    </main>
  )
}
