import { email, z } from "zod";

const UserSchema = z.object({
    name: z.string().min(3).max(20),
    email: z.email()
});

export default UserSchema;