import { Container, Input, Select, Textarea } from "./styles";

const DescriptionInfo = () => {
  const selectOptions = [
    "Artigos Pet",
    "Automóveis",
    "Beleza",
    "Eletrônicos e celulares",
    "Esportes",
    "Música",
    "Moda",
  ];

  return (
    <Container>
      <label htmlFor="productName">Nome</label>
      <Input type="text" id="productName" placeholder="Nome do seu produto" />

      <label htmlFor="category">Categoria</label>
      <Select name="category" id="category">
        {selectOptions.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </Select>

      <label htmlFor="description">Descrição</label>
      <Textarea
        id="description"
        maxLength={300}
        placeholder="Descreva seu produto"
      />
    </Container>
  );
};

export default DescriptionInfo;
