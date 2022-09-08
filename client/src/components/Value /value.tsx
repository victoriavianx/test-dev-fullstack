const ValueInfo = () => {
  const selectOptions = ["Excelente", "Muito bom", "Bom", "Ruim"];

  return (
    <div>
      <label htmlFor="condition">Condição do Produto</label>
      <select name="condition" id="condition">
        {selectOptions.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </select>

      <label htmlFor="price">Preço</label>
      <input
        type="number"
        id="price"
        placeholder="Qual o valor do seu produto?"
      />
    </div>
  );
};

export default ValueInfo;
