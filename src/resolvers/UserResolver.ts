import {Arg, FieldResolver, Mutation, Query, Resolver, Root} from 'type-graphql'
import User from '../schemas/User'

@Resolver(of => User)
export default class {
    @Query(returns => [User])
    getUsers(): 
}