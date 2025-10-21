export default function InfoSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-indigo-700">O que é o Tráfico de Pessoas?</h2>
      <p>
        O tráfico de pessoas é o recrutamento, transporte ou acolhimento de pessoas através de engano,
        coerção ou abuso, com o objetivo de exploração. Muitas vítimas são atraídas por promessas falsas
        de emprego, educação ou viagens.
      </p>

      <h3 className="text-xl font-semibold text-indigo-600">Como Evitar</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Desconfie de ofertas de emprego fáceis ou muito lucrativas.</li>
        <li>Verifique sempre a autenticidade do recrutador ou da empresa.</li>
        <li>Nunca entregue documentos pessoais a estranhos.</li>
        <li>Converse com familiares antes de aceitar viagens ou propostas.</li>
      </ul>

      <h3 className="text-xl font-semibold text-indigo-600">O que Fazer se Suspeitar</h3>
      <p>
        Se achar que alguém pode estar em perigo ou ser vítima, entre em contacto com as autoridades
        locais, ONGs ou use canais de denúncia anónimos. A sua denúncia pode salvar vidas.
      </p>
    </div>
  );
}
