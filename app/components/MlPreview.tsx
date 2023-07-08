interface MlPreviewProps {
    onClickEvent: () => void;
    title: string
    subtitle: string
}

const MlPreview = ({ onClickEvent, title, subtitle }: MlPreviewProps) => {
    return (
        <a
            onClick={onClickEvent}
            className="cursor-pointer group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer">
            <h2 className={`mb-3 text-2xl font-semibold`}>
                {title}{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                </span>
            </h2>
            <p className={`m-0 text-sm opacity-70`}> {subtitle} </p>
        </a>
    )
}
export default MlPreview;