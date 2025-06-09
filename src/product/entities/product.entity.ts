import { Column, Entity, IsNull, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export default class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({  nullable: false })
  title: string;
  @Column({ nullable: true })
  description: string;
  @Column({ nullable: true })
  price: number;
}