import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { OrderType } from "./order-type.entity";
import { OrderTypeService } from "./order-type.service";
@Crud({
    model: {
    type: OrderType
}})
@Controller('orderType')
export class OrderTypeController implements CrudController<OrderType>
{
    constructor(public service: OrderTypeService){}
}