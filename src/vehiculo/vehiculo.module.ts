import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiculoEntity } from './vehiculo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      VehiculoEntity
    ])
  ],
})
export class VehiculoModule {}
