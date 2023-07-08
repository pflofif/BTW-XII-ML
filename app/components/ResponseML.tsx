import BTWLogo from "./BTWlogo";
import QA from "./QA";

interface RespProps {
    headerText: string
    mainText: string;
}
const ResponseML = ({ headerText, mainText }: RespProps) => {
    return (
        <div>
            <h1 className="mb-2.5 mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl text-center">{headerText}</h1>
            <a >{mainText}</a>
        </div>
    )
}
export default ResponseML;