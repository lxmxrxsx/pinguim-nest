import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Pinguim } from './schemas/pinguim.schema'
import { CreatePinguimDto } from './dto/create-pinguim.dto'

@Injectable()
export class PinguimService {
  constructor(
    @InjectModel(Pinguim.name) private pinguimModel: Model<Pinguim>,
  ) {}

  async create(createPinguimDto: CreatePinguimDto): Promise<Pinguim> {
    const createdPinguim = new this.pinguimModel(createPinguimDto)
    console.log('createdPinguim', createdPinguim)
    return createdPinguim.save()
  }

  async findAll(): Promise<Pinguim[]> {
    return this.pinguimModel.find().exec()
  }

  async findOne(id: string): Promise<Pinguim> {
    return this.pinguimModel.findById(id).exec()
  }

  async update(id: string, pinguim: CreatePinguimDto) {
    return await this.pinguimModel.findByIdAndUpdate(id, pinguim).exec()
  }

  async delete(id: string) {
    return await this.pinguimModel.findByIdAndDelete(id).exec()
  }
}
