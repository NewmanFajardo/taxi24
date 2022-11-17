import { ApiProperty } from '@nestjs/swagger';
import { PasajeroResponse } from '../../pasajero/DTO/pasajeroResponse';
import { ConductorResponse } from '../../conductor/DTO/conductorResponse';

export class ViajeResponse {
  @ApiProperty({
    example: '1',
    description: 'ID',
  })
  id: number;

  @ApiProperty({
    example: 'Estatus',
    description: 'estatus',
  })
  estatus: string;

  @ApiProperty({
    example: 'Conductor',
    description: 'conductor',
  })
  conductor: ConductorResponse;

  @ApiProperty({
    example: 'Pasajero',
    description: 'pasajero',
  })
  pasajero: PasajeroResponse;

  constructor(viaje) {
    this.id = viaje.id;
    this.estatus = viaje.estatus;
    this.conductor = new ConductorResponse(viaje.conductor);
    this.pasajero = new PasajeroResponse(viaje.pasajero);
  }
}
