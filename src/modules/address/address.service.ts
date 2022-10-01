import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Address } from "./address.entity"

@Injectable()
export class AddressService extends TypeOrmCrudService<Address>{
    constructor(@InjectRepository(Address) repo)
    {
        super(repo);
    }
}