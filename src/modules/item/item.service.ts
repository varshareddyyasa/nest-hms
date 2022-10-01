import { Injectable } from "@nestjs/common";
import { InjectRepository, TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Item } from "./item.entity";

@Injectable()
export class ItemService extends TypeOrmCrudService<Item>{
    constructor(@InjectRepository(Item) repo)
    {
        super(repo);
    }
}