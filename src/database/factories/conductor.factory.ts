import { define } from 'typeorm-seeding'
import { 
    randLastName,
    randFirstName,
    randAddress,
    randPhoneNumber,
    randNumber,
    randColor,
    randAlphaNumeric,
    randVehicleModel,
    randVehicleType 
} from '@ngneat/falso';
import { ConductorEntity } from "../../conductor/conductor.entity";
import { VehiculoEntity } from "../../vehiculo/vehiculo.entity";

define( ConductorEntity, () => {
    const conductor = new ConductorEntity();
    
    conductor.nombre = randFirstName();
    conductor.apellido = randLastName();
    conductor.direccion = randAddress().city;
    conductor.telefono = randPhoneNumber();
    conductor.dni = randNumber().toString();

    
    const vehiculo = new VehiculoEntity();
    vehiculo.color = randColor();
    vehiculo.placa = randAlphaNumeric().toString();
    vehiculo.marca = randVehicleType();
    vehiculo.modelo = randVehicleModel();

    conductor.vehiculo = vehiculo;

    return conductor;
} );