//@ts-nocheck
import { GraphQLClient } from "graphql-request";
import { RequestInit } from "graphql-request/dist/types.dom";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };

function fetcher<TData, TVariables extends { [key: string]: any }>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  requestHeaders?: RequestInit["headers"]
) {
  return async (): Promise<TData> =>
    client.request({
      document: query,
      variables,
      requestHeaders,
    });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type CreateKnowledgeBaseInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  headingId?: InputMaybe<Scalars["String"]["input"]>;
  organizationId?: InputMaybe<Scalars["String"]["input"]>;
  parentId?: InputMaybe<Scalars["String"]["input"]>;
  tagname: Scalars["String"]["input"];
  text?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  type: Type;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateOrganizationInput = {
  description: Scalars["String"]["input"];
  organizationName: Scalars["String"]["input"];
  tagname: Scalars["String"]["input"];
};

export type CreateTicketInput = {
  assigneeId?: InputMaybe<Scalars["String"]["input"]>;
  attachments?: InputMaybe<Scalars["String"]["input"]>;
  createdBy?: InputMaybe<Scalars["String"]["input"]>;
  description: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  organizationId?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Status>;
  subject: Scalars["String"]["input"];
  tagname?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateUserInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  tagname?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterOrganization = {
  __typename?: "FilterOrganization";
  organization?: Maybe<Array<Maybe<FilterOutOrganization>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type FilterOutOrganization = {
  __typename?: "FilterOutOrganization";
  organizationName?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  tagname?: Maybe<Scalars["String"]["output"]>;
};

export type KnowledgeBase = {
  __typename?: "KnowledgeBase";
  content?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["String"]["output"];
  deletedAt?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  headingId?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  organizationId: Scalars["String"]["output"];
  parentId?: Maybe<Scalars["String"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  type: Type;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
};

export type Message = {
  __typename?: "Message";
  message: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  createKnowledgeBase: KnowledgeBase;
  createOrganization: Organization;
  createTicket: Ticket;
  createUser: Message;
  inviteAsMemberOrAdmin: Organization;
  removeKnowledgeBase?: Maybe<Message>;
  removeOrganization?: Maybe<Message>;
  removeTicket?: Maybe<Ticket>;
  removeUser: Message;
  resendOTPVerification: Message;
  resetPassword: Message;
  signIn?: Maybe<SignInResponse>;
  updateKnowledgeBase: KnowledgeBase;
  updateOrganization: Organization;
  updateTicket: Ticket;
  updateTicketAssignee: Ticket;
  updateUser: User;
  userVerification: SignInResponse;
};

export type MutationCreateKnowledgeBaseArgs = {
  createKnowledgeBaseInput: CreateKnowledgeBaseInput;
};

export type MutationCreateOrganizationArgs = {
  createOrganizationInput: CreateOrganizationInput;
};

export type MutationCreateTicketArgs = {
  createTicketInput: CreateTicketInput;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationInviteAsMemberOrAdminArgs = {
  email: Scalars["String"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Role>;
  tagname: Scalars["String"]["input"];
};

export type MutationRemoveKnowledgeBaseArgs = {
  id: Scalars["String"]["input"];
};

export type MutationRemoveOrganizationArgs = {
  tagname: Scalars["String"]["input"];
};

export type MutationRemoveTicketArgs = {
  ticketId: Scalars["String"]["input"];
};

export type MutationRemoveUserArgs = {
  email: Scalars["String"]["input"];
};

export type MutationResendOtpVerificationArgs = {
  email: Scalars["String"]["input"];
};

export type MutationResetPasswordArgs = {
  password: Scalars["String"]["input"];
  verificationCode: Scalars["String"]["input"];
};

export type MutationSignInArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationUpdateKnowledgeBaseArgs = {
  updateKnowledgeBaseInput: UpdateKnowledgeBaseInput;
};

export type MutationUpdateOrganizationArgs = {
  updateOrganizationInput: UpdateOrganizationInput;
};

export type MutationUpdateTicketArgs = {
  updateTicketInput: UpdateTicketInput;
};

export type MutationUpdateTicketAssigneeArgs = {
  updateTicketInput: UpdateTicketInput;
};

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type MutationUserVerificationArgs = {
  email: Scalars["String"]["input"];
  otp: Scalars["String"]["input"];
};

export type Organization = {
  __typename?: "Organization";
  createdAt: Scalars["String"]["output"];
  deletedAt?: Maybe<Scalars["String"]["output"]>;
  description: Scalars["String"]["output"];
  email?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  organizationId: Scalars["String"]["output"];
  organizationName: Scalars["String"]["output"];
  role?: Maybe<Scalars["String"]["output"]>;
  tagname: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["String"]["output"]>;
  users?: Maybe<User>;
};

export type OrganizationPaginatedResponse = {
  __typename?: "OrganizationPaginatedResponse";
  limit?: Maybe<Scalars["Int"]["output"]>;
  offset?: Maybe<Scalars["Int"]["output"]>;
  organization?: Maybe<Array<OrganizationRole>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type OrganizationPeoplePaginatedResponse = {
  __typename?: "OrganizationPeoplePaginatedResponse";
  limit?: Maybe<Scalars["Int"]["output"]>;
  offset?: Maybe<Scalars["Int"]["output"]>;
  organizationUsers?: Maybe<Array<Maybe<Organization>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type OrganizationRole = {
  __typename?: "OrganizationRole";
  id: Scalars["Int"]["output"];
  organizationId: Scalars["String"]["output"];
  organizations?: Maybe<Organization>;
  role?: Maybe<Role>;
  userId: Scalars["String"]["output"];
};

export type OrganizationRoles = {
  __typename?: "OrganizationRoles";
  organization?: Maybe<Organization>;
};

export type Query = {
  __typename?: "Query";
  checkTagname: TagNameSearchResponse;
  filterOrganization?: Maybe<FilterOrganization>;
  findAllOrganizations?: Maybe<OrganizationPaginatedResponse>;
  findAllTickets: TicketPaginatedResponse;
  findAllTicketsRaisedByUser?: Maybe<TicketPaginatedResponse>;
  findOneTicket?: Maybe<Ticket>;
  findPeoplesInOrganization?: Maybe<OrganizationPeoplePaginatedResponse>;
  findUser?: Maybe<User>;
  getKnowledgeBase?: Maybe<Array<Maybe<KnowledgeBase>>>;
  getOrganizationByTagname: Organization;
  getOrganizationRole: OrganizationRole;
  knowledgeBases: Array<Maybe<KnowledgeBase>>;
  me: User;
  users: Array<Maybe<User>>;
};

export type QueryCheckTagnameArgs = {
  tagname: Scalars["String"]["input"];
};

export type QueryFilterOrganizationArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  updateOrganizationInput: UpdateOrganizationInput;
};

export type QueryFindAllOrganizationsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryFindAllTicketsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  tagname?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryFindAllTicketsRaisedByUserArgs = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<TicketType>;
};

export type QueryFindOneTicketArgs = {
  ticketId: Scalars["String"]["input"];
};

export type QueryFindPeoplesInOrganizationArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  tagname?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryFindUserArgs = {
  email: Scalars["String"]["input"];
};

export type QueryGetKnowledgeBaseArgs = {
  parentId?: InputMaybe<Scalars["String"]["input"]>;
  tagname: Scalars["String"]["input"];
};

export type QueryGetOrganizationByTagnameArgs = {
  tagname?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryGetOrganizationRoleArgs = {
  tagname: Scalars["String"]["input"];
};

export enum Role {
  Admin = "ADMIN",
  Member = "MEMBER",
  Owner = "OWNER",
  User = "USER",
}

export type SignInResponse = {
  __typename?: "SignInResponse";
  accessToken?: Maybe<Scalars["String"]["output"]>;
  message: Scalars["String"]["output"];
  user: User;
};

export enum Status {
  Cancelled = "CANCELLED",
  Closed = "CLOSED",
  Progress = "PROGRESS",
  Resolved = "RESOLVED",
  Todo = "TODO",
}

export type TagNameSearchResponse = {
  __typename?: "TagNameSearchResponse";
  exists: Scalars["Boolean"]["output"];
  suggestions?: Maybe<Array<Organization>>;
};

export type Ticket = {
  __typename?: "Ticket";
  assigneeId?: Maybe<Scalars["String"]["output"]>;
  attachments?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["String"]["output"];
  createdBy: Scalars["String"]["output"];
  deletedAt?: Maybe<Scalars["String"]["output"]>;
  description: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  organization?: Maybe<Organization>;
  organizationId: Scalars["String"]["output"];
  organizationRole?: Maybe<OrganizationRole>;
  status?: Maybe<Status>;
  subject: Scalars["String"]["output"];
  ticketId?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<User>;
};

export type TicketPaginatedResponse = {
  __typename?: "TicketPaginatedResponse";
  limit?: Maybe<Scalars["Int"]["output"]>;
  offset?: Maybe<Scalars["Int"]["output"]>;
  tickets?: Maybe<Array<Maybe<Ticket>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export enum TicketType {
  Assignee = "ASSIGNEE",
  Created = "CREATED",
}

export enum Type {
  Faq = "FAQ",
  Heading = "HEADING",
  Subheading = "SUBHEADING",
}

export type UpdateKnowledgeBaseInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateOrganizationInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  organizationName?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Role>;
  tagname?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateTicketInput = {
  assigneeId?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Status>;
  ticketId: Scalars["String"]["input"];
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  otp?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

export type User = {
  __typename?: "User";
  createdAt: Scalars["String"]["output"];
  deletedAt?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  hashedPassword?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  isEmailVerified?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  otp?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
};

export type SignInMutationVariables = Exact<{
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type SignInMutation = {
  __typename?: "Mutation";
  signIn?: {
    __typename?: "SignInResponse";
    accessToken?: string | null;
  } | null;
};

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;

export type CreateUserMutation = {
  __typename?: "Mutation";
  createUser: { __typename?: "Message"; message: string };
};

export const SignInDocument = `
    mutation signIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    accessToken
  }
}
    `;

export const useSignInMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    SignInMutation,
    TError,
    SignInMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) => {
  return useMutation<SignInMutation, TError, SignInMutationVariables, TContext>(
    ["signIn"],
    (variables?: SignInMutationVariables) =>
      fetcher<SignInMutation, SignInMutationVariables>(
        client,
        SignInDocument,
        variables,
        headers
      )(),
    options
  );
};

useSignInMutation.fetcher = (
  client: GraphQLClient,
  variables: SignInMutationVariables,
  headers?: RequestInit["headers"]
) =>
  fetcher<SignInMutation, SignInMutationVariables>(
    client,
    SignInDocument,
    variables,
    headers
  );

export const CreateUserDocument = `
    mutation createUser($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput) {
    message
  }
}
    `;

export const useCreateUserMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    CreateUserMutation,
    TError,
    CreateUserMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) => {
  return useMutation<
    CreateUserMutation,
    TError,
    CreateUserMutationVariables,
    TContext
  >(
    ["createUser"],
    (variables?: CreateUserMutationVariables) =>
      fetcher<CreateUserMutation, CreateUserMutationVariables>(
        client,
        CreateUserDocument,
        variables,
        headers
      )(),
    options
  );
};

useCreateUserMutation.fetcher = (
  client: GraphQLClient,
  variables: CreateUserMutationVariables,
  headers?: RequestInit["headers"]
) =>
  fetcher<CreateUserMutation, CreateUserMutationVariables>(
    client,
    CreateUserDocument,
    variables,
    headers
  );
