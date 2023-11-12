import iconCV from '@/media/icon-covid.png'
import iconIll from '@/media/icon-infected.png'
import iconHealth from '@/media/icon-recovered.png'
import iconDead from '@/media/icon-dead.png'
import Image from 'next/image'

const data = [
    { icon: iconCV, text: "Коронавирус COVID-19 в Узбекистане" },
    { icon: iconIll, text: "Инфицированы", number: 2753, textColor: "text-[#DB0000]" },
    { icon: iconHealth, text: "Выздоровели", number: 2245, textColor: "text-[#15CE3D]" },
    { icon: iconDead, text: "Умерли", number: 12, textColor: "text-[#000000]" },
]

const CV19info = () => {
    return (
        <div className="px-[119px] max-w-[1440px] mx-auto">
            <div className="my-[35px]  gap-4  grid grid-cols-4 items-center px-[35px] bg-[#F6F6F9] py-10 rounded-md">
                {data.map((detail, i) => (
                    <div key={i} className="flex items-center justify-center gap-10">
                        <Image src={detail.icon} width={0} height={0} alt={detail.text} />
                        <div className="flex flex-col font-semibold ">
                            <span className={detail.textColor}>
                                {detail.text}
                            </span>
                            {detail.number}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CV19info