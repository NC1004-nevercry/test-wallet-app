import { match } from "ts-pattern";
import { z } from "zod";

const WorldSchema = z.enum(["local", "stg", "prd"]);
export type World = z.infer<typeof WorldSchema>;

const ViteEnvSchema = z.object({
  VITE_WORLD: WorldSchema,
});
export type ViteEnv = z.infer<typeof ViteEnvSchema>;

export interface AppConfig {
  appTitle: string;
}

function generateAppConfig(): AppConfig {
  const viteEnv = ViteEnvSchema.parse({
    VITE_WORLD: import.meta.env.VITE_WORLD,
  });

  return match(viteEnv.VITE_WORLD)
    .with("local", () => ({
      appTitle: "Test-Wallet-App",
    }))
    .with("stg", () => ({
      appTitle: "Test-Wallet-App",
    }))
    .with("prd", () => ({
      appTitle: "Test-Wallet-App",
    }))
    .exhaustive();
}

export const appConfig = generateAppConfig();
