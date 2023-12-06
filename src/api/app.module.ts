import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Pinguimpg } from '../schemas/pinguimpg.entity'
import { PinguimpgController } from './endpoint/pinguimpg.controller'
import { PinguimpgService } from '../infra/pinguimpg.service'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '',
      username: 'le',
      entities: [Pinguimpg],
      database: 'pinguim',
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Pinguimpg]),
  ],
  controllers: [PinguimpgController],
  providers: [PinguimpgService],
})
export class AppModule {}
