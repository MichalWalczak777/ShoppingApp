import { ProductModel } from "./models/ProductModel";

const _BLAZERS = 'marynarki';
const _BLOUSES = 'bluzy';
const _HATS = 'czapki i kapelusze';
const _OUTWEAR = 'kurtki i płaszcze';
const _SHIRTS = 'koszule';
const _GLASSES = 'okulary';
const _SWEATERS = 'swetry';
const _TSHIRTS = 'podkoszulki';

export const mensProducts: Array<ProductModel> = [
    {name: "marynarka szara bez rękawów", image: "/products/male/blazer_sleevless_grey.jpg", category: _BLAZERS, price:99.99, id: 'm1'},
    {name: "bluza czarna", image: "/products/male/blouse_black.jpg", category: _BLOUSES, price:99.99, id: 'm2'},
    {name: "bluza niebieska", image: "/products/male/blouse_blue.jpg", category: _BLOUSES, price:99.99, id: 'm3'},
    {name: "bluza zielona", image: "/products/male/blouse_green.jpg", category: _BLOUSES, price:99.99, id: 'm4'},
    {name: "bluza szara adidas", image: "/products/male/blouse_grey_adidas.jpg", category: _BLOUSES, price:99.99, id: 'm5'},
    {name: "czapka żółta", image: "/products/male/cap_yellow.jpg", category: _HATS, price:99.99, id: 'm6'},
    {name: "płaszcz czarny", image: "/products/male/coat_black.jpg", category: _OUTWEAR, price:99.99, id: 'm7'},
    {name: "kurtka niebieska", image: "/products/male/jacket_blue.jpg", category: _OUTWEAR, price:99.99, id: 'm8'},
    {name: "kurtka brązowa", image: "/products/male/jacket_brown.jpg", category: _OUTWEAR, price:99.99, id: 'm9'},
    {name: "kurtka jeansowa", image: "/products/male/jacket_jeans.jpg", category: _OUTWEAR, price:99.99, id: 'm10'},
    {name: "kurtka jeansowa", image: "/products/male/jacket_jeans_2.jpg", category: _OUTWEAR, price:99.99, id: 'm11'},
    {name: "kurtka skórzana", image: "/products/male/jacket_leather.jpg", category: _OUTWEAR, price:99.99, id: 'm12'},
    {name: "kurtka skórzana", image: "/products/male/jacket_leather_2.jpg", category: _OUTWEAR, price:99.99, id: 'm13'},
    {name: "kurtka przeciwdeszczowa zielona", image: "/products/male/jacket_rainproof_green.jpg", category: _OUTWEAR, price:99.99, id: 'm14'},
    {name: "kurtka czerwona", image: "/products/male/jacket_red.jpg", category: _OUTWEAR, price:99.99, id: 'm15'},
    {name: "kurtka biała", image: "/products/male/jacket_white.jpg", category: _OUTWEAR, price:99.9, id: 'm16'},
    {name: "czapka z daszkiem", image: "/products/male/peaked_cap.jpg", category: _HATS, price:99.99, id: 'm17'},
    {name: "koszula czarna", image: "/products/male/shirt_black.jpg", category: _SHIRTS, price:99.99, id: 'm18'},
    {name: "koszula niebieska", image: "/products/male/shirt_blue.jpg", category: _SHIRTS, price:99.99, id: 'm19'},
    {name: "koszula niebieska", image: "/products/male/shirt_blue_2.jpg", category: _SHIRTS, price:99.99, id: 'm20'},
    {name: "koszula kraciasta niebieska", image: "/products/male/shirt_checked_blue.jpg", category: _SHIRTS, price:99.99, id: 'm21'},
    {name: "koszula kraciasta czerwona", image: "/products/male/shirt_checked_red.jpg", category: _SHIRTS, price:99.99, id: 'm22'},
    {name: "koszula kraciasta biała", image: "/products/male/shirt_checked_white.jpg", category: _SHIRTS, price:99.99, id: 'm23'},
    {name: "koszula kwiecista czarno-biała", image: "/products/male/shirt_floral_black_white.jpg", category: _SHIRTS, price:99.99, id: 'm24'},
    {name: "koszula kwiecista czarna", image: "/products/male/shirt_floral_black.jpg", category: _SHIRTS, price:99.99, id: 'm25'},
    {name: "koszula kwiecista biała", image: "/products/male/shirt_floral_white.jpg", category: _SHIRTS, price:99.99, id: 'm26'},
    {name: "koszula kwiecista", image: "/products/male/shirt_floral.jpg", category: _SHIRTS, price:99.99, id: 'm27'},
    {name: "koszula zielona", image: "/products/male/shirt_green.jpg", category: _SHIRTS, price:99.99, id: 'm28'},
    {name: "koszula jeansowa", image: "/products/male/shirt_jeans.jpg", category: _SHIRTS, price:99.99, id: 'm29'},
    {name: "koszula pomarańczowa", image: "/products/male/shirt_orange.jpg", category: _SHIRTS, price:99.99, id: 'm30'},
    {name: "koszula wzorzysta", image: "/products/male/shirt_patterned.jpg", category: _SHIRTS, price:99.99, id: 'm31'},
    {name: "koszula biała", image: "/products/male/shirt_white.jpg", category: _SHIRTS, price:99.99, id: 'm32'},
    {name: "okulary przeciwsłoneczne", image: "/products/male/sunglasses_1.jpg", category: _GLASSES, price:99.99, id: 'm33'},
    {name: "sweter bullets", image: "/products/male/sweater_bullets.jpg", category: _SWEATERS, price:99.99, id: 'm34'},
    {name: "sweter grey", image: "/products/male/sweater_grey.jpg", category: _SWEATERS, price:99.99, id: 'm35'},
    {name: "sweter red", image: "/products/male/sweater_red.jpg", category: _SWEATERS, price:99.99, id: 'm36'},
    {name: "podkoszulek kości", image: "/products/male/tshirt_black_bones.jpg", category: _TSHIRTS, price:99.99, id: 'm37'},
    {name: "podkoszulek czarny", image: "/products/male/tshirt_black.jpg", category: _TSHIRTS, price:99.99, id: 'm38'},
    {name: "podkoszulek dragon ball", image: "/products/male/tshirt_dragon_ball.jpg", category: _TSHIRTS, price:99.99, id: 'm39'},
    {name: "podkoszulek grand des scheme", image: "/products/male/tshirt_grand_des_scheme.jpg", category: _TSHIRTS, price:99.99, id: 'm40'},
    {name: "podkoszulek zielony", image: "/products/male/tshirt_green.jpg", category: _TSHIRTS, price:99.99, id: 'm41'},
    {name: "podkoszulek szary", image: "/products/male/tshirt_grey.jpg", category: _TSHIRTS, price:99.99, id: 'm42'},
    {name: "podkoszulek szary", image: "/products/male/tshirt_grey_2.jpg", category: _TSHIRTS, price:99.99, id: 'm43'},
    {name: "podkoszulek bordowy", image: "/products/male/tshirt_maroon.jpg", category: _TSHIRTS, price:99.99, id: 'm44'},
    {name: "podkoszulek bordowy", image: "/products/male/tshirt_maroon_2.jpg", category: _TSHIRTS, price:99.99, id: 'm45'},
    {name: "podkoszulek methodolical coffee", image: "/products/male/tshirt_methodical_coffee.jpg", category: _TSHIRTS, price:99.99, id: 'm46'},
    {name: "podkoszulek pulp fiction", image: "/products/male/tshirt_pulp_fiction.jpg", category: _TSHIRTS, price:99.99, id: 'm47'},
    {name: "podkoszulek pasiasty", image: "/products/male/tshirt_striped.jpg", category: _TSHIRTS, price:99.99, id: 'm48'},
    {name: "podkoszulek urban warrior", image: "/products/male/tshirt_urban_warrior.jpg", category: _TSHIRTS, price:99.99, id: 'm49'},
    {name: "podkoszulek biały adidas", image: "/products/male/tshirt_white_adidas.jpg", category: _TSHIRTS, price:99.9, id: 'm50'},
    {name: "podkoszulek famous enough", image: "/products/male/tshirt_white_famous_enough.jpg", category: _TSHIRTS, price:99.99, id: 'm51'},
    {name: "podkoszulek biały", image: "/products/male/tshirt_white.jpg", category: _TSHIRTS, price:99.99, id: 'm52'},
    {name: "podkoszulek żółty", image: "/products/male/tshirt_yellow.jpg", category: _TSHIRTS, price:99.99, id: 'm53'},
    {name: "podkoszulek żółty", image: "/products/male/tshirt_yellow_2.jpg", category: _TSHIRTS, price:99.99, id: 'm54'},



















]