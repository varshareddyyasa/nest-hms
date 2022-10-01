import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { ItemType } from "./item-type.entity";

@Injectable()
export class ItemTypeService extends TypeOrmCrudService<ItemType>{
    constructor(@InjectRepository(ItemType) repo)
    {
        super(repo);
    }
}