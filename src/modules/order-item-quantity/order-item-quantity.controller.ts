import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { OrderItemQuantity } from "./order-item-quantity.entity";
import { OrderItemQuantityService } from "./order-item-quantity.service";
@Crud({
    model: {
        type: OrderItemQuantity
    }
})
@Controller('orderItemQuantity')
export class OrderItemQuantityController implements CrudController<OrderItemQuantity>
{
    constructor(public service: OrderItemQuantityService){}
}