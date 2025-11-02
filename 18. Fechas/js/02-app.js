const diahoy = new Date();
moment.locale('es'); // Se indica a moment que queremos fechas en español
console.log(   moment().format('MMMM Do YYYY, h:mm:ss a', diahoy) ); // Imprime mes en letras


console.log( moment().add(3, 'days').calendar()); // Imprime fecha completa que finaliza en 3 días



console.log( moment().format('LLLL', diahoy) ); // Imprime fecha completa