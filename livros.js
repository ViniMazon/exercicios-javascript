const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionária',
                author: 'T. Harv Eker',
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, Pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            { 
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade",
                author: "Augusto Cury"
            },
            {
                title: "Os sete hábitos",
                author: "Stephen R. Covey"
            },
        ],
    }
];

const totalCategories = booksByCategory.length;

for(let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category);
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author);
            }
        }
    }
    console.log("Total de autores: " + authors.length)
}

countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author == author) {

                books.push(book.title);
            }
        }
    }
    console.log("Livros do autor: " + books)
}


