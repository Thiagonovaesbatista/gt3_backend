import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Companys {
  @PrimaryGeneratedColumn()
  id_Company: number;

  @Column()
  company_cgc: boolean;

  @Column()
  company_name: string;

  @Column()
  company_cep: number;

  @Column()
  company_adress: string;

  @Column()
  company_ad_complemento: string;

  @Column()
  company_ddi: number;

  @Column()
  company_ddd: number;

  @Column()
  company_phone: number;

  @Column()
  company_notes: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}