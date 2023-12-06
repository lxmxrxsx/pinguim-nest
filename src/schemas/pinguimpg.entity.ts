import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Pinguimpg {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 30 })
  name: string

  @Column({ type: 'int' })
  age: number
}
