import instance from "@/api/instance";
import CardFilme from "@/components/CardFilme";
import PageWrapper from "@/components/PageWrapper";
import { useEffect, useState } from "react";

export default function Home(){
  const [filmes, setFilmes] = useState([]);


  useEffect(() => {                                              // exemplo loop de links redicionamento colocar o array vazio importante 
  async function getFilmes(){
  const response = await instance.get("/api/movies")   
  setFilmes(response.data)                                           // api get não tem body boas práticas
  }
  getFilmes()
  }, []);                                                       
  return (
    <PageWrapper>
      <div className="w-full flex flex-col items-center justify-center pt-7">
      <h1 className="text-[40px] text-[#907CDA] font-bold">Sua Coleção de Filmes</h1>
      <p  className="text-[#8a898c] text-[20px]">Acompanhe seus filmes favoritos. Amplie sua coleção. Adicione novos títulos e organize tudo do seu jeito!</p>
      </div>
      <div className="w-full h-auto flex flex-wrap justify-center gap-2 pt-8">
       {
        filmes.map((filme) =>   {
          return (
            <CardFilme filme={filme} key={filme.id}/>
          )
        })
       }
      </div>
    </PageWrapper>
  )
}