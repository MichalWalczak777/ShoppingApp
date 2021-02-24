import React from "react";
import pulpFictionShirt from "../../../assets/products/arun-clarke-ZqnlW6EAel0-unsplash.jpg";
import { ProductModel } from "../../../models/ProductModel";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Select,
    MenuItem,
    Button,
    makeStyles, 
    FormControl,
    InputLabel} from '@material-ui/core';

const ProductDetails= ({id}:{id:string}) => {

    const defaultShirt: ProductModel = {name: "podkoszulek pulp fiction", image: pulpFictionShirt, price: "74,99 PLN"};
    const sizes: Array<string> = ["XS", "S", "M", "L", "XL"];

    const [size, setSize] = React.useState<string>("");

    const useStyles = makeStyles(() => ({
        productDetailsButton: {
            height: "56px",
            width: "48%"
        },
        productDetailsSelectSize: {
            height: "100%",
            width: "48%"
        }
    }));

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSize(event.target.value as string);
      };

    const {productDetailsButton, productDetailsSelectSize} = useStyles();

    return (
        <div className="productDetails">
            <div className="productDetails-mainContent">
                <img className="productDetails-image" src={defaultShirt.image}/>         
                <p className="productDetails-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae nihil neque tempora laboriosam, at praesentium porro eius aspernatur enim delectus earum provident blanditiis facilis numquam sunt nulla. Tempora, debitis?</p>
            </div>
            <div className="productDetails-bottomMenu">
                <div className="productDetails-bottomMenuRow">
                    <p>{defaultShirt.name}</p>
                    <p>{defaultShirt.price}</p>
                </div>
                <div className="productDetails-bottomMenuRow">
                <FormControl className={productDetailsSelectSize}>
                    <InputLabel id="productDetails-selectSizeLabel">Wybierz rozmiar</InputLabel>
                    <Select variant="outlined"
                            labelId="productDetails-selectSizeLabel"
                            id="productDetails-selectSize"
                            value={size}
                            onChange={handleChange}>
                        {sizes.map(itemSize => <MenuItem key={itemSize} value={itemSize}>{itemSize}</MenuItem>)}
                    </Select>
                </FormControl>
                <Button className={productDetailsButton} variant="contained" color="primary">
                    <ShoppingCartIcon/>
                    DODAJ
                </Button>
                </div>
            </div>        
        </div>
    );
}

export default ProductDetails;