import Image from "next/image";
interface Props {
    className?: string
}
const BTWLogo = ({ className }: Props) => {
    return (
        <Image src='btw_11.svg'
            alt='btw 11 logo'
            className={className}
            width={500}
            height={200}
            priority />
    )
}
export default BTWLogo;