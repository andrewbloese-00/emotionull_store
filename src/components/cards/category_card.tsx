import Image from "next/image"
import Link from "next/link"

interface iCategoryCardProps {
    title: string
    category_id: string
    image_url?:string
} 



const CategoryCard = (props:iCategoryCardProps) => {


    const hasImg = props.image_url !== undefined

    return ( 
        <Link href={`/shop/categories/${props.category_id}`}
            className="group w-60 aspect-square md:w-80 md:h-80 flex-1 relative rounded-2xl"
        >
            { hasImg && <Image 
                fill={true}
                style={{aspectRatio: 1}}
                src={props.image_url!} 
                alt={`Category Card - ${props.title}`}
                className="group-hover:opacity-5 transition-opacity w-80 h-80"
                sizes="300px"
            />}
            <span 
                style={{fontFamily: "monospace"}}
                className="absolute left-1/2 -translate-x-1/2  -bottom-10 text-xl group-hover:flex group-hover:bg-transparent group-hover:text-white transition-all font-bold md:bg-transparent">
                {props.title}
            </span>
        
        
        </Link>
    )
}


export default CategoryCard
