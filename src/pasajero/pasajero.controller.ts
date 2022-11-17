import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import { PasajeroResponse } from './DTO/pasajeroResponse';
import { PasajeroService } from './pasajero.service';

@ApiTags('pasajero')
@Controller('pasajero')
export class PasajeroController {
  constructor( private readonly pasajeroService: PasajeroService ){}

  @Get()
  @ApiOperation({
    summary: 'Todos los pasajeros',
  })
  @ApiOkResponse({
    description: 'Todos los pasajeros encontrado',
    type: [PasajeroResponse],
  })
  getPasajeros(){
    return this.pasajeroService.getPasajeros()
  }

  @Get('/:id')
  @ApiOperation({
    summary: 'Obtener un pasajero',
  })
  @ApiOkResponse({
    description: 'Obtener un pasajero',
    type: PasajeroResponse,
  })
  getPasajero(
    @Param('id') id: number
  ){
    return this.pasajeroService.getPasajero(id)
  }
}
