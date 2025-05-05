import PageWrapper from "@/components/PageWrapper";

export default function Cadastrar(){
    return (
    <PageWrapper showButton={false}>
        <div className="w-full h-full py-[40px] px-[70px] flex flex-col">
        <h1  className="text-[20px]  font-bold  text-[#9A86F4]">Adicione um novo filme</h1>
        <p className="text-[20px] text-gray-500" >Preencha o formulário abaixo para adicionar um novo filme a sua coleção</p>
        <div className="w-full flex justify-center pt-[40px]">
        <form className="w-[60%] h-auto min-h-[200px] bg-[#222222] rounded-2xl border-[0.1px] border-[#3a364c] flex flex-col p-3"></form>

        </div>
        </div>
    </PageWrapper>
    )
}