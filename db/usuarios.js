export let dBusuarios = [
    {
        id: 1,
        user: "Mariano",
        pass: "1234",
        admin: true,
    },
];

JSON.parse(localStorage.getItem("usuarios")) || localStorage.setItem("usuarios", JSON.stringify(dBusuarios));