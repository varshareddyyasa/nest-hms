import { IsNotEmpty } from "class-validator";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Item } from "../item/item.entity";

@Entity()
export class Category{

    @PrimaryGeneratedColumn()
    id: number;

    //Appetizer, MainMenu, Drinks, Desert
    @Column()
    @IsNotEmpty()
    name: string;

    @OneToMany(type => Item, cat => cat.category)
    items: Item[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
    
}