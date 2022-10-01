import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { MealTime } from "./meal-time.entity";
import { MealTimeService } from "./meal-time.service";

@Crud({
    model: {
        type: MealTime
    }
})
@Controller('mealTime')
export class MealTimeController implements CrudController<MealTime>{
    constructor(public service: MealTimeService){}
}