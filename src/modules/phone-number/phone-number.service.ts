import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { PhoneNumber } from "./phone-number.entity";

@Injectable()
export class PhoneNumberService extends TypeOrmCrudService<PhoneNumber>
{
    constructor(@InjectRepository(PhoneNumber) repo)
    {
        super(repo);
    }
}