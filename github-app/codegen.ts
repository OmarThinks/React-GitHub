import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/services/graphql/schema.docs.graphql",
  //documents: "src/**/*.tsx",
  generates: {
    "./src/services/graphql/generated/": {
      preset: "client",
      plugins: [],
    },
    "./src/services/graphql/generated/graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
