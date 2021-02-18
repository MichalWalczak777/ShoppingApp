import React, {useState} from "react";
import { Chip, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import ProductsList from "../productsList/ProductsList";

const Products = () => {

    const [tags, setTags] = useState(["wzorzysty podkoszulek", "jeansy czarne", "hawajska koszula", "elegancka koszula", "krótkie spodenki"]);

    return(
        <div className="products">
            <Autocomplete
            options={tags}
            getOptionLabel={(option) => option}
            renderInput={(params) => <TextField {...params} label="Szukaj" variant="outlined" />}
            />
            <h2>Odzież męska</h2>
            <div className="products-chips">
                <Chip size="medium" label="Podkoszulki" color="primary"/>
                <Chip size="medium" label="Koszule" color="primary"/>
                <Chip size="medium" label="Spodnie" color="primary"/>
            </div>
            <ProductsList/>
        </div>
    )
}

export default Products;