import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import EditBook from '../components/EditBook'; // Asegúrate de importar EditBook
import useLocalStorage from '../hooks/useLocalStorage';
import BooksContext from '../context/BooksContext';

const AppRouter = () => {
    const [books, setBooks] = useLocalStorage('books', []);

    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <BooksContext.Provider value={{ books, setBooks }}>
                        <Routes>
                            <Route path="/" element={<BooksList />} />
                            <Route path="/add" element={<AddBook />} />
                            <Route path="/edit/:id" element={<EditBook />} />
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </BooksContext.Provider>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
