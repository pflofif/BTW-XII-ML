import Image from 'next/image'
import BTWLogo from './components/BTWlogo'

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24 ">
      <h1>
        Привіт Привіт, тут зібрані мотиваційні листи Боді Вівчара на проєкт BTW XII!
      </h1>
      <div className="mt-20 mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="/DesignRespML"
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
          href="/LogisticRespML"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Мотивашка на ЛОГІІСТА{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-70`}>
            Розказую про жосткі схеми як зафармити на бус!!!
          </p>
        </a>

        <a
          href="/ItRespML"
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
      <div className='mt-35 grid lg:grid-cols-3'>
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
