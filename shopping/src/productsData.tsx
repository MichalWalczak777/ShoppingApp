import { ProductModel } from "./models/ProductModel";
import * as clothingItemCategories from './categories/clothingItemCategories';

export const kidsProducts: Array<ProductModel> = [
    {name: "koszula kraciasta niebieska", image: "/products/kids/shirt_checked_blue.jpg", category: clothingItemCategories._SHIRTS, price:99.99, id: 'k1'},
    {name: "koszula kraciasta czerwona", image: "/products/kids/shirt_checked_red.jpg", category: clothingItemCategories._SHIRTS, price:99.99, id: 'k2'},
    {name: "koszula ciemna", image: "/products/kids/shirt_dark.jpg", category: clothingItemCategories._SHIRTS, price:99.99, id: 'k3'},
    {name: "spódnica wzorzysta", image: "/products/kids/skirt_patterned.jpg", category: clothingItemCategories._SKIRTS, price:99.99, id: 'k4'},
    {name: "sweter wzorzysty", image: "/products/kids/sweater_patterned.jpg", category: clothingItemCategories._SWEATERS, price:99.99, id: 'k5'},
    {name: "tshirt future leader", image: "/products/kids/tshirt_future_leader.jpg", category: clothingItemCategories._TSHIRTS, price:99.99, id: 'k6'},
]

