require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@as-integrations/express5");

const { sequelize } = require("./models");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const app = express();

app.use(cors());
app.use(cors());
app.use(cors());
app.use(cors());
app.use(cors());
app.use(cors());

const startServer = async () => {
  try {
    // Database connection
    await sequelize.authenticate();
    // sequelize.sync();

    console.log("MySQL Connected Successfully");

    // Apollo Server
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
    });

    await apolloServer.start();

    // GraphQL endpoint
    app.use("/graphql", express.json(), expressMiddleware(apolloServer));

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
      console.log(`GraphQL: http://localhost:${PORT}/graphql`);
    });
  } catch (error) {
    console.error("Server failed:", error);
  }
};

startServer();
