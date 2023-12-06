import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { PinguimController } from './endpoint/pinguim.controller'
import { PinguimRepositoryImpl } from '../infra/pinguim.repositoryImpl'
import { Pinguim, PinguimSchema } from '../schemas/pinguim.schema'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestApp'),
    MongooseModule.forFeature([{ name: Pinguim.name, schema: PinguimSchema }]),
  ],
  controllers: [PinguimController],
  providers: [PinguimRepositoryImpl],
})
export class AppModule {}
