import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ViajeCreateDTO } from './DTO/viajeCreate.dto';
import { ViajeEntity } from './viaje.entity';
import { FacturaService } from '../factura/factura.service';

@Injectable()
export class ViajeService {
  constructor( 
    @InjectRepository(ViajeEntity) readonly viajeRepository: Repository<ViajeEntity>,
    private readonly facturaService: FacturaService  
  ) {}


  async getViajes(): Promise<ViajeEntity[]> {
    return await this.viajeRepository.find({
      relations: {
        condutor: true,
        pasajero: true,
      }
    });
  }
  
  async getViajesActivos(): Promise<ViajeEntity[]> {
    const viajesActivos = await this.viajeRepository.find({
      where: {
        estatus: "Activo"
      },
      relations: {
        condutor: true,
        pasajero: true,
      }
    });

    return viajesActivos;
  }

  async getViajesCompletados(): Promise<ViajeEntity[]> {
    const viajesCompletados = await this.viajeRepository.find({
      where: {
        estatus: "Completado"
      },
      relations: {
        condutor: true,
        pasajero: true,
      }
    });

    return viajesCompletados;
  }

  async getViajesPagados(): Promise<ViajeEntity[]> {
    const viajesPagados = await this.viajeRepository.find({
      where: {
        estatus: "Pagado"
      },
      relations: {
        condutor: true,
        pasajero: true,
      }
    });

    return viajesPagados;
  }

  async getViaje(id: number): Promise<ViajeEntity> {
    const viaje = await this.viajeRepository.find({
      where: {
        id
      },
      relations: {
        condutor: true,
        pasajero: true,
      }
    });

    if(!viaje.length){
      throw new NotFoundException("viaje no encontrado")
    }

    return viaje[0];
  }

  async CrearViaje(viaje: ViajeCreateDTO): Promise<ViajeEntity> {
    const viajeParaCrear = this.viajeRepository.create({ 
      condutor: {
        id: viaje.conductorId
      },
      pasajero: {
        id: viaje.pasajeroId
      },
      estatus: "Activo" 
    });

    const viajeCreado = await this.viajeRepository.save(viajeParaCrear);

    return viajeCreado;
  }

  async completarViaje(id: number): Promise<ViajeEntity> {
    await this.viajeRepository.update(id,{ 
      estatus: "Completado" 
    });

    const viaje = await this.viajeRepository.find({
      where: {
        id
      },
      relations: {
        condutor: true,
        pasajero: true,
      }
    });
    
    if(!viaje.length){
      throw new NotFoundException("viaje no encontrado")
    }

    return viaje[0];
  }
}