export const mensProducts: Array<ProductModel> = [
    {name: "marynarka szara bez rękawów", image: "/products/male/blazer_sleevless_grey.jpg", category: clothingItemCategories._BLAZERS, price:99.99, id: 'm1'},
    {name: "bluza czarna", image: "/products/male/blouse_black.jpg", category: clothingItemCategories._BLOUSES, price:99.99, id: 'm2'},
    {name: "bluza niebieska", image: "/products/male/blouse_blue.jpg", category: clothingItemCategories._BLOUSES, price:99.99, id: 'm3'},
    {name: "bluza zielona", image: "/products/male/blouse_green.jpg", category: clothingItemCategories._BLOUSES, price:99.99, id: 'm4'},
    {name: "bluza szara adidas", image: "/products/male/blouse_grey_adidas.jpg", category: clothingItemCategories._BLOUSES, price:99.99, id: 'm5'},
    {name: "czapka żółta", image: "/products/male/cap_yellow.jpg", category: clothingItemCategories._HATS, price:99.99, id: 'm6'},
    {name: "płaszcz czarny", image: "/products/male/coat_black.jpg", category: clothingItemCategories._OUTWEAR, price:99.99, id: 'm7'},
    {name: "kurtka niebieska", image: "/products/male/jacket_blue.jpg", category: clothingItemCategories._OUTWEAR, price:99.99, id: 'm8'},
    {name: "kurtka brązowa", image: "/products/male/jacket_brown.jpg", category: clothingItemCategories._OUTWEAR, price:99.99, id: 'm9'},
    {name: "kurtka jeansowa", image: "/products/male/jacket_jeans.jpg", category: clothingItemCategories._OUTWEAR, price:99.99, id: 'm10'},
    {name: "kurtka jeansowa", image: "/products/male/jacket_jeans_2.jpg", category: clothingItemCategories._OUTWEAR, price:99.99, id: 'm11'},
    {name: "kurtka skórzana", image: "/products/male/jacket_leather.jpg", category: clothingItemCategories._OUTWEAR, price:99.99, id: 'm12'},
    {name: "kurtka skórzana", image: "/products/male/jacket_leather_2.jpg", category: clothingItemCategories._OUTWEAR, price:99.99, id: 'm13'},
    {name: "kurtka przeciwdeszczowa zielona", image: "/products/male/jacket_rainproof_green.jpg", category: clothingItemCategories._OUTWEAR, price:99.99, id: 'm14'},
    {name: "kurtka czerwona", image: "/products/male/jacket_red.jpg", category: clothingItemCategories._OUTWEAR, price:99.99, id: 'm15'},
    {name: "kurtka biała", image: "/products/male/jacket_white.jpg", category: clothingItemCategories._OUTWEAR, price:99.9, id: 'm16'},
    {name: "czapka z daszkiem", image: "/products/male/peaked_cap.jpg", category: clothingItemCategories._HATS, price:99.99, id: 'm17'},
    {name: "koszula czarna", image: "/products/male/shirt_black.jpg", category: clothingItemCategories._SHIRTS, price:99.99, id: 'm18'},
    {name: "koszula niebieska", image: "/products/male/shirt_blue.jpg", category: clothingItemCategories._SHIRTS, price:99.99, id: 'm19'},
    {name: "koszula niebieska", image: "/products/male/shirt_blue_2.jpg", category: clothingItemCategories._SHIRTS, price:99.99, id: 'm20'},
    {name: "koszula kraciasta niebieska", image: "/products/male/shirt_checked_blue.jpg", category: clothingItemCategories._SHIRTS, price:99.99, id: 'm21'},
    {name: "koszula kraciasta czerwona", image: "/products/male/shirt_checked_red.jpg", category: clothingItemCategories._SHIRTS, price:99.99, id: 'm22'},
    {name: "koszula kraciasta biała", image: "/products/male/shirt_checked_white.jpg", category: clothingItemCategories._SHIRTS, price:99.99, id: 'm23'},
    {name: "koszula kwiecista czarno-biała", image: "/products/male/shirt_floral_black_white.jpg", category: clothingItemCategories._SHIRTS, price:99.99, id: 'm24'},
    {name: "koszula kwiecista czarna", image: "/products/male/shirt_floral_black.jpg", category: clothingItemCategories._SHIRTS, price:99.99, id: 'm25'},
    {name: "koszula kwiecista biała", image: "/products/male/shirt_floral_white.jpg", category: clothingItemCategories._SHIRTS, price:99.99, id: 'm26'},
    {name: "koszula kwiecista", image: "/products/male/shirt_floral.jpg", category: clothingItemCategories._SHIRTS, price:99.99, id: 'm27'},
    {name: "koszula zielona", image: "/products/male/shirt_green.jpg", category: clothingItemCategories._SHIRTS, price:99.99, id: 'm28'},
    {name: "koszula jeansowa", image: "/products/male/shirt_jeans.jpg", category: clothingItemCategories._SHIRTS, price:99.99, id: 'm29'},
    {name: "koszula pomarańczowa", image: "/products/male/shirt_orange.jpg", category: clothingItemCategories._SHIRTS, price:99.99, id: 'm30'},
    {name: "koszula wzorzysta", image: "/products/male/shirt_patterned.jpg", category: clothingItemCategories._SHIRTS, price:99.99, id: 'm31'},
    {name: "koszula biała", image: "/products/male/shirt_white.jpg", category: clothingItemCategories._SHIRTS, price:99.99, id: 'm32'},
    {name: "okulary przeciwsłoneczne", image: "/products/male/sunglasses_1.jpg", category: clothingItemCategories._GLASSES, price:99.99, id: 'm33'},
    {name: "sweter bullets", image: "/products/male/sweater_bullets.jpg", category: clothingItemCategories._SWEATERS, price:99.99, id: 'm34'},
    {name: "sweter grey", image: "/products/male/sweater_grey.jpg", category: clothingItemCategories._SWEATERS, price:99.99, id: 'm35'},
    {name: "sweter red", image: "/products/male/sweater_red.jpg", category: clothingItemCategories._SWEATERS, price:99.99, id: 'm36'},
    {name: "podkoszulek kości", image: "/products/male/tshirt_black_bones.jpg", category: clothingItemCategories._TSHIRTS, price:99.99, id: 'm37'},
    {name: "podkoszulek czarny", image: "/products/male/tshirt_black.jpg", category: clothingItemCategories._TSHIRTS, price:99.99, id: 'm38'},
    {name: "podkoszulek dragon ball", image: "/products/male/tshirt_dragon_ball.jpg", category: clothingItemCategories._TSHIRTS, price:99.99, id: 'm39'},
    {name: "podkoszulek grand des scheme", image: "/products/male/tshirt_grand_des_scheme.jpg", category: clothingItemCategories._TSHIRTS, price:99.99, id: 'm40'},
    {name: "podkoszulek zielony", image: "/products/male/tshirt_green.jpg", category: clothingItemCategories._TSHIRTS, price:99.99, id: 'm41'},
    {name: "podkoszulek szary", image: "/products/male/tshirt_grey.jpg", category: clothingItemCategories._TSHIRTS, price:99.99, id: 'm42'},
    {name: "podkoszulek szary", image: "/products/male/tshirt_grey_2.jpg", category: clothingItemCategories._TSHIRTS, price:99.99, id: 'm43'},
    {name: "podkoszulek bordowy", image: "/products/male/tshirt_maroon.jpg", category: clothingItemCategories._TSHIRTS, price:99.99, id: 'm44'},
    {name: "podkoszulek bordowy", image: "/products/male/tshirt_maroon_2.jpg", category: clothingItemCategories._TSHIRTS, price:99.99, id: 'm45'},
    {name: "podkoszulek methodolical coffee", image: "/products/male/tshirt_methodical_coffee.jpg", category: clothingItemCategories._TSHIRTS, price:99.99, id: 'm46'},
    {name: "podkoszulek pulp fiction", image: "/products/male/tshirt_pulp_fiction.jpg", category: clothingItemCategories._TSHIRTS, price:99.99, id: 'm47'},
    {name: "podkoszulek pasiasty", image: "/products/male/tshirt_striped.jpg", category: clothingItemCategories._TSHIRTS, price:99.99, id: 'm48'},
    {name: "podkoszulek urban warrior", image: "/products/male/tshirt_urban_warrior.jpg", category: clothingItemCategories._TSHIRTS, price:99.99, id: 'm49'},
    {name: "podkoszulek biały adidas", image: "/products/male/tshirt_white_adidas.jpg", category: clothingItemCategories._TSHIRTS, price:99.9, id: 'm50'},
    {name: "podkoszulek famous enough", image: "/products/male/tshirt_white_famous_enough.jpg", category: clothingItemCategories._TSHIRTS, price:99.99, id: 'm51'},
    {name: "podkoszulek biały", image: "/products/male/tshirt_white.jpg", category: clothingItemCategories._TSHIRTS, price:99.99, id: 'm52'},
    {name: "podkoszulek żółty", image: "/products/male/tshirt_yellow.jpg", category: clothingItemCategories._TSHIRTS, price:99.99, id: 'm53'},
    {name: "podkoszulek żółty", image: "/products/male/tshirt_yellow_2.jpg", category: clothingItemCategories._TSHIRTS, price:99.99, id: 'm54'},
]

