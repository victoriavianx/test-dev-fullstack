import { FiEdit, FiTrash2 } from "react-icons/fi";
import { ButtonBox, Card, DetailBox } from "./styles";
import { toast } from "react-toastify";

import api from "../../services/data-source";
import { useHistory } from "react-router-dom";
import { useList } from "../../providers/list/list";

const ProductCard = ({ product }: any) => {
  const history = useHistory();

  const { id, productName, category, description, condition, price } = product;
  const { setProductList } = useList();

  const formatCurrency = (number: number) => {
    return Number(number).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleHistoryClick = (path: string) => {
    return history.push(path);
  };

  const handleClick = () => {
    api
      .delete(`/produtos/${id}`)
      .then((response) => {
        toast.success("Produto deletado");

        return setProductList?.();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card>
      <h3>{productName}</h3>
      <DetailBox>
        <h4>{category}</h4>|<p>{condition}</p>
      </DetailBox>
      <p style={{ fontWeight: "bold", width: "30%", marginLeft: "2rem" }}>
        {formatCurrency(price)}
      </p>
      <span>{description}</span>
      <ButtonBox>
        <button onClick={() => handleHistoryClick(`/editar/${id}`)}>
          <FiEdit />
        </button>
        <button onClick={handleClick}>
          <FiTrash2 />
        </button>
      </ButtonBox>
    </Card>
  );
};

export default ProductCard;
