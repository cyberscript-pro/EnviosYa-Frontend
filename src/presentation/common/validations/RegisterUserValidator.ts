import z from "zod";

export const RegisterUserValidatorSchema = z.object({
  fullName: z.string().min(2, { message: "El Nombre es Requerido" }),
  email: z.email({ message: "Email inválido" }),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
  profilePictureUrl: z.string().optional(),
  phone: z.string().optional(),
});

export type RegisterUserInputs = z.infer<typeof RegisterUserValidatorSchema>;