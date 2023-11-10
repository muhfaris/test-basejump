export default function getFullRedirectUrl(redirectPath: string) {
  if (redirectPath.startsWith("http")) return redirectPath;

  let baseUrl = process.env.URL;
  if (typeof window !== "undefined" && baseUrl == "") {
    baseUrl = window.location.origin;
  }

  return [baseUrl, redirectPath?.replace(/^\//, "")].filter(Boolean).join("/");
}
