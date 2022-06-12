import { ProductModel } from "../../../models/ProductModel";

export const filterAutocompleteOptions = (
  options: Array<string>,
  state: string
) => {
  return options.filter((option) => option.includes(state));
};

export const generateOptionCategories = (clothingItems: Array<ProductModel>) =>
  clothingItems
    .map((product) => product.category)
    .filter((product, pos, self) => self.indexOf(product) === pos);
