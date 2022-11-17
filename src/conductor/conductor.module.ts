import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConductorEntity } from './conductor.entity';
import { ConductorController } from './conductor.controller';
import { ConductorService } from './conductor.service';
import { VehiculoEntity } from '../vehiculo/vehiculo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ConductorEntity,
      VehiculoEntity
    ])
  ],
  controllers: [ConductorController],
  providers: [ConductorService],
})
export class ConductorModule {}
