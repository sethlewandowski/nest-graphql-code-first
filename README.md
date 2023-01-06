# Graphql Nest Course Notes (Code First)

Two ways to define an api

-   Rest
-   Graphql

Graphql apis use schemas to interact with the api from the client.

Everything in graphql comes from a single endpoint.

Consumer can define what they want to retrieve.
You can define, client side, what you want to retrieve.

Graphql Operations:
Query (Read operations)
Mututation (Write Operations)
Subscription ()

## Code First v. Schema First Graphql API Design

### Code First

use decorators and types

### Schema First

graphql SDL

## Installation

-   run `nest new` to spin up a new nestjs project
-   pick your package manager

Decide on your driver (apollo v mercurius) for this, we will use apollo.

-   install dependencies `npm i @nestjs/graphql graphql @nestjs/apollo apollo-server-express`

## Nest App Config

-   Add graphql module in app.module
-   update the nest-cli.json config to add complierOptions, plugin, nestjs/graphql

# Chapter 2

Let's use insomnia.

## Resolvers

-   provide instructions for turning a graphql operation into data

## Object Types

Remember, since we added the graphql cli plugin, we don't have to decorate our class properties with the @Field decorators. The plugin will determine this based on our types.

The graphql playground is being depricated, so use an API Development platform like insomnia or postman to interact with our api.

## Write our first request in our API Development Platform

Remember, graphql has a single endpoint, so in our request url, we simply can put:
`http://localhost:3000/graphql`
Also remember, graphql requests are post requests, not get requests.

-   technically, graphql can accept get requests, however you'd need to pass the query object as a query parameter, so it's just easier to make your request a post request so you can pass in body.

You'll notice the `schema.gql` file that was auto-generated on server build.
This schema.gql file will define types using scalar types. Our typescript types get converted into scalar types inside our schema.gql.
You'll notice that our 'number' types in typescript are turned into Float types inside the schema.gql file. Should you desire to configure this, you can do so in the graphQLModule config inside our app.module.ts file.

## When might you want to use the @Field decorator in our entities ?

-   You want more control between ts types converted to schema.gql scalars (numbers specifically)
-   You want more control over the ID scalar.

## Graphql Mutations

-   as with rest api best practices, different http methods have different purposes.
    (i.e. best practice of http get method is to NOT write data)

While graphql Queries are for fetching data or querying data, graphql mutations are designed to mutate or write data.
