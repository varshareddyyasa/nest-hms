import { IsNotEmpty } from "class-validator";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from "typeorm";
import { Address } from "../address/address.entity";
import { Item } from "../item/item.entity";
import { OrderItemQuantity } from "../order-item-quantity/order-item-quantity.entity";
import { OrderType } from "../order-type/order-type.entity";
import { PhoneNumber } from "../phone-number/phone-number.entity";
import { User } from "../user/user.entity";

@Entity()
export class Order{

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => OrderItemQuantity, o => o.item)
    orderItemQuantities: OrderItemQuantity[];

    @ManyToOne(type => OrderType)
    orderType: OrderType;

    @Column()
    @RelationId((ot: Order) => ot.orderType)
    orderTypeId: number;

    @ManyToOne(type => User)
    user: User;

    @Column()
    @RelationId((u: Order) => u.user)
    userId: number;

    @ManyToOne(type => Address)
    address: Address;

    @Column()
    @RelationId((a: Order) => a.address)
    addressId: number;

    @ManyToOne(type => PhoneNumber)
    phoneNumber: PhoneNumber;

    @Column()
    @RelationId((p: Order) => p.phoneNumber)
    phoneNumberId: number;

    @Column()
    @IsNotEmpty()
    deliveryName: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}