import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FacturaEntity } from './factura.entity';
import { Repository } from 'typeorm';
import { FacturaCreateDTO } from './DTO/facturaCreate.dto';

@Injectable()
export class FacturaService {
  constructor(@InjectRepository(FacturaEntity) readonly facturaRepository: Repository<FacturaEntity>){ }

  async getFacturas(): Promise<FacturaEntity[]> {
    return await this.facturaRepository.find({
      relations: {
        viaje: true,
      }
    });
  }
  
  async getFacturasPendientes(): Promise<FacturaEntity[]> {
    const facturasPendientes = await this.facturaRepository.find({
      where: {
        estatus: "Pendiente"
      },
      relations: {
        viaje: true,
      }
    });

    return facturasPendientes;
  }

  async getFacturasPagadas(): Promise<FacturaEntity[]> {
    const facturasPagadas = await this.facturaRepository.find({
      where: {
        estatus: "Pagada"
      },
      relations: {
        viaje: true,
      }
    });

    return facturasPagadas;
  }

  async getFactura(id: number): Promise<FacturaEntity> {
    const factura = await this.facturaRepository.find({
      where: {
        id
      },
      relations: {
        viaje: true,
      }
    });

    if(!factura.length){
      throw new NotFoundException("factura no encontrado")
    }

    return factura[0];
  }

  async crearFactura(data: FacturaCreateDTO): Promise<FacturaEntity> {
    const facturaParaCrear = this.facturaRepository.create({ 
      viaje: {
        id: data.viajeId
      },
      estatus: "Pendiente",
      monto: data.monto
    });

    const facturaCreado = await this.facturaRepository.save(facturaParaCrear);

    return facturaCreado;
  }

  async pagarFactura(id: number): Promise<FacturaEntity> {
    await this.facturaRepository.update(id,{ 
      estatus: "Pagada" 
    });

    const factura = await this.facturaRepository.find({
      where: {
        id
      },
      relations: {
        viaje: true,
      }
    });
    
    if(!factura.length){
      throw new NotFoundException("factura no encontrada")
    }

    return factura[0];
  }
}
