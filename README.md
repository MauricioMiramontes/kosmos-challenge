# Challenge: Dominio de React JS para Plataforma Kosmos.
1. El challenge consiste en:
a. Armar un formulario que sea dinámico. Se espera que puedas agregar y
eliminar campos desde la interfaz gráfica.
b. Crear un archivo json con los diferentes campos que pueden agregarse.
c. La interfaz se debe dividir en dos. Un lado donde salga la lista de los campos
que pueden agregarse y del otro lado un formulario donde se irán agregando
los campos que se elijan. También se debe poder eliminar campos del
formulario.
d. Incluye como mínimo estos 3 tipos de campos:
i. Text
ii. Select
iii. Opciones (tipo radio)
e. Puedes utilizar algún framework de estilos o directamente crear tus estilos.
2. Subir el código a github y subir su demo en algún servicio como “netlify”, “vercel” o
“github pages”
https://goofy-davinci-c55613.netlify.app
3. Comparte tu URL a Ruben / Bryan de Kosmos para que podamos hacer la
evaluación técnica. Si tu repo es público, mejor.
● El tiempo es tomado en consideración. Se espera lograr el objetivo entre 2 horas y 3
como máximo.
● Se considerarán buenas prácticas de desarrollo con React.
● No se permite realizar plagio.
Ejemplo de JSON sugerido:
```
fields: [
    {
        component: "text",
        label: "First Name",
        type: "text",
        _uid: "5b9b79d2-32f2-42a1-b89f-203dfc0b6b98"
    },
    {
        component: "text",
        label: "Last Name",
        type: "text",
        _uid: "6eff3638-80a7-4427-b07b-4c1be1c6b186"
    }
]
```