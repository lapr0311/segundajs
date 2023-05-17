//entrada al mini super

alert("hola bienvenido al  mini super");



function miniSuper () {

    const productos = [
        { nombre: "galletas", precio: 500 },
        { nombre: "refresco", precio: 1800 },
        { nombre: "manzana", precio: 1000 },
        { nombre: "platano", precio: 1500 },
        { nombre: "palta", precio: 2500 },
        { nombre: "huevos", precio: 600 },
        { nombre: "leche", precio: 1100 },
        { nombre: "hielo", precio: 1800 },
        { nombre: "agua", precio: 1000 },
        { nombre: "marraqueta", precio: 800 },

    ];






    let carrito = []

    let seleccion = prompt("hola deseas comprar algunos de mis productos si o no ?");

    while (seleccion != "si" && seleccion != "no") {
        alert("ingresa si o no")
        seleccion = prompt("hola deseas comprar algunos de mis productos si o no ?")
    }


    if (seleccion == "si") {
        alert(" estos son los productos que tengo disponibles")

        let todosLosProductos = productos.map(
            (producto) => producto.nombre + "  " + producto.precio + "$"
        );

        alert(todosLosProductos.join("-"))
    }
    else if (seleccion == "no") {
        alert("gracias , nos vemos pronto")
    }


    while (seleccion != "no") {
        let agregarProducto = prompt("agrega el producto")
        let precio = 0
        let seleccionValida = true


        switch (agregarProducto) {

            case "galletas":
                precio = 500;
                break;
            case "refresco":
                precio = 1800;
                break;
            case "manzana":
                precio = 1000;
                break;
            case "platano":
                precio = 1500;
                break;
            case "palta":
                precio = 2500;
                break;
            case "huevos":
                precio = 600;
                break;
            case "leche":
                precio = 1100;
                break;
            case "hielo":
                precio = 1800;
                break;
            case "agua":
                precio = 1000;
                break;
            case "marraqueta":
                precio = 800;
                break;
            default:
                alert("no tengo ese producto")
                seleccionValida = false
                break;
        }

         if (seleccionValida == false) {
             return;
         }



        let unidades = parseInt(prompt("cuantas unidades quieres llevar?"))
        carrito.push({ agregarProducto, unidades, precio })



        seleccion = prompt("desea agregar mas producto")

        while (seleccion === "no") {
            alert("gracias por tu compra");
            carrito.forEach((finalCompra) => {
                alert(`prodcuto : ${JSON.stringify(finalCompra.agregarProducto)}, unidades: ${finalCompra.unidades}
                     tu total es ${finalCompra.unidades * finalCompra.precio}`)
            }
            )
            break;



        }


    }

    const totalCompra = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
    alert(` tu total de compra es ${totalCompra}`);



}
 miniSuper();



