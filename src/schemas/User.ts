import {Field, Int, ObjectType} from 'type-graphql'
import {Table, Column, PrimaryKey, Model} from 'sequelize-typescript'

@ObjectType()
@Table
class User extends Model<User> {
    @Field(type => Int)
    @PrimaryKey
    id: number

    @Field()
    @Column
    name: string

    @Field()
    @Column
    email: string

    @Field()
    @Column
    password: string
}

export default User