interface RespProps {
    text: string
}
const ResponseML = ({ text }: RespProps) => {
    return (
        <div>
            <h2>{text}</h2>
        </div>
    )
}
export default ResponseML;