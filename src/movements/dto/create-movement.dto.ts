import { IsNotEmpty } from "class-validator";

export class CreateMovementDto {
    @IsNotEmpty()
    product_id: number;
    movement_type_id: number;
    quantity: number;
}
