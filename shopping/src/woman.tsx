import { ProductModel } from "./models/ProductModel";

const _BLOUSE = 'bluzy';
const _HAT = 'czapki i kapelusze';
const _DRESS = 'sukienki';
const _JACKET = 'kurtki';
const _SWEATER = 'swetry';
const _SHIRT = 'koszule';
const _PANTS = 'spodnie';
const _SKIRT = 'spódnice';
const _TSHIRTS = 'podkoszulki';
const _GLASSES = 'okulary';

export const womensProducts: Array<ProductModel> = [
    {name: "bluza czarna", image: "/products/female/blouse_black.jpg", category:_BLOUSE, price:99.99, id: 'w1'},
    // {name: "bluza niebieska", image:"./products/female/blouse_blue.jpg", price:89.99},
    {name: "bluza pomarańczowa", image:"./products/female/blouse_orange.jpg", category:_BLOUSE, price:89.99, id: 'w2'},
    {name: "bluza różowa", image:"./products/female/blouse_pink.jpg", category:_BLOUSE, price:79.99, id: 'w3'},
    {name: "bluza czerwona", image:"./products/female/blouse_red.jpg", category:_BLOUSE, price:109.99, id: 'w4'},
    {name: "bluza żółta", image:"./products/female/blouse_yellow.jpg", category:_BLOUSE, price:89.99, id: 'w5'},
    {name: "kaszkiet", image:"./products/female/cap_1.jpg", category:_HAT, price:49.99, id: 'w6'},
    {name: "sukienka czarna ", image:"/products/female/dress_black.jpg", category:_DRESS, price:69.99, id: 'w7'},
    {name: "sukienka kwiecista czarna", image:"/products/female/dress_floral_black.jpg", category:_DRESS, price:69.99, id: 'w8'},
    {name: "sukienka kwiecista czerwona", image:"/products/female/dress_floral_red.jpg", category:_DRESS, price:69.99, id: 'w9'},
    {name: "sukienka czerwona", image:"/products/female/dress_red.jpg", category:_DRESS, price:69.99, id: 'w10'},
    {name: "sukienka pasiasta", image:"/products/female/dress_striped.jpg", category:_DRESS, price:69.99, id: 'w11'},
    {name: "sukienka krótka biała", image:"/products/female/dress_white_short.jpg", category:_DRESS, price:69.99, id: 'w12'},
    {name: "kapelusz letni", image:"/products/female/hat_summer.jpg", category:_HAT, price:69.99, id: 'w13'},
    {name: "kurtka czarna", image:"/products/female/jacket_black.jpg", category:_JACKET, price:69.99, id: 'w14'},
    {name: "kurtka szara", image:"/products/female/jacket_grey.jpg", category:_JACKET, price:69.99, id: 'w15'},
    {name: "kurtka jeansowa", image:"/products/female/jacket_jeans_1.jpg", category:_JACKET, price:69.99, id: 'w16'},
    {name: "kurtka jeansowa", image:"/products/female/jacket_jeans_2.jpg", category:_JACKET, price:69.99, id: 'w17'},
    {name: "kurtka jeansowa", image:"/products/female/jacket_jeans_3.jpg", category:_JACKET, price:69.99, id: 'w18'},
    {name: "kurtka jeansowa", image:"/products/female/jacket_jeans_4.jpg", category:_JACKET, price:69.99, id: 'w19'},
    {name: "kurtka napisy", image:"/products/female/jacket_streetwear.jpg", category:_JACKET, price:69.99, id: 'w20'},
    {name: "kurtka biała", image:"/products/female/jacket_white.jpg", category:_JACKET, price:69.99, id: 'w21'},
    {name: "sweter różowy", image:"/products/female/jumper_pink.jpg", category:_SWEATER, price:69.99, id: 'w22'},
    {name: "spodnie czerwone", image:"/products/female/pants_red.jpg", category:_PANTS, price:69.99, id: 'w23'},
    {name: "koszula różowa", image:"/products/female/shirt_pink.jpg", category:_SHIRT, price:69.99, id: 'w24'},
    {name: "koszula biała", image:"/products/female/shirt_white.jpg", category:_SHIRT, price:69.99, id: 'w25'},
    {name: "spódnica kraciasta", image:"/products/female/skirt_checked.jpg", category:_SKIRT, price:69.99, id: 'w26'},
    {name: "spódnica długa", image:"/products/female/skirt_long.jpg", price:69.99, category:_SKIRT, id: 'w27'},
    {name: "spódnica krótka czerwona", image:"/products/female/skirt_red_short.jpg", category:_SKIRT, price:69.99, id: 'w28'},
    {name: "okulary przeciwsłoneczne", image:"/products/female/sunglasses_1.jpg", category:_GLASSES, price:69.99, id: 'w29'},
    {name: "podkoszulek animal love", image:"/products/female/tshirt_animal_love.jpg", category:_TSHIRTS, price:69.99, id: 'w30'},
    {name: "podkoszulek beatles", image:"/products/female/tshirt_beatles.jpg", category:_TSHIRTS, price:69.99, id: 'w31'},
    {name: "podkoszulek czarny", image:"/products/female/tshirt_black.jpg", category:_TSHIRTS, price:69.99, id: 'w32'},
    {name: "podkoszulek czarny", image:"/products/female/tshirt_black_2.jpg", category:_TSHIRTS, price:69.99, id: 'w33'},
    {name: "podkoszulek czarny", image:"/products/female/tshirt_black_3.jpg", category:_TSHIRTS, price:69.99, id: 'w34'},
    {name: "podkoszulek czarny", image:"/products/female/tshirt_black_4.jpg", category:_TSHIRTS, price:69.99, id: 'w35'},
    {name: "podkoszulek czarny", image:"/products/female/tshirt_black_5.jpg", category:_TSHIRTS, price:69.99, id: 'w36'},
    {name: "podkoszulek czarny", image:"/products/female/tshirt_black_6.jpg", category:_TSHIRTS, price:69.99, id: 'w37'},
    {name: "podkoszulek czarny", image:"/products/female/tshirt_black_bones.jpg", category:_TSHIRTS, price:69.99, id: 'w38'},
    {name: "podkoszulek kwiaty", image:"/products/female/tshirt_flowers.jpg", category:_TSHIRTS, price:69.99, id: 'w39'},
    {name: "podkoszulek journey", image:"/products/female/tshirt_journey.jpg", category:_TSHIRTS, price:69.99, id: 'w40'},
    {name: "podkoszulek leave the road", image:"/products/female/female/tshirt_leave_the_road.jpg", category:_TSHIRTS, price:69.99, id: 'w41'},
    {name: "podkoszulek długi", image:"/products/female/tshirt_long.jpg", category:_TSHIRTS, price:69.99, id: 'w42'},
    {name: "podkoszulek los angeles", image:"/products/female/tshirt_los_angeles.jpg", category:_TSHIRTS, price:69.99, id: 'w43'},
    {name: "podkoszulek", image:"/products/female/tshirt_photo.jpg", category:_TSHIRTS, price:69.99, id: 'w44'},
    {name: "podkoszulek kolorowy", image:"/products/female/tshirt_printed.jpg", category:_TSHIRTS, price:69.99, id: 'w45'},
    {name: "podkoszulek pulp fiction", image:"/products/female/tshirt_pulp_fiction.jpg", category:_TSHIRTS, price:69.99, id: 'w46'},
    {name: "podkoszulek not today", image:"/products/female/tshirt_snake_red.jpg", category:_TSHIRTS, price:69.99, id: 'w47'},
    {name: "podkoszulek social savage", image:"/products/female/tshirt_social_savage.jpg", category:_TSHIRTS, price:69.99, id: 'w48'},
    {name: "podkoszulek vogue", image:"/products/female/tshirt_vogue.jpg", category:_TSHIRTS, price:69.99, id: 'w49'},
    {name: "podkoszulek biały", image:"/products/female/tshirt_white.jpg", category:_TSHIRTS, price:69.99, id: 'w50'},
    {name: "podkoszulek biały", image:"/products/female/tshirt_white_2.jpg", category:_TSHIRTS, price:69.99, id: 'w51'},
    {name: "podkoszulek żółty", image:"/products/female/tshirt_yellow.jpg", category:_TSHIRTS, price:69.99, id: 'w52'}
];