import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacturaEntity } from './factura.entity';
import { FacturaService } from './factura.service';
import { FacturaController } from './factura.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            FacturaEntity
        ])
    ],
    exports: [FacturaService],
    providers: [FacturaService],
    controllers: [FacturaController],
})
export class FacturaModule {}