export const womensProducts: Array<ProductModel> = [
    {name: "bluza czarna", image: "/products/female/blouse_black.jpg", category: clothingItemCategories._BLOUSE, price:99.99, id: 'w1'},
    {name: "bluza pomarańczowa", image:"./products/female/blouse_orange.jpg", category: clothingItemCategories._BLOUSE, price:89.99, id: 'w2'},
    {name: "bluza różowa", image:"./products/female/blouse_pink.jpg", category: clothingItemCategories._BLOUSE, price:79.99, id: 'w3'},
    {name: "bluza czerwona", image:"./products/female/blouse_red.jpg", category: clothingItemCategories._BLOUSE, price:109.99, id: 'w4'},
    {name: "bluza żółta", image:"./products/female/blouse_yellow.jpg", category: clothingItemCategories._BLOUSE, price:89.99, id: 'w5'},
    {name: "kaszkiet", image:"./products/female/cap_1.jpg", category: clothingItemCategories._HAT, price:49.99, id: 'w6'},
    {name: "sukienka czarna ", image:"/products/female/dress_black.jpg", category: clothingItemCategories._DRESS, price:69.99, id: 'w7'},
    {name: "sukienka kwiecista czarna", image:"/products/female/dress_floral_black.jpg", category: clothingItemCategories._DRESS, price:69.99, id: 'w8'},
    {name: "sukienka kwiecista czerwona", image:"/products/female/dress_floral_red.jpg", category: clothingItemCategories._DRESS, price:69.99, id: 'w9'},
    {name: "sukienka czerwona", image:"/products/female/dress_red.jpg", category: clothingItemCategories._DRESS, price:69.99, id: 'w10'},
    {name: "sukienka pasiasta", image:"/products/female/dress_striped.jpg", category: clothingItemCategories._DRESS, price:69.99, id: 'w11'},
    {name: "sukienka krótka biała", image:"/products/female/dress_white_short.jpg", category: clothingItemCategories._DRESS, price:69.99, id: 'w12'},
    {name: "kapelusz letni", image:"/products/female/hat_summer.jpg", category: clothingItemCategories._HAT, price:69.99, id: 'w13'},
    {name: "kurtka czarna", image:"/products/female/jacket_black.jpg", category: clothingItemCategories._JACKET, price:69.99, id: 'w14'},
    {name: "kurtka szara", image:"/products/female/jacket_grey.jpg", category: clothingItemCategories._JACKET, price:69.99, id: 'w15'},
    {name: "kurtka jeansowa", image:"/products/female/jacket_jeans_1.jpg", category: clothingItemCategories._JACKET, price:69.99, id: 'w16'},
    {name: "kurtka jeansowa", image:"/products/female/jacket_jeans_2.jpg", category: clothingItemCategories._JACKET, price:69.99, id: 'w17'},
    {name: "kurtka jeansowa", image:"/products/female/jacket_jeans_3.jpg", category: clothingItemCategories._JACKET, price:69.99, id: 'w18'},
    {name: "kurtka jeansowa", image:"/products/female/jacket_jeans_4.jpg", category: clothingItemCategories._JACKET, price:69.99, id: 'w19'},
    {name: "kurtka napisy", image:"/products/female/jacket_streetwear.jpg", category: clothingItemCategories._JACKET, price:69.99, id: 'w20'},
    {name: "kurtka biała", image:"/products/female/jacket_white.jpg", category: clothingItemCategories._JACKET, price:69.99, id: 'w21'},
    {name: "sweter różowy", image:"/products/female/jumper_pink.jpg", category: clothingItemCategories._SWEATER, price:69.99, id: 'w22'},
    {name: "spodnie czerwone", image:"/products/female/pants_red.jpg", category: clothingItemCategories._PANTS, price:69.99, id: 'w23'},
    {name: "koszula różowa", image:"/products/female/shirt_pink.jpg", category: clothingItemCategories._SHIRT, price:69.99, id: 'w24'},
    {name: "koszula biała", image:"/products/female/shirt_white.jpg", category: clothingItemCategories._SHIRT, price:69.99, id: 'w25'},
    {name: "spódnica kraciasta", image:"/products/female/skirt_checked.jpg", category: clothingItemCategories._SKIRT, price:69.99, id: 'w26'},
    {name: "spódnica długa", image:"/products/female/skirt_long.jpg", price:69.99, category: clothingItemCategories._SKIRT, id: 'w27'},
    {name: "spódnica krótka czerwona", image:"/products/female/skirt_red_short.jpg", category: clothingItemCategories._SKIRT, price:69.99, id: 'w28'},
    {name: "okulary przeciwsłoneczne", image:"/products/female/sunglasses_1.jpg", category: clothingItemCategories._GLASSES, price:69.99, id: 'w29'},
    {name: "podkoszulek animal love", image:"/products/female/tshirt_animal_love.jpg", category: clothingItemCategories._TSHIRTS, price:69.99, id: 'w30'},
    {name: "podkoszulek beatles", image:"/products/female/tshirt_beatles.jpg", category: clothingItemCategories._TSHIRTS, price:69.99, id: 'w31'},
    {name: "podkoszulek czarny", image:"/products/female/tshirt_black.jpg", category: clothingItemCategories._TSHIRTS, price:69.99, id: 'w32'},
    {name: "podkoszulek czarny", image:"/products/female/tshirt_black_2.jpg", category: clothingItemCategories._TSHIRTS, price:69.99, id: 'w33'},
    {name: "podkoszulek czarny", image:"/products/female/tshirt_black_3.jpg", category: clothingItemCategories._TSHIRTS, price:69.99, id: 'w34'},
    {name: "podkoszulek czarny", image:"/products/female/tshirt_black_4.jpg", category: clothingItemCategories._TSHIRTS, price:69.99, id: 'w35'},
    {name: "podkoszulek czarny", image:"/products/female/tshirt_black_5.jpg", category: clothingItemCategories._TSHIRTS, price:69.99, id: 'w36'},
    {name: "podkoszulek czarny", image:"/products/female/tshirt_black_6.jpg", category: clothingItemCategories._TSHIRTS, price:69.99, id: 'w37'},
    {name: "podkoszulek czarny", image:"/products/female/tshirt_black_bones.jpg", category: clothingItemCategories._TSHIRTS, price:69.99, id: 'w38'},
    {name: "podkoszulek kwiaty", image:"/products/female/tshirt_flowers.jpg", category: clothingItemCategories._TSHIRTS, price:69.99, id: 'w39'},
    {name: "podkoszulek journey", image:"/products/female/tshirt_journey.jpg", category: clothingItemCategories._TSHIRTS, price:69.99, id: 'w40'},
    {name: "podkoszulek leave the road", image:"/products/female/female/tshirt_leave_the_road.jpg", category: clothingItemCategories._TSHIRTS, price:69.99, id: 'w41'},
    {name: "podkoszulek długi", image:"/products/female/tshirt_long.jpg", category: clothingItemCategories._TSHIRTS, price:69.99, id: 'w42'},
    {name: "podkoszulek los angeles", image:"/products/female/tshirt_los_angeles.jpg", category: clothingItemCategories._TSHIRTS, price:69.99, id: 'w43'},
    {name: "podkoszulek", image:"/products/female/tshirt_photo.jpg", category: clothingItemCategories._TSHIRTS, price:69.99, id: 'w44'},
    {name: "podkoszulek kolorowy", image:"/products/female/tshirt_printed.jpg", category: clothingItemCategories._TSHIRTS, price:69.99, id: 'w45'},
    {name: "podkoszulek pulp fiction", image:"/products/female/tshirt_pulp_fiction.jpg", category: clothingItemCategories._TSHIRTS, price:69.99, id: 'w46'},
    {name: "podkoszulek not today", image:"/products/female/tshirt_snake_red.jpg", category: clothingItemCategories._TSHIRTS, price:69.99, id: 'w47'},
    {name: "podkoszulek social savage", image:"/products/female/tshirt_social_savage.jpg", category: clothingItemCategories._TSHIRTS, price:69.99, id: 'w48'},
    {name: "podkoszulek vogue", image:"/products/female/tshirt_vogue.jpg", category: clothingItemCategories._TSHIRTS, price:69.99, id: 'w49'},
    {name: "podkoszulek biały", image:"/products/female/tshirt_white.jpg", category: clothingItemCategories._TSHIRTS, price:69.99, id: 'w50'},
    {name: "podkoszulek biały", image:"/products/female/tshirt_white_2.jpg", category: clothingItemCategories._TSHIRTS, price:69.99, id: 'w51'},
    {name: "podkoszulek żółty", image:"/products/female/tshirt_yellow.jpg", category: clothingItemCategories._TSHIRTS, price:69.99, id: 'w52'}
];


















