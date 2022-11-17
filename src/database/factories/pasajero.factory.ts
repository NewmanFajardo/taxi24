import { PasajeroEntity } from "../../pasajero/pasajero.entity";
import { define } from 'typeorm-seeding'
import { randLastName, randFirstName, randAddress, randPhoneNumber, randNumber } from '@ngneat/falso';

define( PasajeroEntity, () => {
    const pasajero = new PasajeroEntity();
    
    pasajero.nombre = randFirstName();
    pasajero.apellido = randLastName();
    pasajero.direccion = randAddress().city;
    pasajero.telefono = randPhoneNumber();
    pasajero.dni = randNumber({ length: 10 }).toString();

    return pasajero;
} );