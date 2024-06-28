
interface iGlitchedTextProps { 
    text: string
    twFontSize: "sm" | "md" | "lg" | 'xl' | "2xl" | "3xl" | "4xl" | "5xl"

}


const GlitchedText = (props:iGlitchedTextProps) => {


    const colors = ['red-400','green-400','blue-400'] 


    return ( 
        <div className={`inline-flex align-middle lg:justify-start justify-center relative w-screen ${props.twFontSize ? `text-${props.twFontSize}` : ""}`}>
            {
                colors.map((color,idx)=>(
                    <span key={`glitched-${idx}`} className={`text-${color} border-1  border-white absolute left-0 translate-x-${2*idx}`}>{props.text}</span>
                ))
            }
        </div>        



    )


}

export default GlitchedText