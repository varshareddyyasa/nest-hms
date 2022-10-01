import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { Item } from "./item.entity";
import { ItemService } from "./item.service";

@Crud({
    model: {
        type: Item
    }
})
@Controller('item')
export class ItemController implements CrudController<Item>{
    constructor(public service: ItemService){}
}