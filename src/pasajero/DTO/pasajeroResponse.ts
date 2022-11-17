import { ApiProperty } from '@nestjs/swagger';

export class PasajeroResponse {
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

  constructor(article) {
    this.id = article.id;
    this.nombre = article.nombre;
    this.apellido = article.apellido;
    this.dni = article.dni;
    this.direccion = article.direccion;
    this.telefono = article.telefono;
  }
}
