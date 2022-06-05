import React, { useEffect } from "react";
import { SizedProductModel } from "../../../models/SizedProductModel";
import { mockClothingItems as clothingItems } from "../../../productsData";
import { useParams } from "react-router-dom";
import ProductDetailsDescription from "./ProductDetailsDescription";
import ProductDetailsMenu from "./ProductDetailsMenu";

const ProductDetails = () => {
  const paramId: { id: string } = useParams();
  const id: string = paramId.id;

  const setChosenProduct = () => {
    const product = clothingItems.filter((item) => item.id === id)[0];
    return { ...product, size, quantity: 1 };
  };

  const [size, setSize] = React.useState<string>("M");
  const [sizedProduct, setSizedProduct] = React.useState<SizedProductModel>(
    setChosenProduct()
  );

  useEffect(() => {
    setSizedProduct(setChosenProduct());
  }, [size]);

  return (
    <div className="productDetails">
      <div className="productDetails-mobile">
        <div className="productDetails-mainContent">
          <img className="productDetails-image" src={sizedProduct.image} />
          <ProductDetailsDescription />
        </div>
        <ProductDetailsMenu
          size={size}
          setSize={setSize}
          sizedProduct={sizedProduct}
        />
      </div>
      <div className="productDetails-desktop">
        <div className="productDetails-mainContentDesktop">
          <img className="productDetails-image" src={sizedProduct.image} />
          <ProductDetailsDescription />
        </div>
        <div className="productDetails-menuWrapper">
          <ProductDetailsMenu
            size={size}
            setSize={setSize}
            sizedProduct={sizedProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
