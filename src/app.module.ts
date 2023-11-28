import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { PinguimService } from './pinguim.service'
import { Pinguim, PinguimSchema } from './schemas/pinguim.schema'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestApp'),
    MongooseModule.forFeature([{ name: Pinguim.name, schema: PinguimSchema }]),
  ],
  controllers: [AppController],
  providers: [PinguimService],
})
export class AppModule {}
