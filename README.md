# Graphql Nest Course Notes (Code First)

Two ways to define an api
- Rest
- Graphql

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
- run `nest new` to spin up a new nestjs project
- pick your package manager

Decide on your driver (apollo v mercurius)
- install dependencies `npm i @nestjs/graphql graphql @nestjs/apollo apollo-server-express`
