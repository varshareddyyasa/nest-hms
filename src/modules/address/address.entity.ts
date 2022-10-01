import { IsNotEmpty, IsOptional } from "class-validator";
import { columns } from "mssql";
import { type } from "os";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from "typeorm";
import { Order } from "../order/order.entity";
import { User } from "../user/user.entity";

@Entity()
export class Address{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    lineOne: string;

    @Column({nullable: true})
    @IsOptional()
    lineTwo: string;

    @Column()
    @IsNotEmpty()
    city: string;

    @Column()
    @IsNotEmpty()
    state: string;

    @Column()
    @IsNotEmpty()
    zipCode: string;

    @Column()
    @IsNotEmpty()
    country: string;

    @ManyToOne(type => User)
    user: User;

    @Column()
    @RelationId((add: Address) => add.user)
    userId: number;

    @OneToMany(type => Order, o => o.address)
    orders: Order[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;





}