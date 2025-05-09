import PageWrapper from "@/components/PageWrapper"
import { useRouter } from "next/router"
import { LuArrowBigLeft } from "react-icons/lu"

export default function Filme({params}) {
    const router = useRouter()
    const { id} = router.query
    

    return (
        <PageWrapper
            showHeader={false}
            >
            <div className="w-full h-full flex flex-col px-[350px] pt-12 items-start">
                <button 
                onClick={() => router.back()}              
                className="px-5 py-2 text-[#8a898c] gap-2 flex items-center justify-center rounded-lg 
                houver:bg-[#27282B] hover:text-[#8F7BD8]">
                <LuArrowBigLeft />
                <p>Voltar para lista de filmes</p>
                </button>
            </div>
        </PageWrapper>
    )
}