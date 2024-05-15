import CardProduto from "../CardProduto/CardProduto";

interface ResumoCarrinhoProps {
  favoritos: Produto[];
  setFavoritos: React.Dispatch<React.SetStateAction<Produto[]>>;
}

export default function ResumoFavoritos({
  favoritos,
  setFavoritos,
}: ResumoCarrinhoProps) {
  return (
    <div className="mt-4">
      <h5 className="mb-4">Seus produtos favoritos:</h5>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {favoritos.map((produto) => (
          <CardProduto
            key={produto.id}
            produto={produto}
            favoritos={favoritos}
            setFavoritos={setFavoritos}
          />
        ))}
      </div>
    </div>
  );
}
