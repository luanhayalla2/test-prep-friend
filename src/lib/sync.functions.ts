import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

/** O estado do usuário trafega como JSON serializado para manter o RPC tipado. */
export const getUserState = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<{ json: string | null }> => {
    const { supabase, userId } = context;
    const { data, error } = await supabase
      .from("user_state")
      .select("data")
      .eq("user_id", userId)
      .maybeSingle();
    if (error) throw new Error(error.message);
    return { json: data?.data ? JSON.stringify(data.data) : null };
  });

export const saveUserState = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { json: string }) => {
    if (!input || typeof input.json !== "string" || input.json.length > 400_000) {
      throw new Error("Dados inválidos");
    }
    JSON.parse(input.json);
    return input;
  })
  .handler(async ({ data, context }): Promise<{ ok: true }> => {
    const { supabase, userId } = context;
    const { error } = await supabase.from("user_state").upsert(
      {
        user_id: userId,
        data: JSON.parse(data.json) as never,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id" },
    );
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const getProfile = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(
    async ({
      context,
    }): Promise<{ displayName: string | null; targetExam: string | null }> => {
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
    },
  );
