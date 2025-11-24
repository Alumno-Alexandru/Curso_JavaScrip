const metodoPago='efectivo';

    switch(metodoPago){
        case 'efectivo':
            console.log(`Pagaste con ${efectivo}`);
            break;
        case 'cheque':
            console.log(`Pagas con cheque`);
            console.log(`Talonario`)
            break;
        default:
            console.log('No has seleccionado ningun metodo');
            break;
    }