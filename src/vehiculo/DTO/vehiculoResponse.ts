import { ApiProperty } from '@nestjs/swagger';

export class VehiculoResponse {
  @ApiProperty({
    example: '1',
    description: 'ID',
  })
  id: number;

  @ApiProperty({
    example: 'Marca',
    description: 'marca',
  })
  marca: string;

  @ApiProperty({
    example: 'Placa',
    description: 'placa',
  })
  placa: string;
  
  @ApiProperty({
    example: 'Modelo',
    description: 'modelo',
  })
  modelo: string;
  
  @ApiProperty({
    example: 'Color',
    description: 'color',
  })
  color: string;

  constructor(vehiculo) {
    this.id = vehiculo.id;
    this.marca = vehiculo.marca;
    this.placa = vehiculo.placa;
    this.modelo = vehiculo.modelo;
    this.color = vehiculo.color;
  }
}
