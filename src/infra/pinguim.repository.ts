import { Pinguim } from '../schemas/pinguim.schema'
import { CreatePinguimRequest } from '../dto/create-pinguim.request'

export interface PinguimRepository {
  create(createPinguimRequest: CreatePinguimRequest): Promise<Pinguim>
  findAll(): Promise<Pinguim[]>
  findOne(id: string): Promise<Pinguim>
  update(id: string, pinguim: CreatePinguimRequest): Promise<Pinguim>
  delete(id: string): Promise<Pinguim>
}
