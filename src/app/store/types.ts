export type GithubProfile = {
  avatar_url: string;
  name: string;
  blog: string;
  html_url: string;
};

export type ProfileState = {
  loading?: boolean;
  data?: GithubProfile;
  error?: string;
};
