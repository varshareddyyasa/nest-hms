import { IsNotEmpty } from "class-validator";
import { Column, ColumnTypeUndefinedError, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Item } from "../item/item.entity";

@Entity()
export class MealTime{

    @PrimaryGeneratedColumn()
    id: number;

    //Breakfast, Lunch, Dinner
    @Column()
    @IsNotEmpty()
    name: string;

    //9:00AM-12:00PM, 12:00PM-3:00PM
    @Column()
    @IsNotEmpty()
    time: string;

    @OneToMany(type => Item, mt => mt.mealTime)
    items: Item[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}