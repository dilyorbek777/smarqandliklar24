import img1 from '@/media/prezident.png'
import img2 from '@/media/prokuror.png'
import img3 from '@/media/karantin.png'
import img4 from '@/media/sardoba.png'
import img5 from '@/media/stop-karantin.png'
import img6 from '@/media/tez-yordam.png'
import Image from 'next/image'

const cards = [
    {
        img: img1,
        title: "Мирзиёев рассказал, зачем было построено Сардобинское водохранилище",
        time: "05:28 / 16.05.2020"
    },
    {
        img: img2,
        title: "Мирзиёев рассказал, зачем было построено Сардобинское водохранилище",
        time: "05:28 / 16.05.2020"
    },
    {
        img: img3,
        title: "Мирзиёев рассказал, зачем было построено Сардобинское водохранилище",
        time: "05:28 / 16.05.2020"
    },
    {
        img: img4,
        title: "Мирзиёев рассказал, зачем было построено Сардобинское водохранилище",
        time: "05:28 / 16.05.2020"
    },
    {
        img: img5,
        title: "Мирзиёев рассказал, зачем было построено Сардобинское водохранилище",
        time: "05:28 / 16.05.2020"
    },
    {
        img: img6,
        title: "Мирзиёев рассказал, зачем было построено Сардобинское водохранилище",
        time: "05:28 / 16.05.2020"
    },
]

export default function Cards() {
    return (
        <div className='max-w-[1440px] mx-auto grid grid-cols-3 gap-5 px-[119px]'>
            {cards.map((card, i)=>(
                <div key={i} className='w-full'>
                    <Image 
                        src={card.img}
                        width={0}
                        height={0}
                        className='w-full'
                        alt={card.title}
                    />
                    <div className="flex flex-col">
                        <b className='my-[11px] text-lg'>{card.title}</b>
                        <p className='text-sm text-[#6B6D97]'>{card.time}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
