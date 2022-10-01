import { IsNotEmpty } from "class-validator";
import { type } from "os";
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from "typeorm";
import { Address } from "../address/address.entity";
import { Order } from "../order/order.entity";
import { PhoneNumber } from "../phone-number/phone-number.entity";


@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    firstName: string;
    
    @Column()
    @IsNotEmpty()
    lastName: string;

    @Column()
    @IsNotEmpty()
    emailId: string;

    @OneToMany(type => PhoneNumber, pn => pn.user)
    phoneNumbers: PhoneNumber[];

    @OneToMany(type => Address, add => add.user)
    addresses: Address[];

    @OneToMany(type => Order, o => o.user)
    orders: Order[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}