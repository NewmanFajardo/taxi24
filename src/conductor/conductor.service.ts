import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConductorEntity } from './conductor.entity';

@Injectable()
export class ConductorService {
  constructor( @InjectRepository(ConductorEntity) readonly conductorRepository: Repository<ConductorEntity>) {}

  async getConductores(): Promise<ConductorEntity[]> {
    return await this.conductorRepository.find({
      relations: {
        vehiculo: true,
      }
    });
  }

  async getConductor(id: number): Promise<ConductorEntity> {
    const conductor = await this.conductorRepository.find({
      where: {
        id
      },
      relations: {
        vehiculo: true,
      }
    });

    if(!conductor.length){
      throw new NotFoundException("conductor no encontrado")
    }

    return conductor[0];
  }
}
