import { ParseIntPipe } from '@nestjs/common';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Coffee } from './entities/coffee.entity';

@Resolver()
export class CoffeesResolver {
	@Query(() => [Coffee], { name: 'coffees' })
	async findAll() {
		return [];
	}

	@Query(() => Coffee, { name: 'coffee', nullable: true })
	async findOne(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
		return null;
	}

	@Mutation(() => Coffee, { name: 'createCoffee', nullable: true })
	async create(@Args('createCoffeeInput') createCoffeeInput) {
		return null;
	}
}
