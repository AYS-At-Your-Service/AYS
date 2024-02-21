import productCss from  "./Product.module.css";

const Products = ({ result }) => {
  return (
    <>
      <section className={productCss["card-container"]}>{result}</section>
    </>
  );
};

export default Products;
