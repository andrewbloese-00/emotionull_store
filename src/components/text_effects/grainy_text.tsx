type TailwindTextSize = "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"

interface iGrainyTextProps  {
    text: string
    size: TailwindTextSize
    twColor:string
    containerClassListExtension?:string


}

const GrainyText = ( props:iGrainyTextProps ) => { 
    return <span className={`relative ${props.containerClassListExtension ?? ""}`}>
        <span className={`text-${props.size} text-${props.twColor} `}>{props.text}</span>
    </span>



}
