//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Nutrition')
export class NutritionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  description: string;

  @Column('integer', { nullable: true })
  relatedCustomer: number;

  @Column('text', { nullable: true })
  foodItem: string;

  @Column('real', { nullable: true })
  quantity: number;

  @Column('integer', { nullable: true })
  calories: number;

  @Column('text', { nullable: true })
  macronutrients: string;

  @Column('date', { nullable: true })
  date: Date;
}
