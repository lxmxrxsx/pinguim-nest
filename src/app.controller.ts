import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  Res,
  Response,
} from '@nestjs/common'
import { Pinguim } from './schemas/pinguim.schema'
import { PinguimService } from './pinguim.service'
import { CreatePinguimDto } from './dto/create-pinguim.dto'

@Controller('/pinguins')
export class AppController {
  constructor(private readonly pinguimService: PinguimService) {}

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
  createPinguim(@Body() request: CreatePinguimDto): Promise<Pinguim> {
    return this.pinguimService.create(request)
  }

  @Put('/:id')
  updatePinguim(@Param('id') id: string, @Body() request: CreatePinguimDto) {
    return this.pinguimService.update(id, request)
  }

  @Delete('/:id')
  deletePinguim(@Param('id') id: string) {
    return this.pinguimService.delete(id)
  }
}
