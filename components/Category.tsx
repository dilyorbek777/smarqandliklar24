import Link from "next/link"

const category = [
  { name: "Узбекистана", link: "/category/uz" },
  { name: "Мир", link: "/category/world" },
  { name: "Экономика", link: "/category/eco" },
  { name: "Политика", link: "/category/politics" },
  { name: "Общество ", link: "/category/society" },
  { name: "Технологии ", link: "/category/tech" },
  { name: "Спорт ", link: "/category/sport" },
  { name: "Культура ", link: "/category/culture" },
  { name: "Происшествия  ", link: "/category/events" },
  { name: "Туризм ", link: "/category/tourism" },
]
export default function Category() {
  return (
    <div className="px-[119px] max-w-[1440px] mx-auto">
      <div className="overflow-hidden overflow-x-auto shadow-md   px-6 py-[21px] items-center justify-between flex gap-3 ">
        {category.map((cte, i) => (
          <Link href={cte.link} className="text-[#515151] text-xl font-medium" key={i}>
            {cte.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
