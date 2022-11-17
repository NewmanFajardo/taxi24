import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class FacturaCreateDTO {
    @ApiProperty({
        example: 1,
        description: 'Id del viaje',
    })
    @IsNumber()
    readonly viajeId: number;

    @ApiProperty({
        example: 300,
        description: 'Monto de la factura',
    })
    @IsNumber()
    readonly monto: number;
}