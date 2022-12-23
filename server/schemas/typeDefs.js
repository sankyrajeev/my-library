const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		username: String
		email: String
        bookCount: Int
        savedBooks: [Book]

	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		users: [User]
		me: User
	}
    
    type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }


	type Mutation {
        login(email:String!,password:String!):Auth
		addUser(username: String!, email: String!, password: String!): Auth

        saveBook(bookData: BookInput!): User
	}
`;

module.exports = typeDefs;
