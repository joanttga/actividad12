import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookForm from './BookForm';
import BooksContext from '../context/BooksContext';

const EditBook = () => {
    const { id } = useParams();
    const { books, setBooks } = useContext(BooksContext);
    const navigate = useNavigate();

    // Find the book to edit based on id
    const bookToEdit = books.find(book => book.id === id);

    const handleOnSubmit = (updatedBook) => {
        const updatedBooks = books.map(book => (book.id === id ? updatedBook : book));
        setBooks(updatedBooks);
        navigate('/');
    };

    return (
        <div>
            {bookToEdit ? (
                <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
            ) : (
                <p>Book not found</p>
            )}
        </div>
    );
};

export default EditBook;

