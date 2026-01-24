const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:3000";

/**
 * MiniApp configuration object. Must follow the mini app manifest specification.
 *
 * @see {@link https://docs.base.org/mini-apps/features/manifest}
 */
export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjI0NDI0MDMsInR5cGUiOiJhdXRoIiwia2V5IjoiMHgwYUVmZDNGZUM3MGZkMDMyN0Q5ZUFkNGM4NmFERkE0NjQ3MTFjMUNlIn0",
    payload: "eyJkb21haW4iOiJiYXNlLW1pbmlhcHAtb25lLnZlcmNlbC5hcHAifQ",
    signature: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEF4Wp8_TxEIJ0l2vFawj7qfAL4_SQ-eozObZDoH_JK7SyLrdR6LeYuGKJgUXUQ4lWFVjgxF4klvEnXkMSYvMN1JHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  },
  baseBuilder: {
    ownerAddress: "0x0aEfd3FeC70fd0327D9eAd4c86aDFA464711c1Ce",
  },
  miniapp: {
    version: "1",
    name: "my-minikit-app",
    subtitle: "MiniKit App",
    description: "Minikit App Example",
    screenshotUrls: [],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "utility",
    tags: ["example"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "baest miniapp ever",
    ogTitle: " My MiniKit App",
    ogDescription: " This is my MiniKit App built on Base.",
    ogImageUrl: `${ROOT_URL}/hero.png`,
  },
} as const;
