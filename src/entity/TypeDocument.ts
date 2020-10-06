import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class TypeDocuments {
  @PrimaryGeneratedColumn()
  id_typedocument: number;

  @Column()
  TypeDocument_Descriptyon: String;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}