import { IsNotEmpty } from "class-validator";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from "typeorm";
import { Category } from "../category/category.entity";
import { ItemType } from "../item-type/item-type.entity";
import { MealTime } from "../meal-time/meal-time.entity";
import { OrderItemQuantity } from "../order-item-quantity/order-item-quantity.entity";
import { Order } from "../order/order.entity";

@Entity()
export class Item{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => ItemType)
    itemType: ItemType;

    @Column()
    @RelationId((it: Item) => it.itemType)
    itemTypeId: number;
    
    @ManyToOne(type => MealTime)
    mealTime: MealTime;

    @Column()
    @RelationId((mt: Item) => mt.mealTime)
    mealTimeId: number;

    @ManyToOne(type => Category)
    category: Category;

    @Column()
    @RelationId((cat: Item) => cat.category)
    categoryId: number;

    @Column()
    @IsNotEmpty()
    name: string;

    @Column()
    @IsNotEmpty()
    prize: string;

    @Column()
    @IsNotEmpty()
    calorieCount: string;

    @Column()
    @IsNotEmpty()
    description: string;

    @OneToMany(type => OrderItemQuantity, i => i.item)
    orderItemQuantities: OrderItemQuantity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}