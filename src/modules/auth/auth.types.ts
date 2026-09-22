// import {z} from "zod";

// export const registerSchema = z.object({
//     firstName: z.string().trim().min(2, "First name must be at least 2 characters long").max(50, "First name must be at most 50 characters long"),

//     lastName: z.string().trim().min(2, "Last name must be at least 2 characters long").max(50, "Last name must be at most 50 characters long"),

//     email: z.string().trim().email("Please enter a valid email address").toLowerCase(),

//     password: z.string().min(8, "Password must be at least 8 characters long").max(100, "Password must be at most 100 characters long")
// });

// export const loginSchema = z.object({
//     email: z.string().trim().email("Invalid email address").toLowerCase(),
    
//     password: z.string().min(8, "Password must be at least 8 characters long").max(100, "Password must be at most 100 characters long")
// });