import Image from "next/image"
import Link from "next/link"

export default () => {
    return <Link href="/"><Image
        src={"/logo_hollow.png"}
        width={250}
        height={60}
        alt="Emotionull Hollow Logo"
        sizes="10vw auto"
        style={{width:"250px", height: "auto"}}
    
    />
</Link>
} 