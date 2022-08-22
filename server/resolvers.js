const Book = require('./models/Book.model')
const Author = require('./models/Author.model')

const resolvers = {
    Query: {
        getAllBooks: async () => {
            return await Book.find()
        },
        getBookById: async (parent, args) => {
            return await Book.findById(args.id)
        },
        getAllAuthors: async () => {
            return await Author.find()
        },
        getAuthorById: async (parent, args) => {
            return await Author.findById(args.id)
        }
    },
    Mutation: {
        addBook: async(parent, args, context, info) => {
            const book = new Book(args.book)
            await book.save()
            return book
        },
        addAuthor: async(parent, args, context, info) => {
            const { name, bio } = args.author
            const author = new Author({name, bio})
            await author.save()
            return author
        }
    }
}