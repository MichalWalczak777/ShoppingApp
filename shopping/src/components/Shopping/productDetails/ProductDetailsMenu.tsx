import React, { Dispatch, SetStateAction } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import InfoIcon from "@material-ui/icons/Info";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../../redux/actions";
import {
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { SizedProductModel } from "../../../models/SizedProductModel";
import { changeBasketQuantity } from "../../../redux/actions/basketQuantity";
import { RootState } from "../../../redux/reducers";

interface IProps {
  size: string;
  setSize: Dispatch<SetStateAction<string>>;
  sizedProduct: SizedProductModel;
}

const ProductDetailsMenu = ({ size, setSize, sizedProduct }: IProps) => {
  const sizes: Array<string> = ["XS", "S", "M", "L", "XL"];

  const basketGlobalState = useSelector((state: RootState) => state.basket);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSize(event.target.value as string);
  };

  const handleClick = () => {
    if (
      !(
        basketGlobalState.hasOwnProperty(
          sizedProduct.name + sizedProduct.size
        ) &&
        basketGlobalState[sizedProduct.name + sizedProduct.size].quantity >= 10
      )
    ) {
      dispatch(changeBasketQuantity(sizedProduct.quantity));
      dispatch(
        addToBasket(sizedProduct, sizedProduct.name + sizedProduct.size)
      );
    }
  };

  return (
    <div className="productDetails-menu">
      <div className="productDetails-menuInfo">
        <p className="productDetails-name">{sizedProduct.name}</p>
        <p className="productDetails-price">{sizedProduct.price}</p>
      </div>
      <div className="productDetails-selectWrapper">
        <div className="productDetails-menuUI">
          <div className="productDetails-selectLabelOutside">
            Wybierz rozmiar
          </div>
          <FormControl className="productDetails-selectForm productDetails-materialComponent">
            <InputLabel
              className="productDetails-selectLabelInside productDetails-materialComponent"
              id="productDetails-selectSizeLabel"
            >
              Wybierz rozmiar
            </InputLabel>
            <Select
              variant="outlined"
              labelId="productDetails-selectSizeLabel"
              id="productDetails-selectSize"
              value={size}
              onChange={handleChange}
            >
              {sizes.map((itemSize) => (
                <MenuItem key={itemSize} value={itemSize}>
                  {itemSize}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <Button
          className="productDetails-button productDetails-materialComponent"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          <ShoppingCartIcon />
          DODAJ
        </Button>
        <div className="productDetails-additionalInfo">
          <InfoIcon className="productDetails-additionalIcon productDetails-materialComponent" />
          <span className="productDetails-additionalInfoText">
            Bezpłatna dostawa powyżej 200 złotych
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsMenu;
