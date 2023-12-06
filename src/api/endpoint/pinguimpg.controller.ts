import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { PinguimpgService } from '../../infra/pinguimpg.service'
import { CreatePinguimpgDto } from '../dto/create-pinguimpg.dto'
import { UpdatePinguimpgDto } from '../dto/update-pinguimpg.dto'

@Controller('/pinguins')
export class PinguimpgController {
  constructor(private readonly pinguimpgService: PinguimpgService) {}

  @Post()
  create(@Body() createPinguimpgDto: CreatePinguimpgDto) {
    return this.pinguimpgService.create(createPinguimpgDto)
  }

  @Get()
  findAll() {
    return this.pinguimpgService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pinguimpgService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePinguimpgDto: UpdatePinguimpgDto,
  ) {
    return this.pinguimpgService.update(+id, updatePinguimpgDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pinguimpgService.remove(+id)
  }
}
