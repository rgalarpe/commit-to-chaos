import { z } from "zod";

const ProductSchema = z.object({
    name: z.string().min(3).max(15),
    price: z.number().positive().min(1).max(999)
});

export default ProductSchema;