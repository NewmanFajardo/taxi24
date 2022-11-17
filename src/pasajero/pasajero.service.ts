import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PasajeroEntity } from './pasajero.entity';

@Injectable()
export class PasajeroService {
  constructor( @InjectRepository(PasajeroEntity) readonly pasajeroRepository: Repository<PasajeroEntity>) {}

  async getPasajeros(): Promise<PasajeroEntity[]> {
    return await this.pasajeroRepository.find();
  }

  async getPasajero(id: number): Promise<PasajeroEntity> {
    const pasajero = await this.pasajeroRepository.findOneBy({ id });

    if(!pasajero){
      throw new NotFoundException("pasajero no encontrado")
    }

    return pasajero;
  }
}