import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { OrderType } from "./order-type.entity";

@Injectable()
export class OrderTypeService extends TypeOrmCrudService<OrderType>
{
    constructor(@InjectRepository(OrderType) repo)
    {
        super(repo);
    }
}