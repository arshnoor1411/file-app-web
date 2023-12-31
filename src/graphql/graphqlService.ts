import { envConfig } from "@/utils/envConfig";
import { getTokens } from "@/utils/helper";

import { GraphQLClient } from "graphql-request";

const HELP_PORTAL_SERVER_URL = envConfig.SERVER_URL;

const endpoint: string = HELP_PORTAL_SERVER_URL || "";

//const graphQLClient = new GraphQLClient(`${endpoint}/graphql`);

const graphQlService = (): GraphQLClient => {
  const gqlClient = new GraphQLClient(HELP_PORTAL_SERVER_URL);

  const token = getTokens().accessToken;

  if (token) {
    gqlClient.setHeader("authorization", `Bearer ${token}`);
  }

  return gqlClient;
};

export default graphQlService;
