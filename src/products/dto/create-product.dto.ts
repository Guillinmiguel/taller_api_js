import { IsNotEmpty } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    product_type_id: number;
    description: String;
}
