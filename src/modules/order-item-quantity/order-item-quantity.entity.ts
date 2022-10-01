import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from "typeorm";
import { Item } from "../item/item.entity";
import { Order } from "../order/order.entity";

@Entity()
export class OrderItemQuantity{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Item)
    item: Item;

    @Column()
    @RelationId((i: OrderItemQuantity) => i.item)
    itemId: number;

    @ManyToOne(type => Order)
    order: Order;

    @Column()
    @RelationId((o: OrderItemQuantity) => o.order)
    orderId: number;

    @Column()
    quantity: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}