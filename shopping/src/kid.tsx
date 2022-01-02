import { ProductModel } from "./models/ProductModel";

const _SHIRTS = 'koszule';
const _SKIRTS = 'spódnice';
const _SWEATERS = 'swetry';
const _TSHIRTS = 'podkoszulki';

export const kidsProducts: Array<ProductModel> = [
    {name: "koszula kraciasta niebieska", image: "/products/kids/shirt_checked_blue.jpg", category: _SHIRTS, price:99.99, id: 'k1'},
    {name: "koszula kraciasta czerwona", image: "/products/kids/shirt_checked_red.jpg", category: _SHIRTS, price:99.99, id: 'k2'},
    {name: "koszula ciemna", image: "/products/kids/shirt_dark.jpg", category: _SHIRTS, price:99.99, id: 'k3'},
    {name: "spódnica wzorzysta", image: "/products/kids/skirt_patterned.jpg", category: _SKIRTS, price:99.99, id: 'k4'},
    {name: "sweter wzorzysty", image: "/products/kids/sweater_patterned.jpg", category: _SWEATERS, price:99.99, id: 'k5'},
    {name: "tshirt future leader", image: "/products/kids/tshirt_future_leader.jpg", category: _TSHIRTS, price:99.99, id: 'k6'},
]