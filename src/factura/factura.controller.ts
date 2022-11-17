import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';

import { FacturaService } from './factura.service';
import { FacturaResponse } from './DTO/facturaResponse';
import { FacturaCreateDTO } from './DTO/facturaCreate.dto';

@ApiTags('factura')
@Controller('factura')
export class FacturaController {
  constructor( private readonly facturaService: FacturaService ){}

  @Get()
  @ApiOperation({
    summary: 'Todos las facturas',
  })
  @ApiOkResponse({
    description: 'Todos las facturas encontrado',
    type: [FacturaResponse],
  })
  getFacturas(){
    return this.facturaService.getFacturas()
  }
  
  @Get("/pendientes")
  @ApiOperation({
    summary: 'Todos las facturas pendientes',
  })
  @ApiOkResponse({
    description: 'Todos las facturas pendientes',
    type: [FacturaResponse],
  })
  getFacturasPendientes(){
    return this.facturaService.getFacturasPendientes()
  }

  @Get("/pagadas")
  @ApiOperation({
    summary: 'Todos las facturas pagadas',
  })
  @ApiOkResponse({
    description: 'Todos las facturas pagadas',
    type: [FacturaResponse],
  })
  getFacturasPagadas(){
    return this.facturaService.getFacturasPagadas()
  }

  @Get('/:id')
  @ApiOperation({
    summary: 'Obtener una factura',
  })
  @ApiOkResponse({
    description: 'Obtener una facturas',
    type: FacturaResponse,
  })
  getFactura(
    @Param('id') id: number
  ){
    return this.facturaService.getFactura(id)
  }

  @Post('/')
  @ApiOperation({
    summary: 'Crear una factura',
  })
  @ApiOkResponse({
    description: 'Crear una factura',
    type: FacturaResponse,
  })
  crearFactura(
    @Body() factura: FacturaCreateDTO
  ){
    return this.facturaService.crearFactura(factura)
  }

  @Patch('/:id')
  @ApiOperation({
    summary: 'Crear una factura',
  })
  @ApiOkResponse({
    description: 'Crear una factura',
    type: FacturaResponse,
  })
  pagarFactura(
    @Param('id') id: number
  ){
    return this.facturaService.pagarFactura(id)
  }
}
