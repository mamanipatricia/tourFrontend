import axios from 'axios'

const render = (cities) => {
    return `
    <button id="tours" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Ver Todos los Tours
    </button>
    // AGREGAR EL EVENTO PARA MOSSTRAR TODOS LOS CITIES...
        <table border=1>
            <thead>
                <th>Name Tour</th>
                <th>Depart</th>
                <th>Arrive</th>
                <th>PLace City</th>
                <th>Available</th>
            </thead>
            <tbody>
            ${cities.map(city => {
        return `<tr>
                        <td>${city.nameTour}</td>
                        <td>${city.depart}</td>
                        <td>${city.arrive}</td>
                        <td>${city.city}</td>
                        <td>${city.quantity - city.filled}</td>
                    </tr>`
    })}

            </tbody>
        </table>
    `
}

const overwriteApp = (data) => {
    document.getElementById('app').innerHTML = render(data)
}
// const getRoles = () => {

// }
const getCities = () => {
    let token = localStorage.getItem('_TOKEN')
    axios
        .get("http://localhost:3000/city-tour", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(function (response) {
            // handle success
            console.log("**********");
            console.log(response.status); // 200 201 403 500
            console.log(response.data);
            console.log("**********");

            const cities = response.data;
            // debugger
            overwriteApp(cities);

        })

        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });



}
const getMyCities = () => {
    let token = localStorage.getItem('_TOKEN')
    axios
        .get("http://localhost:3000/users/1/city-tours", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(function (response) {
            // handle success
            console.log("**********");
            console.log(response.status); // 200 201 403 500
            console.log(response.data);
            console.log("**********");

            const cities = response.data;
            // debugger
            overwriteApp(cities);

        })

        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });



}
export { getCities, getMyCities }