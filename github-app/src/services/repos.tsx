type Owner = {
  login: String;
  id: Number;
  node_id: String;
  avatar_url: String;
  gravatar_id: String;
  url: String;
  html_url: String;
  followers_url: String;
  following_url: String;
  gists_url: String;
  starred_url: String;
  subscriptions_url: String;
  organizations_url: String;
  repos_url: String;
  events_url: String;
  received_events_url: String;
  type: String;
  site_admin: boolean;
};

type license = {
  key: String;
  name: String;
  spdx_id: String;
  url: String;
  node_id: String;
};

type Permission = {
  admin: Boolean;
  maintain: Boolean;
  push: Boolean;
  triage: Boolean;
  pull: Boolean;
};

type Repo = {
  id: Number;
  node_id: String;
  name: String;
  full_name: String;
  private: boolean;
  owner: Owner;
  html_url: String;
  description: String;
  fork: boolean;
  url: String;
  forks_url: String;
  keys_url: String;
  collaborators_url: String;
  teams_url: String;
  hooks_url: String;
  issue_events_url: String;
  events_url: String;
  assignees_url: String;
  branches_url: String;
  tags_url: String;
  blobs_url: String;
  git_tags_url: String;
  git_refs_url: String;
  trees_url: String;
  statuses_url: String;
  languages_url: String;
  stargazers_url: String;
  contributors_url: String;
  subscribers_url: String;
  subscription_url: String;
  commits_url: String;
  git_commits_url: String;
  comments_url: String;
  issue_comment_url: String;
  contents_url: String;
  compare_url: String;
  merges_url: String;
  archive_url: String;
  downloads_url: String;
  issues_url: String;
  pulls_url: String;
  milestones_url: String;
  notifications_url: String;
  labels_url: String;
  releases_url: String;
  deployments_url: String;
  created_at: String;
  updated_at: String;
  pushed_at: String;
  git_url: String;
  ssh_url: String;
  clone_url: String;
  svn_url: String;
  homepage: String;
  size: Number;
  stargazers_count: Number;
  watchers_count: Number;
  language: String;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: Number;
  mirror_url: String | null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: Number;
  license: {
    key: String;
    name: String;
    spdx_id: String;
    url: String;
    node_id: String;
  };
  allow_forking: Boolean;
  is_template: Boolean;
  web_commit_signoff_required: Boolean;
  topics: String[];
  visibility: String;
  forks: Number;
  open_issues: Number;
  watchers: Number;
  default_branch: String;
  permissions: Permission;
};

export type Repos = Repo[];

type PageInfo = {
  hasPreviousPage: Boolean;
  hasNextPage: Boolean;
  startCursor: String;
  endCursor: String;
};

type Repository = {
  // colaborators
  // forks
  // labels
  // languages
  // latestRelease
  // licenseInfo
  // owner
  // packages
  // primaryLanguage
  // releases
  // repositoryTopics
  createdAt: String;
  description: String | null;
  diskUsage: Number | null; // The number of kilobytes this repository occupies on disk
  forkCount: Number;
  forkingAllowed: Boolean;
  homepageUrl: String | null;
  id: String;
  isArchived: Boolean;
  isDisabled: Boolean;
  isEmpty: Boolean;
  isFork: Boolean; // Identifies if the repository is a fork.
  isInOrganization: Boolean;
  isLocked: Boolean;
  isMirror: Boolean;
  isPrivate: Boolean;
  isTemplate: Boolean;
  name: String;
  nameWithOwner: String;
};
