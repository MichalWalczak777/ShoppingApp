import { ProductModel } from "./models/ProductModel";
import * as clothingItemCategories from "./categories/clothingItemCategories";
import * as clothingGenderCategories from "./categories/clothingGenderCategories";

export const mockClothingItems: Array<ProductModel> = [
  {
    name: "koszula kraciasta niebieska",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/kids/shirt_checked_blue.jpg?raw=true",
    category: clothingItemCategories._SHIRTS,
    genderCategory: clothingGenderCategories._KID,
    price: 99.99,
    id: "k1",
  },
  {
    name: "koszula kraciasta czerwona",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/kids/shirt_checked_red.jpg?raw=true",
    category: clothingItemCategories._SHIRTS,
    genderCategory: clothingGenderCategories._KID,
    price: 99.99,
    id: "k2",
  },
  {
    name: "koszula ciemna",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/kids/shirt_dark.jpg?raw=true",
    category: clothingItemCategories._SHIRTS,
    genderCategory: clothingGenderCategories._KID,
    price: 99.99,
    id: "k3",
  },
  {
    name: "spódnica wzorzysta",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/kids/skirt_patterned.jpg?raw=true",
    category: clothingItemCategories._SKIRTS,
    genderCategory: clothingGenderCategories._KID,
    price: 99.99,
    id: "k4",
  },
  {
    name: "sweter wzorzysty",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/kids/sweater_patterned.jpg?raw=true",
    category: clothingItemCategories._SWEATERS,
    genderCategory: clothingGenderCategories._KID,
    price: 99.99,
    id: "k5",
  },
  {
    name: "tshirt future leader",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/kids/tshirt_future_leader.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._KID,
    price: 99.99,
    id: "k6",
  },
  {
    name: "marynarka szara bez rękawów",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/blazer_sleevless_grey.jpg?raw=true",
    category: clothingItemCategories._BLAZERS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m1",
  },
  {
    name: "bluza czarna",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/blouse_black.jpg?raw=true",
    category: clothingItemCategories._BLOUSES,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m2",
  },
  {
    name: "bluza niebieska",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/blouse_blue.jpg?raw=true",
    category: clothingItemCategories._BLOUSES,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m3",
  },
  {
    name: "bluza zielona",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/blouse_green.jpg?raw=true",
    category: clothingItemCategories._BLOUSES,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m4",
  },
  {
    name: "bluza szara adidas",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/blouse_grey_adidas.jpg?raw=true",
    category: clothingItemCategories._BLOUSES,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m5",
  },
  {
    name: "czapka żółta",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/cap_yellow.jpg?raw=true",
    category: clothingItemCategories._HATS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m6",
  },
  {
    name: "płaszcz czarny",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/coat_black.jpg?raw=true",
    category: clothingItemCategories._OUTWEAR,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m7",
  },
  {
    name: "kurtka niebieska",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/jacket_blue.jpg?raw=true",
    category: clothingItemCategories._OUTWEAR,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m8",
  },
  {
    name: "kurtka brązowa",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/jacket_brown.jpg?raw=true",
    category: clothingItemCategories._OUTWEAR,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m9",
  },
  {
    name: "kurtka jeansowa",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/jacket_jeans.jpg?raw=true",
    category: clothingItemCategories._OUTWEAR,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m10",
  },
  {
    name: "kurtka jeansowa",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/jacket_jeans_2.jpg?raw=true",
    category: clothingItemCategories._OUTWEAR,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m11",
  },
  {
    name: "kurtka skórzana",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/jacket_leather.jpg?raw=true",
    category: clothingItemCategories._OUTWEAR,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m12",
  },
  {
    name: "kurtka skórzana",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/jacket_leather_2.jpg?raw=true",
    category: clothingItemCategories._OUTWEAR,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m13",
  },
  {
    name: "kurtka przeciwdeszczowa zielona",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/jacket_rainproof_green.jpg?raw=true",
    category: clothingItemCategories._OUTWEAR,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m14",
  },
  {
    name: "kurtka czerwona",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/jacket_red.jpg?raw=true",
    category: clothingItemCategories._OUTWEAR,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m15",
  },
  {
    name: "kurtka biała",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/jacket_white.jpg?raw=true",
    category: clothingItemCategories._OUTWEAR,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.9,
    id: "m16",
  },
  {
    name: "czapka z daszkiem",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/peaked_cap.jpg?raw=true",
    category: clothingItemCategories._HATS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m17",
  },
  {
    name: "koszula czarna",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/shirt_black.jpg?raw=true",
    category: clothingItemCategories._SHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m18",
  },
  {
    name: "koszula niebieska",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/shirt_blue.jpg?raw=true",
    category: clothingItemCategories._SHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m19",
  },
  {
    name: "koszula niebieska",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/shirt_blue_2.jpg?raw=true",
    category: clothingItemCategories._SHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m20",
  },
  {
    name: "koszula kraciasta niebieska",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/shirt_checked_blue.jpg?raw=true",
    category: clothingItemCategories._SHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m21",
  },
  {
    name: "koszula kraciasta czerwona",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/shirt_checked_red.jpg?raw=true",
    category: clothingItemCategories._SHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m22",
  },
  {
    name: "koszula kraciasta biała",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/shirt_checked_white.jpg?raw=true",
    category: clothingItemCategories._SHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m23",
  },
  {
    name: "koszula kwiecista czarno-biała",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/shirt_floral_black_white.jpg?raw=true",
    category: clothingItemCategories._SHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m24",
  },
  {
    name: "koszula kwiecista czarna",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/shirt_floral_black.jpg?raw=true",
    category: clothingItemCategories._SHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m25",
  },
  {
    name: "koszula kwiecista biała",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/shirt_floral_white.jpg?raw=true",
    category: clothingItemCategories._SHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m26",
  },
  {
    name: "koszula kwiecista",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/shirt_floral.jpg?raw=true",
    category: clothingItemCategories._SHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m27",
  },
  {
    name: "koszula zielona",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/shirt_green.jpg?raw=true",
    category: clothingItemCategories._SHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m28",
  },
  {
    name: "koszula jeansowa",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/shirt_jeans.jpg?raw=true",
    category: clothingItemCategories._SHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m29",
  },
  {
    name: "koszula pomarańczowa",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/shirt_orange.jpg?raw=true",
    category: clothingItemCategories._SHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m30",
  },
  {
    name: "koszula wzorzysta",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/shirt_patterned.jpg?raw=true",
    category: clothingItemCategories._SHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m31",
  },
  {
    name: "koszula biała",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/shirt_white.jpg?raw=true",
    category: clothingItemCategories._SHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m32",
  },
  {
    name: "okulary przeciwsłoneczne",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/sunglasses_1.jpg?raw=true",
    category: clothingItemCategories._GLASSES,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m33",
  },
  {
    name: "sweter bullets",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/sweater_bullets.jpg?raw=true",
    category: clothingItemCategories._SWEATERS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m34",
  },
  {
    name: "sweter grey",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/sweater_grey.jpg?raw=true",
    category: clothingItemCategories._SWEATERS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m35",
  },
  {
    name: "sweter red",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/sweater_red.jpg?raw=true",
    category: clothingItemCategories._SWEATERS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m36",
  },
  {
    name: "podkoszulek kości",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/tshirt_black_bones.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m37",
  },
  {
    name: "podkoszulek czarny",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/tshirt_black.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m38",
  },
  {
    name: "podkoszulek dragon ball",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/tshirt_dragon_ball.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m39",
  },
  {
    name: "podkoszulek grand des scheme",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/tshirt_grand_des_scheme.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m40",
  },
  {
    name: "podkoszulek zielony",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/tshirt_green.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m41",
  },
  {
    name: "podkoszulek szary",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/tshirt_grey.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m42",
  },
  {
    name: "podkoszulek szary",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/tshirt_grey_2.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m43",
  },
  {
    name: "podkoszulek bordowy",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/tshirt_maroon.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m44",
  },
  {
    name: "podkoszulek bordowy",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/tshirt_maroon_2.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m45",
  },
  {
    name: "podkoszulek methodolical coffee",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/tshirt_methodical_coffee.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m46",
  },
  {
    name: "podkoszulek pulp fiction",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/tshirt_pulp_fiction.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m47",
  },
  {
    name: "podkoszulek pasiasty",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/tshirt_striped.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m48",
  },
  {
    name: "podkoszulek urban warrior",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/tshirt_urban_warrior.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m49",
  },
  {
    name: "podkoszulek biały adidas",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/tshirt_white_adidas.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.9,
    id: "m50",
  },
  {
    name: "podkoszulek famous enough",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/tshirt_white_famous_enough.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m51",
  },
  {
    name: "podkoszulek biały",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/tshirt_white.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m52",
  },
  {
    name: "podkoszulek żółty",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/tshirt_yellow.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m53",
  },
  {
    name: "podkoszulek żółty",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/male/tshirt_yellow_2.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._MAN,
    price: 99.99,
    id: "m54",
  },
  {
    name: "bluza czarna",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/blouse_black.jpg?raw=true",
    category: clothingItemCategories._BLOUSE,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 99.99,
    id: "w1",
  },
  {
    name: "bluza pomarańczowa",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/blouse_orange.jpg?raw=true",
    category: clothingItemCategories._BLOUSE,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 89.99,
    id: "w2",
  },
  {
    name: "bluza różowa",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/blouse_pink.jpg?raw=true",
    category: clothingItemCategories._BLOUSE,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 79.99,
    id: "w3",
  },
  {
    name: "bluza czerwona",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/blouse_red.jpg?raw=true",
    category: clothingItemCategories._BLOUSE,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 109.99,
    id: "w4",
  },
  {
    name: "bluza żółta",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/blouse_yellow.jpg?raw=true",
    category: clothingItemCategories._BLOUSE,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 89.99,
    id: "w5",
  },
  {
    name: "kaszkiet",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/cap_1.jpg?raw=true",
    category: clothingItemCategories._HAT,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 49.99,
    id: "w6",
  },
  {
    name: "sukienka czarna ",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/dress_black.jpg?raw=true",
    category: clothingItemCategories._DRESS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w7",
  },
  {
    name: "sukienka kwiecista czarna",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/dress_floral_black.jpg?raw=true",
    category: clothingItemCategories._DRESS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w8",
  },
  {
    name: "sukienka kwiecista czerwona",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/dress_floral_red.jpg?raw=true",
    category: clothingItemCategories._DRESS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w9",
  },
  {
    name: "sukienka czerwona",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/dress_red.jpg?raw=true",
    category: clothingItemCategories._DRESS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w10",
  },
  {
    name: "sukienka pasiasta",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/dress_striped.jpg?raw=true",
    category: clothingItemCategories._DRESS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w11",
  },
  {
    name: "sukienka krótka biała",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/dress_white_short.jpg?raw=true",
    category: clothingItemCategories._DRESS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w12",
  },
  {
    name: "kapelusz letni",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/hat_summer.jpg?raw=true",
    category: clothingItemCategories._HAT,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w13",
  },
  {
    name: "kurtka czarna",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/jacket_black.jpg?raw=true",
    category: clothingItemCategories._JACKET,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w14",
  },
  {
    name: "kurtka szara",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/jacket_grey.jpg?raw=true",
    category: clothingItemCategories._JACKET,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w15",
  },
  {
    name: "kurtka jeansowa",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/jacket_jeans_1.jpg?raw=true",
    category: clothingItemCategories._JACKET,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w16",
  },
  {
    name: "kurtka jeansowa",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/jacket_jeans_2.jpg?raw=true",
    category: clothingItemCategories._JACKET,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w17",
  },
  {
    name: "kurtka jeansowa",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/jacket_jeans_3.jpg?raw=true",
    category: clothingItemCategories._JACKET,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w18",
  },
  {
    name: "kurtka jeansowa",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/jacket_jeans_4.jpg?raw=true",
    category: clothingItemCategories._JACKET,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w19",
  },
  {
    name: "kurtka napisy",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/jacket_streetwear.jpg?raw=true",
    category: clothingItemCategories._JACKET,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w20",
  },
  {
    name: "kurtka biała",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/jacket_white.jpg?raw=true",
    category: clothingItemCategories._JACKET,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w21",
  },
  {
    name: "sweter różowy",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/jumper_pink.jpg?raw=true",
    category: clothingItemCategories._SWEATER,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w22",
  },
  {
    name: "spodnie czerwone",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/pants_red.jpg?raw=true",
    category: clothingItemCategories._PANTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w23",
  },
  {
    name: "koszula różowa",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/shirt_pink.jpg?raw=true",
    category: clothingItemCategories._SHIRT,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w24",
  },
  {
    name: "koszula biała",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/shirt_white.jpg?raw=true",
    category: clothingItemCategories._SHIRT,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w25",
  },
  {
    name: "spódnica kraciasta",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/skirt_checked.jpg?raw=true",
    category: clothingItemCategories._SKIRT,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w26",
  },
  {
    name: "spódnica długa",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/skirt_long.jpg?raw=true",
    price: 69.99,
    category: clothingItemCategories._SKIRT,
    genderCategory: clothingGenderCategories._WOMAN,
    id: "w27",
  },
  {
    name: "spódnica krótka czerwona",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/skirt_red_short.jpg?raw=true",
    category: clothingItemCategories._SKIRT,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w28",
  },
  {
    name: "okulary przeciwsłoneczne",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/sunglasses_1.jpg?raw=true",
    category: clothingItemCategories._GLASSES,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w29",
  },
  {
    name: "podkoszulek animal love",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/tshirt_animal_love.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w30",
  },
  {
    name: "podkoszulek beatles",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/tshirt_beatles.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w31",
  },
  {
    name: "podkoszulek czarny",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/tshirt_black.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w32",
  },
  {
    name: "podkoszulek czarny",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/tshirt_black_2.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w33",
  },
  {
    name: "podkoszulek czarny",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/tshirt_black_3.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w34",
  },
  {
    name: "podkoszulek czarny",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/tshirt_black_4.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w35",
  },
  {
    name: "podkoszulek czarny",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/tshirt_black_5.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w36",
  },
  {
    name: "podkoszulek czarny",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/tshirt_black_6.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w37",
  },
  {
    name: "podkoszulek czarny",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/tshirt_black_bones.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w38",
  },
  {
    name: "podkoszulek kwiaty",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/tshirt_flowers.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w39",
  },
  {
    name: "podkoszulek journey",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/tshirt_journey.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w40",
  },
  {
    name: "podkoszulek leave the road",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/female/tshirt_leave_the_road.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w41",
  },
  {
    name: "podkoszulek długi",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/tshirt_long.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w42",
  },
  {
    name: "podkoszulek los angeles",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/tshirt_los_angeles.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w43",
  },
  {
    name: "podkoszulek",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/tshirt_photo.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w44",
  },
  {
    name: "podkoszulek kolorowy",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/tshirt_printed.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w45",
  },
  {
    name: "podkoszulek pulp fiction",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/tshirt_pulp_fiction.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w46",
  },
  {
    name: "podkoszulek not today",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/tshirt_snake_red.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w47",
  },
  {
    name: "podkoszulek social savage",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/tshirt_social_savage.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w48",
  },
  {
    name: "podkoszulek vogue",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/tshirt_vogue.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w49",
  },
  {
    name: "podkoszulek biały",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/tshirt_white.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w50",
  },
  {
    name: "podkoszulek biały",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/tshirt_white_2.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w51",
  },
  {
    name: "podkoszulek żółty",
    image:
      "https://github.com/MichalWalczak777/pictures/blob/main/female/tshirt_yellow.jpg?raw=true",
    category: clothingItemCategories._TSHIRTS,
    genderCategory: clothingGenderCategories._WOMAN,
    price: 69.99,
    id: "w52",
  },
];
