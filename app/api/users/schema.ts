import { z } from "zod";

const UserSchema = z.object({
    id: z.number(),
    name: z.string().min(3).max(1)
});

export default UserSchema;