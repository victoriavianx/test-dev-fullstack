import { useEffect } from "react";
import { useList } from "../../providers/list/list";

import ProductCard from "../ProductCard/productCard";

import { Container, Content, List, TitleBox } from "./styles";
import NoProductImage from "../../assets/images/undraw_post_re_mtr4.svg";

const ProductShowcase = () => {
  const { setProductList, products } = useList();

  useEffect(() => {
    setProductList?.();
  }, []);

  return (
    <Container>
      <TitleBox>
        <h2>Meus produtos</h2>
      </TitleBox>
      <hr />
      <Content>
        {products.length === 0 ? (
          <>
            <img src={NoProductImage} alt="" />
            <p>Você ainda não tem produtos publicados</p>{" "}
          </>
        ) : (
          <List>
            {products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </List>
        )}
      </Content>
    </Container>
  );
};

export default ProductShowcase;
