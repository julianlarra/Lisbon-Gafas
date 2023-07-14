
console.log(location.search) // lee los argumentos pasados a este formulario

var id=location.search.substr(4)

console.log(id)

const { createApp } = Vue

createApp({

    data() {

        return {

            id:0,
            codigo_producto:"",
            linea:"",
            modelo:"",
            color:"",
            precio:0,
            stock:"",
            imagen:"",
            
            url:'https://lisbongafas.pythonanywhere.com/productos/'  +id,

        }

    },

    methods: {

        fetchData(url) {

            fetch(url)

            .then(response => response.json())

            .then(data => {


                console.log(data)

                this.id               = data.id
                this.codigo_producto  = data.codigo_producto
                this.linea            = data.linea
                this.modelo           = data.modelo
                this.color            = data.color
                this.precio            = data.precio
                this.stock            = data.stock
                this.imagen            = data.imagen
            }) 

            .catch(err => {

                console.error(err);

                this.error=true

            })

        },

        modificar() {

            let producto = {

                codigo_producto: this.codigo_producto,
                linea:           this.linea,
                modelo:          this.modelo,
                color:           this.color,
                precio:          this.precio,
                stock:           this.stock,
                imagen:          this.imagen

            }

            var options = {

                body: JSON.stringify(producto),

                method: 'PUT',

                headers: { 'Content-Type': 'application/json' },

                redirect: 'follow'

            }

            fetch(this.url, options)

            .then(function () {

                alert("Registro  modificado");

                window.location.href = "productos.html";

            })

            .catch(err => {

                console.error(err);

                alert("Error al Modificar")

            })

        }

    },

    created() {

        this.fetchData(this.url)

    },

}).mount('#app')