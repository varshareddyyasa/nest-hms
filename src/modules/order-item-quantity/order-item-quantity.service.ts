import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { OrderItemQuantity } from "./order-item-quantity.entity";

@Injectable()
export class OrderItemQuantityService extends TypeOrmCrudService<OrderItemQuantity>
{
    constructor(@InjectRepository(OrderItemQuantity) repo)
    {
        super(repo);
    }
}