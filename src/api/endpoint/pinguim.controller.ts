import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Pinguim } from '../../schemas/pinguim.schema'
import { PinguimRepositoryImpl } from '../../infra/pinguim.repositoryImpl'
import { CreatePinguimRequest } from '../../dto/create-pinguim.request'

@Controller('/pinguins')
export class PinguimController {
  constructor(private readonly pinguimService: PinguimRepositoryImpl) {}

  @Get()
  getPinguins(): Promise<Pinguim[]> {
    return this.pinguimService.findAll()
  }

  @Get('/:id')
  getPinguim(@Param('id') id: string): Promise<Pinguim> {
    console.log('id', id)
    return this.pinguimService.findOne(id)
  }

  @Post()
  createPinguim(@Body() request: CreatePinguimRequest): Promise<Pinguim> {
    return this.pinguimService.create(request)
  }

  @Put('/:id')
  updatePinguim(
    @Param('id') id: string,
    @Body() request: CreatePinguimRequest,
  ) {
    return this.pinguimService.update(id, request)
  }

  @Delete('/:id')
  deletePinguim(@Param('id') id: string) {
    return this.pinguimService.delete(id)
  }
}
