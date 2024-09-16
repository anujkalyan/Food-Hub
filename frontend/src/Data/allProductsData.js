import fastfood from "../images/food5.webp";
import southindian from "../images/food6.jpg";
import Italian from "../images/food8.jpg";
import indianfood from "../images/food7.jpg";
import shake from "../images/food9.jpg";
import desert from "../images/food10.jpg";


const productsData = [
    {
        id: "1",
        imgsrc: fastfood,
        title: "Fast Food",
        info: "I’m not drooling, you are!",
        link: "/products/fastfood"
    },
    {
        id: "2",
        imgsrc: Italian,
        title: "Italian",
        info: "Pizza is only love triangle I want to be involved in.",
        link: "/product"
    },
    {
        id: "3",
        imgsrc: southindian,
        title: "South Indian",
        info: "Straight from....South to Mouth",
        link: "/products/southindian"
    },
    {
        id: "4",
        imgsrc: indianfood,
        title: "Indian",
        info: "Take a break, it’s lunchtime.",
        link: "/products/indianfood"
    },

    {
        id: "5",
        imgsrc: shake,
        title: "Shakes",
        info: "Blended with tender love and care.",
        link: "/products/shake"
    },
    {
        id: "6",
        imgsrc: desert,
        title: "Desserts",
        info: "Life is uncertain. Eat dessert first.",
        link: "/products/deserts"
    },


];

export default productsData;
