import { IsNotEmpty } from "class-validator";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Order } from "../order/order.entity";

@Entity()
export class OrderType{ 

    @PrimaryGeneratedColumn()
    id: number;

    //To-Go, PickUp
    @Column()
    @IsNotEmpty()
    type: string;

    @OneToMany(type => Order, o => o.orderType)
    orders: Order[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}