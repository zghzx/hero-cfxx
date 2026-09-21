export async function onRequestGet(context) {
  const value = await context.env.IP_KV.get("ip-list");

  if (!value) {
    return new Response("ip-list not found", {
      status: 404,
      headers: {
        "Content-Type": "text/plain; charset=utf-8"
      }
    });
  }

  return new Response(value, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}
