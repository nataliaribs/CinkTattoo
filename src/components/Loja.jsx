import "./Loja.css";

const produtos = [
  {
    nome: "Camiseta Estúdio C'ink",
    preco: "R$ 89,90",
    imagem: "/produtos/camiseta.jpg",
  },
  {
    nome: "Copo C'ink",
    preco: "R$ 59,90",
    imagem: "/produtos/copo.jpg",
  },
  {
    nome: "Adesivo Exclusivo",
    preco: "R$ 9,90",
    imagem: "/produtos/adesivo.jpg",
  },
];

export default function Loja() {
  return (
    <section className="loja" id="loja">
      <h2>Loja</h2>
      <p>Produtos exclusivos do Estúdio C'ink</p>

      <div className="produtos">
        {produtos.map((item, index) => (
          <div className="produto" key={index}>
            <img src={item.imagem} alt={item.nome} />
            <h3>{item.nome}</h3>
            <p>{item.preco}</p>
            <a
              href="https://wa.me/557199?text=Olá!%20Tenho%20interesse%20em%20comprar%20o%20produto:%20"
              target="_blank"
              rel="noopener noreferrer"
            >
              Comprar pelo WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
