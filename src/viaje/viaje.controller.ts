import { Controller, Get, Param, Post, Body, Patch} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import { ViajeCreateDTO } from './DTO/viajeCreate.dto';
import { ViajeResponse } from './DTO/viajeResponse';
import { ViajeService } from './viaje.service';

@ApiTags('viaje')
@Controller('viaje')
export class ViajeController {
  constructor( private readonly viajeService: ViajeService ){}

  @Get()
  @ApiOperation({
    summary: 'Todos los viajes',
  })
  @ApiOkResponse({
    description: 'Todos los viajes encontrado',
    type: [ViajeResponse],
  })
  getViajes(){
    return this.viajeService.getViajes()
  }
  
  @Get("/activos")
  @ApiOperation({
    summary: 'Todos los viajes activos',
  })
  @ApiOkResponse({
    description: 'Todos los viajes activos',
    type: [ViajeResponse],
  })
  getViajesActivos(){
    return this.viajeService.getViajesActivos()
  }

  @Get("/completados")
  @ApiOperation({
    summary: 'Todos los viajes completados',
  })
  @ApiOkResponse({
    description: 'Todos los viajes completados',
    type: [ViajeResponse],
  })
  getViajesCompletados(){
    return this.viajeService.getViajesCompletados()
  }

  @Get("/pagados")
  @ApiOperation({
    summary: 'Todos los viajes pagados',
  })
  @ApiOkResponse({
    description: 'Todos los viajes pagados',
    type: [ViajeResponse],
  })
  getViajesPagados(){
    return this.viajeService.getViajesPagados()
  }

  @Get('/:id')
  @ApiOperation({
    summary: 'Obtener un pasajero',
  })
  @ApiOkResponse({
    description: 'Obtener un pasajero',
    type: ViajeResponse,
  })
  getViaje(
    @Param('id') id: number
  ){
    return this.viajeService.getViaje(id)
  }

  @Post('/')
  @ApiOperation({
    summary: 'Crear un viaje',
  })
  @ApiOkResponse({
    description: 'Crear un viaje',
    type: ViajeResponse,
  })
  CrearViaje(
    @Body() viaje: ViajeCreateDTO
  ){
    return this.viajeService.CrearViaje(viaje)
  }

  @Patch('/:id')
  @ApiOperation({
    summary: 'Completar un viaje',
  })
  @ApiOkResponse({
    description: 'Completar un viaje',
    type: ViajeResponse,
  })
  completarViaje(
    @Param('id') id: number
  ){
    return this.viajeService.completarViaje(id)
  }
}
