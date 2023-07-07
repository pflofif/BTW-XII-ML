interface RespProps {
    text: string
}
const ResponseML = ({ text }: RespProps) => {
    return (
        <h2>{text}</h2>
    )
}
export default ResponseML;