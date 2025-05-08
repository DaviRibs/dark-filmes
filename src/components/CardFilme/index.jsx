export default function CardFilme (){
    return (
        <div className="w-[350px] h-[280px] flex flex-col rounded-lg bg-[#222222]">
            <div className="w-full h-[70%] rounded-t-lg">
            <img 
            className="w-full h-full rounded-t-lg object-cover"
             src="https://i.ytimg.com/vi/t3PzUo4P21c/maxresdefault.jpg"
             alt=""
            />
            </div>
            
            <div className="w-full h-[30%] flex flex-col pt-0 px-4">
                <p className="text-[15px] font-bold">Saw X</p>
                <p className="text-[15px] text-[#8a898c]">James Wan</p>
                <div className="w-full flex justify-between">
                <p className="text-[15px] text-[#8a898c]">2023</p>
                <div className="px-2 py-0 bg-[#8F7BD8]/10 text-[#8F7BD7] rounded-lg">Terror</div>
                </div>
            </div>
        </div>

    )
}