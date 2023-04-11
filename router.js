import { createRouter, createWebHistory } from "vue-router";


const routes = [
    { 
        path: "/envios",
    name: "Envios",
},   { 
    path: "/cobertura",
name: "App",
},   
{ 
    path: "/calculadora",
name: "Calculadora",
},  
{ 
    path: "/formulario",
name: "Formulario",
},    
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;