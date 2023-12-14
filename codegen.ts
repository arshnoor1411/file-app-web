import { envConfig } from "./src/utils/envConfig";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  generates: {
    "./src/services/api/fileServer.ts": {
      schema: envConfig.SERVER_URL,
      documents: "./src/graphql/user/*.gql",
      plugins: [
        {
          add: {
            content: "//@ts-nocheck",
          },
        },
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        fetcher: "graphql-request",
        exposeQueryKeys: true,
        exposeFetcher: true,
      },
    },
  },
};

export default config;
