import type { AppRouter } from "@api/trpc/trpc.router";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:4000/trpc", //TODO: use env var
    }),
  ],
});
