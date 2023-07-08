"use client"
import BTWLogo from './components/BTWlogo'
import { useState } from 'react'
import DesignRespML from './DesignRespML/page';
import ItRespML from './ItRespML/page';
import LogisticRespML from './LogisticRespML/page';
import QA from './components/QA';
import MlPreview from './components/MlPreview';

type ActiveMlState = 'design' | 'it' | 'logist' | 'none'

export default function Home() {
  const [state, setState] = useState<ActiveMlState>('none');

  return (
    <main className="flex flex-col items-center lg:p-24 p-8 ">
      <h1 className='text-2xl'>Привіт Привіт, тут зібрані мотиваційні листи Боді Вівчара на проєкт BTW XII!</h1>
      <h2 className='text-l'>(Для початку оберіть мотивашку, яку хочите прочитати)</h2>

      <div className="lg:mt-20 mt-5 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        <MlPreview
          onClickEvent={() => { setState('design') }}
          title='Мотивашка на ДИЗАЙНЕРАА'
          subtitle='Гарний дизайн ти вже бачиш, але почитати мотивацію тоже круто!!!' />

        <MlPreview
          onClickEvent={() => setState('logist')}
          title='Мотивашка на ЛОГІІІСТААА'
          subtitle='Розказую про жосткі схеми як зафармити на бус!!!' />

        <MlPreview
          onClickEvent={() => { setState('it') }}
          title='Мотивашка на ІТ ІТ ІТ'
          subtitle='Сайтик написав то і гарного мотивуючого тексту треба!!!' />
      </div>

      <div
        className={`${state !== 'none' ? "rounded-lg border border-gray-700 lg:px-16 p-8" : ""}`} >
        {state === 'design' ? (
          <DesignRespML />
        ) : state === 'it' ? (
          <ItRespML />
        ) : state === 'logist' ? (
          <LogisticRespML />
        ) : null}
      </div>

      <div className='lg:pt-16 pt-8'  >
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
