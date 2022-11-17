import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class ViajeCreateDTO {
    @ApiProperty({
        example: 13,
        description: 'Id de la conductor',
    })
    @IsNumber()
    readonly conductorId: number;

    @ApiProperty({
        example: 21,
        description: 'Id de la pasajero',
    })
    @IsNumber()
    readonly pasajeroId: number;
}