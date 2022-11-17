import { ApiProperty } from '@nestjs/swagger';
import { ViajeResponse } from '../../viaje/DTO/viajeResponse';

export class FacturaResponse {
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
    example: 'Viaje',
    description: 'viaje',
  })
  viaje: ViajeResponse;

  constructor(factura) {
    this.id = factura.id;
    this.estatus = factura.estatus;
    this.viaje = new ViajeResponse(factura.viaje);
  }
}
