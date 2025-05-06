import { ArrowRight, ArrowRightAltSharp, Check } from "@mui/icons-material"


type Props = {
    imageOrder: string
    textOrder: string
    title: string
    linkText: string
}

import headset from "@/imgs/headset.jpg"
import Image from "next/image"

const About = ({imageOrder, textOrder, title, linkText}: Props) => {
  return (
    <div className="py-16 relative w-3/4 px-3 md:px-0 items-center grid grid-cols-1
    lg:grid-cols-2 gap-12 m-auto">
       <div className={`${textOrder}`}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {title}
        </h1>

        <div className="mt-8">
            <div className="flex items-center mb-6 space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-col
                rounded-full bg-amber-700 ">
                    <Check />
                </div>
                <p className="text-sm sm:text-base dark:gray-300">
                    High Resolution Audio compatible
                </p>
            </div>
            <div className="flex items-center mb-6 space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-col
                rounded-full bg-amber-700 ">
                    <Check />
                </div>
                <p className="text-sm sm:text-base dark:gray-300">
                    High quality wireless audio with BLUETOOTH and LDAC texhnology
                </p>
            </div>
            <div className="flex items-center mb-6 space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-col
                rounded-full bg-amber-700 ">
                    <Check />
                </div>
                <p className="text-sm sm:text-base dark:gray-300">
                    Smart listening experience by Apdative Sound Control
                </p>
            </div>
            <div className="flex items-center mb-6 space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-col
                rounded-full bg-amber-700 ">
                    <Check />
                </div>
                <p className="text-sm sm:text-base dark:gray-300">
                    Ergonomic enfolding design earpads
                </p>
            </div>
            <p className="text-amber-700 cursor-pointer">
                Learn More <ArrowRightAltSharp />
            </p>
        </div>
       </div>
       <div className={`${imageOrder}`} >
        <Image src={headset} width={500} height={500} alt="img_" />
       </div>
    </div>
  )
}

export default About