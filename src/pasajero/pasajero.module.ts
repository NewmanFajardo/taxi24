import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasajeroController } from './pasajero.controller';
import { PasajeroEntity } from './pasajero.entity';
import { PasajeroService } from './pasajero.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            PasajeroEntity
        ])
    ],
    controllers: [PasajeroController],
    providers: [PasajeroService],
})
export class PasajeroModule {}
