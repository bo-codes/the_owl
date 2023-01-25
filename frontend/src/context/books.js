import { createContext, useState } from "react";

const BooksContext = createContext()

const Provider = ({children}) => {

  const [books, setBooks] = useState('')

  const bookState = {
    books: books,
    updateBooks: setBooks
  }

  return (
    <BooksContext.Provider value={bookState}>
      {children}
    </BooksContext.Provider>
  )
}

export { Provider };
export default BooksContext;
