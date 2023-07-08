import BTWLogo from "./BTWlogo";
import QA from "./QA";

interface RespProps {
    headerText: string
    mainText: string;
}
const ResponseML = ({ headerText, mainText }: RespProps) => {
    return (
        <div>
            <h1 className="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl ">{headerText}</h1>
            {/* <div className="grid grid-cols-2 grid-rows-1 gap-5">
                <p>{mainText}</p>

                <div className="grid grid-flow-col grid-cols-3 ">

                    <div className="transform scale-80 -rotate-45 translate-x-40 translate-y-0">
                        <img src="bill.jfif" alt="" loading="lazy" />
                    </div>
                    <div className="transform scale-40 translate-y-20 -rotate-45">
                        <img src="musk.jfif" alt="" loading="lazy" />
                    </div>
                    <div className="transform translate-y-20 -rotate-45 -translate-x-20">
                        <img src="tsuker.jpeg" alt="" loading="lazy" />
                    </div>

                </div>

            </div> */}
            <h1 className="bg:text-2xl sm:text-xl font-black text-center">Секція питаняяяяяя - відповідьььь</h1>
            <QA />
        </div>
    )
}
export default ResponseML;