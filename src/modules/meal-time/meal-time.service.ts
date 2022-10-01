import { Injectable } from "@nestjs/common";
import { InjectRepository, TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { MealTime } from "./meal-time.entity";

@Injectable()
export class MealTimeService extends TypeOrmCrudService<MealTime>{
    constructor(@InjectRepository(MealTime) repo)
    {
        super(repo);
    }
}