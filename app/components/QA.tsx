import QAItem from "./QAitem";

interface QAelement {
    question: string;
    answer: string;
}
const QAs: QAelement[] = [
    {
        question: "Чому саме BTW? Що ти знаєш про цей проєкт?",
        answer: " Знаю, що BTW це супер важливий проєкт, який є мостом між новими студентами та бестом. Він доносить тонни важливої та актуальної інформації, розвиває 10201 скілів і купу таких крутих приколів!"
    },
    {
        question: "Оціни рівень мотивації працювати у проєкті від 1 до 10.",
        answer: "7-8"
    },
    {
        question: "Скільки у тебе вільного часу? Як часто ти перебуваєш у Львові? Чи матимеш можливість бути тут влітку?",
        answer: "Зараз часу досить багато, проте в пошуках фул-тайм роботи в офісі, але маю хороший тайм менеджмент, тому не помру з роботою, у Львові майже весь час, і літом буду майже весь, а якщо що, то завжди можу приїхати!"
    },
    {
        question: "Чи вивезеш ти 234567543 тімбілдингів(бажано)",
        answer: "ТАК"
    }
]
const QA = () => {
    return (
        <div className="p-8 sm:px-8 lg:px-24 lg:py-24">
            <div className="grid gap-y-4">
                {
                    QAs.map((qa, index) => {
                        return <QAItem
                            key={index}
                            question={qa.question}
                            answer={qa.answer} />
                    })
                }
            </div>
        </div>
    )
}
export default QA;