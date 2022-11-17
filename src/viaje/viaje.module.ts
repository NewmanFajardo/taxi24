import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ViajeEntity } from './viaje.entity';
import { ViajeController } from './viaje.controller';
import { ViajeService } from './viaje.service';
import { FacturaModule } from '../factura/factura.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ViajeEntity
        ]),
        FacturaModule
    ],
    controllers: [ViajeController],
    providers: [ViajeService],
})
export class ViajeModule {}
