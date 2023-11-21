export const productos = [
    {
        id: 1,
        nombre: "Hamburguesa",
        precio: 3500,
        imagen: "https://img.freepik.com/foto-gratis/hamburguesa-parrilla-tomate-cebolla-papas-fritas-generada-ia_188544-43039.jpg?w=1380&t=st=1699225604~exp=1699226204~hmac=8348992bbed352dadac0393dcde6fd685001dedf6374344c601ba34611d97f6b",
        categoria: "Hamburguesas"
    },
    {
        id: 2,
        nombre: "Lomito",
        precio: 4900,
        imagen: "https://img.freepik.com/foto-gratis/primer-plano-deliciosa-hamburguesa-colombiana-casera-sobre-mesa_181624-32903.jpg?w=996&t=st=1699236563~exp=1699237163~hmac=51dba30dd9d986e677af2707a8cb9359b42a6a11b7082701dd9140b33998e3d6",
        categoria: "Lomitos"
    },
    {
        id: 3,
        nombre: "Pizza",
        precio: 2800,
        imagen: "https://img.freepik.com/foto-gratis/hora-pizza-sabrosa-pizza-tradicional-casera-receta-italiana_144627-42528.jpg?w=996&t=st=1699236586~exp=1699237186~hmac=ab2aeb7f86094d11b89c41de557fd93ceb216748a8d4794dc9968b90f437655f",
        categoria: "Pizzas"
    },
    {
        id: 4,
        nombre: "Cerveza",
        precio: 1800,
        imagen: "https://img.freepik.com/foto-gratis/close-up-cerveza-aperitivos-mesa-madera_23-2148306011.jpg?w=996&t=st=1699236602~exp=1699237202~hmac=6a74025dcd0678f9f9f0101df90d9a457712d164947bc71de70556d65b2025ee",
        categoria: "Cervezas"
    },
    {
        id: 5,
        nombre: "Gaseosa",
        precio: 1300,
        imagen: "https://img.freepik.com/foto-gratis/sirviendo-cola-botella-vaso-lleno-hielo_463209-157.jpg?w=996&t=st=1699236615~exp=1699237215~hmac=c62becbd8930052cc38a52cecfafa24a60a31a945df7923e3b7d9da52fc1de2b",
        categoria: "Sin alcohol"
    },
    {
        id: 6,
        nombre: "Agua",
        precio: 900,
        imagen: "https://img.freepik.com/foto-gratis/primer-plano-mujer-vierte-agua-vaso-cafe_169016-21808.jpg?w=996&t=st=1699236632~exp=1699237232~hmac=2762df24a7c4ed6515ddfec4a51d3763c2264301bfab8fc7bc851eeac61c8ce7",
        categoria: "Sin alcohol"
    }
];

JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));