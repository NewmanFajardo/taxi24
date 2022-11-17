import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { PasajeroModule } from './pasajero/pasajero.module';
import { DatabaseModule } from './database/database.module';
import { ConductorModule } from './conductor/conductor.module';
import { VehiculoModule } from './vehiculo/vehiculo.module';
import { ViajeModule } from './viaje/viaje.module';
import { FacturaModule } from './factura/factura.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    PasajeroModule,
    DatabaseModule,
    ConductorModule,
    VehiculoModule,
    FacturaModule,
    ViajeModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule { }
