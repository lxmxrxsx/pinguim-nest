import { Injectable } from '@nestjs/common'
import { CreatePinguimpgDto } from '../api/dto/create-pinguimpg.dto'
import { UpdatePinguimpgDto } from '../api/dto/update-pinguimpg.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Pinguimpg } from '../schemas/pinguimpg.entity'
import { Repository } from 'typeorm'

@Injectable()
export class PinguimpgService {
  constructor(
    @InjectRepository(Pinguimpg)
    private readonly pinguimpgRepository: Repository<Pinguimpg>,
  ) {}
  create(createPinguimpgDto: CreatePinguimpgDto) {
    return this.pinguimpgRepository.save(createPinguimpgDto)
  }

  findAll() {
    return this.pinguimpgRepository.find()
  }

  findOne(id: number) {
    return this.pinguimpgRepository.findBy({ id })
  }

  update(id: number, updatePinguimpgDto: UpdatePinguimpgDto) {
    return this.pinguimpgRepository.update(id, updatePinguimpgDto)
  }

  remove(id: number) {
    return this.pinguimpgRepository.delete(id)
  }
}
