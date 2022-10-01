import { IsNotEmpty } from "class-validator";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Item } from "../item/item.entity";

@Entity()
export class ItemType{

    @PrimaryGeneratedColumn()
    id: number;

    //{veg/ non-veg}
    @Column()
    @IsNotEmpty()
    name: string;

    @OneToMany(type => Item, it => it.itemType)
    items: Item[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}