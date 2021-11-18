import { showBooksFromCategory } from "./showBooksFromCategory";
import { searchBooks } from "./searchBooks";
import { show_inputBar } from "./showInputBar";
import { showSearchedBooks } from "./showSearchedBooks";
import { userChoicesRecomendations } from "./userChoices";



const search__button:any = document.querySelector('.search__button');

search__button.addEventListener('click',show_inputBar)


showSearchedBooks();
userChoicesRecomendations();
showBooksFromCategory();