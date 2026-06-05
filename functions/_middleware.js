export const onRequest = async (context) => {
  const { request, env } = context;
  const auth = request.headers.get("Authorization");

  const unauthorized = () => new Response("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Restricted"',
      "Content-Type": "text/plain",
    },
  });

  if (!auth) return unauthorized();

  const [scheme, encoded] = auth.split(" ");
  if (scheme !== "Basic") return unauthorized();

  const [user, pass] = atob(encoded).split(":");

  if (user !== (env.SITE_USERNAME || "hudson") || pass !== env.SITE_PASSWORD) {
    return unauthorized();
  }

  return context.next();
};
