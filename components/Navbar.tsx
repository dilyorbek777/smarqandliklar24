
import Link from 'next/link'

const currency = [
    { icon: "$", cost: "10137.2" },
    { icon: "P", cost: "136.26" },
    { icon: "E", cost: "10988.72" },
]

const lang = [
    { name: "RU" },
    { name: "UZ" },
]

const Navbar = () => {
    return (
        <nav className="max-w-[1440px] py-[47px] px-[119px] mx-auto flex justify-between">
            <div className="left flex items-center 
            
             gap-[17px] w-1/2">
                <div className="logo text-[#295091] text-[28px] font-bold shadow-md p-2 rounded">
                    NAMANGANLIKLAR24
                </div>
                <ul className="flex gap-4">
                    {currency.map((crncy, i) => (
                        <li key={i} className="gap-1 flex">
                            <span className="text-[#295091] text-base font-bold">{crncy.icon}</span>
                            {crncy.cost}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="right flex items-center justify-center gap-[17px] ">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <select name="lang" className='outline-none mx-[31px]' id="lang">
                    {lang.map((lan, i) => (
                        <option value={lan.name} key={i}>{lan.name}</option>
                    ))}
                </select>
                <Link href="https://telegram.me/dilyorbek_asfandiyorov">
                    <button className=' bg-gradient-to-r from-[#1E96C8] to-[#37AEE2] px-3 py-2 rounded-md flex gap-1 items-center justify-center text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clip-path="url(#clip0_16_36)">
                                <path d="M10 0.3125C4.64813 0.3125 0.3125 4.64875 0.3125 10C0.3125 15.3512 4.64875 19.6875 10 19.6875C15.3519 19.6875 19.6875 15.3512 19.6875 10C19.6875 4.64875 15.3512 0.3125 10 0.3125ZM14.7581 6.94938L13.1681 14.4419C13.0506 14.9731 12.7344 15.1019 12.2931 14.8519L9.87125 13.0669L8.70312 14.1919C8.57438 14.3206 8.465 14.43 8.215 14.43L8.38688 11.965L12.875 7.91C13.0706 7.73812 12.8319 7.64062 12.5737 7.8125L7.02688 11.3044L4.63625 10.5581C4.11688 10.3944 4.105 10.0387 4.74563 9.78875L14.0856 6.18688C14.5194 6.03063 14.8981 6.2925 14.7575 6.94875L14.7581 6.94938Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_16_36">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Подписатся
                    </button>
                </Link>

            </div>
        </nav>

    )
}

export default Navbar