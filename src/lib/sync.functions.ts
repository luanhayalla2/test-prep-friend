import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export type SyncPayload = Record<string, unknown>;

export const getUserState = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    const { data, error } = await supabase
      .from("user_state")
      .select("data, updated_at")
      .eq("user_id", userId)
      .maybeSingle();
    if (error) throw new Error(error.message);
    return {
      data: (data?.data ?? null) as SyncPayload | null,
      updatedAt: data?.updated_at ?? null,
    };
  });

export const saveUserState = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { data: SyncPayload }) => {
    if (!input || typeof input.data !== "object" || input.data === null) {
      throw new Error("Dados inválidos");
    }
    return input;
  })
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { error } = await supabase
      .from("user_state")
      .upsert(
        { user_id: userId, data: data.data as never, updated_at: new Date().toISOString() },
        { onConflict: "user_id" },
      );
    if (error) throw new Error(error.message);
    return { ok: true, updatedAt: new Date().toISOString() };
  });

export const getProfile = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    const { data, error } = await supabase
      .from("profiles")
      .select("display_name, target_exam")
      .eq("id", userId)
      .maybeSingle();
    if (error) throw new Error(error.message);
    return {
      displayName: data?.display_name ?? null,
      targetExam: data?.target_exam ?? null,
    };
  });
