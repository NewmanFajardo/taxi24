import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import { ConductorService } from './conductor.service';
import { ConductorResponse } from './DTO/conductorResponse';

@ApiTags('conductor')
@Controller('conductor')
export class ConductorController {
  constructor( private readonly conductorService: ConductorService ){}

  @Get()
  @ApiOperation({
    summary: 'Todos los pasajeros',
  })
  @ApiOkResponse({
    description: 'Todos los pasajeros encontrado',
    type: [ConductorResponse],
  })
  getConductores(){
    return this.conductorService.getConductores()
  }

  @Get('/:id')
  @ApiOperation({
    summary: 'Obtener un pasajero',
  })
  @ApiOkResponse({
    description: 'Obtener un pasajero',
    type: ConductorResponse,
  })
  getConductor(
    @Param('id') id: number
  ){
    return this.conductorService.getConductor(id)
  }
}
