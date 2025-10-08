import { createGitHubOAuthConfig, createHelpers } from "@deno/kv-oauth";
const githubOauthConfig = createGitHubOAuthConfig();
export const {
  signIn: githubSignIn,
  handleCallback: githubSignInCallback,
  getSessionId: githubGetSessionId,
  signOut: githubSignOut,
} = createHelpers(githubOauthConfig);
