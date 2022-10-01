import { IsNotEmpty } from "class-validator";
import { type } from "os";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from "typeorm";
import { Order } from "../order/order.entity";
import { User } from "../user/user.entity";

@Entity()
export class PhoneNumber{

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    @IsNotEmpty()
    countryCode: string;

    @Column()
    @IsNotEmpty()
    phoneNumber: string;

    @ManyToOne(type => User)
    user: User;

    @Column()
    @RelationId((pn: PhoneNumber) => pn.user)
    userId: number;

    @OneToMany(type => Order, o => o.phoneNumber)
    orders: Order[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;


}