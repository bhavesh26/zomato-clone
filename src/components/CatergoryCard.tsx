interface CategoryCardProps {
    title : string, 
    subTitle : string,
    img: string
}


export const CategoryCard = ({title , subTitle , img}: CategoryCardProps) => {
    return <div className="flex flex-col rounded  w-[100%] m-0 mr-8 rounded" >
        <img  className=" h-[45%] object-cover  rounded-b-none  rounded-xl smc" src={img}/>
        <div className="border border-slate-200 rounded-xl rounded-t-none pt-[1rem] pr-[2rem] pl-[2rem] pb-[1.6rem]">

        <p className="text-left font-medium text-2xl leading-8">{title}</p>
<p className="text-[rgb(79,79,79)] font-normal truncate">{subTitle}</p>
        </div>

    </div>
}