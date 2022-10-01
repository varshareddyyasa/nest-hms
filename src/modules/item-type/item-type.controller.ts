import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { ItemType } from "./item-type.entity";
import { ItemTypeService } from "./item-type.service";

@Crud({
    model: {
        type: ItemType
    }
})
@Controller('itemType')
export class ItemTypeController implements CrudController<ItemType>{
    constructor(public service: ItemTypeService){}
}