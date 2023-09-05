document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form');

    form.addEventListener('submit', () => {
        e.preventDefault();                      //e.preventDefault previene la acción por defecto determinada del evento en el buscador
        const formData = new FormData(form);               // FormData(form) permite manejar los datos del form de una forma mas comoda
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;                 //se toma cada dato y se agrega al objeto data
        });

        try {
            const response = fetch("https://jsonplaceholder.typicode.com/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",          //el cuerpo son los datos que recopilamos antes 
                },
                body: JSON.stringify(data),
            });

            console.log("Success:", response.json());       //nos mostraria el json que enviamos pero como nos redirecciona no podemos verlo en consola 
        } catch (error) {
            console.error("Error:", error);
        }
    });
});