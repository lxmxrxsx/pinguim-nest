import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Pinguim } from '../schemas/pinguim.schema'
import { CreatePinguimRequest } from '../dto/create-pinguim.request'
import { PinguimRepository } from './pinguim.repository'

@Injectable()
export class PinguimRepositoryImpl implements PinguimRepository {
  constructor(
    @InjectModel(Pinguim.name) private pinguimModel: Model<Pinguim>,
  ) {}

  async create(createPinguimRequest: CreatePinguimRequest): Promise<Pinguim> {
    const createdPinguim = new this.pinguimModel(createPinguimRequest)
    return createdPinguim.save()
  }

  async findAll(): Promise<Pinguim[]> {
    return this.pinguimModel.find().exec()
  }

  async findOne(id: string): Promise<Pinguim> {
    return this.pinguimModel.findById(id).exec()
  }

  async update(id: string, pinguim: CreatePinguimRequest): Promise<Pinguim> {
    return await this.pinguimModel.findByIdAndUpdate(id, pinguim).exec()
  }

  async delete(id: string): Promise<Pinguim> {
    return await this.pinguimModel.findByIdAndDelete(id).exec()
  }
}
