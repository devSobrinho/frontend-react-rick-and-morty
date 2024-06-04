// TODO: Criar pagina mapeando os episódios do personagem
export default function Page({ params }: { params: { id: string } }) {
  return <p>Character: {params.id}</p>;
}
