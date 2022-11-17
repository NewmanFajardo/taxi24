import { ApiProperty } from '@nestjs/swagger';
import { VehiculoResponse } from 'src/vehiculo/DTO/vehiculoResponse';

export class ConductorResponse {
  @ApiProperty({
    example: '1',
    description: 'ID',
  })
  id: number;

  @ApiProperty({
    example: 'Nombre',
    description: 'nombre',
  })
  nombre: string;
  
  @ApiProperty({
    example: 'Apellido',
    description: 'apellido',
  })
  apellido: string;
  
  @ApiProperty({
    example: 'DNI',
    description: 'dni',
  })
  dni: string;
  
  @ApiProperty({
    example: 'Direccion',
    description: 'direccion',
  })
  direccion: string;
  
  @ApiProperty({
    example: 'Telefono',
    description: 'telefono',
  })
  telefono: string;
  
  @ApiProperty({
    example: 'vehiculo',
    description: 'vehiculo',
  })
  vehiculo: VehiculoResponse;
  
  constructor(conductor) {
    this.id = conductor.id;
    this.nombre = conductor.nombre;
    this.apellido = conductor.apellido;
    this.dni = conductor.dni;
    this.direccion = conductor.direccion;
    this.telefono = conductor.telefono;
    this.vehiculo = new VehiculoResponse(conductor.vehiculo);
  }
}
