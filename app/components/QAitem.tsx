"use client"
import { useState } from "react";
import { Transition } from "react-transition-group";

interface QAItemProps {
    question: string;
    answer: string;
}

const arrowImg = (isOpened: boolean) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-4 h-4 transition-transform duration-300 transform ${isOpened ? "rotate-180" : ""}`}
        >
            <path d="M19 9l-7 7-7-7" />
        </svg>
    )
};

const QAItem: React.FC<QAItemProps> = ({ question, answer }: QAItemProps) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div className="relative rounded-lg border border-gray-700 p-4 cursor-pointer" onClick={() => setIsOpened(!isOpened)}>
            <div className="flex items-center justify-between" >
                <span>{question}</span>
                {arrowImg(isOpened)}
            </div>
            <Transition in={isOpened} timeout={0} >
                {(state) => (
                    <div
                        className={`overflow-hidden transition-all duration-0 ${state === "entered" ? "h-auto" : "h-0"}`} >
                        <hr className="h-px my-4 border-0 dark:bg-gray-700"></hr>
                        <div
                            className={`opacity-0 transform ${state === "entered"
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-[-0.5rem]"
                                } transition-opacity duration-0`} >
                            <span>{answer}</span>
                        </div>
                    </div>
                )}
            </Transition>
        </div>
    );
};

export default QAItem;
