import { PartialType } from '@nestjs/swagger'
import { CreatePinguimpgDto } from './create-pinguimpg.dto'

export class UpdatePinguimpgDto extends PartialType(CreatePinguimpgDto) {}
