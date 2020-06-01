import React, {useState} from 'react';
import Navbar from './components/presentational/Navbar';
import SearchBar from './components/presentational/SearchBar';
import Book from './components/presentational/Book';
import About from './components/container/About';
import Details from './components/container/Details';
import Login from './components/container/Login';
import Signup from './components/container/Signup';
import LogOrSign from './components/container/LogOrSign';
import NoBooks from './components/presentational/NoBooks';
import MyFavBooks from './components/container/MyFavBooks';
import './styles/App.scss';
import {BrowserRouter ,Switch, Route} from 'react-router-dom';
import useHandleUrl from './customHooks/AppCustomHook';

//TODOS----------------------------------------------------------------------------
// fix the route "/my0fav0books" to show all stored books!!!!!!!!
// user can delete fav-books from fav-list
// toggle "login signup <--> logout username"
// toggle path = "/log0sign <--> /my0fav0books"
// fix styles (responsive and more...)
//TODOS----------------------------------------------------------------------------

export const CurrentUser = React.createContext({
  username: "",
  bookIDs: []
});

function App() {
  const [currentUser, setCurrentUser] = useState({username:"", bookIDs:[]});
  const [setFilter1,setFilter2,setFilter3,setSearchInput,searchInput,handleSearchSubmit,data] = useHandleUrl();
  
  let books = [];

  if (data){
    books = data.map((book,i) => <Book info={book} key={i} />);
  };

  return (
    <CurrentUser.Provider value={currentUser}>
      <div className="App">
        <BrowserRouter>
        <Switch>

          <Route path="/about">
            <Navbar path="about"/>
            <About />
          </Route> 

          <Route path="/details/:id">
            <Navbar path="details" currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <Details />
          </Route> 

          <Route path="/login">
            <Navbar path="login" />
            <Login setCurrentUser={setCurrentUser} />
          </Route> 

          <Route path="/signup">
            <Navbar path="signup" />
            <Signup />
          </Route> 

          <Route path="/log0sign">
            <Navbar path="log0sign" />
            <LogOrSign />
          </Route> 

          <Route path="/my0fav0books">
            <Navbar path="my0fav/books" />
            <MyFavBooks />
          </Route> 

          <Route path="/">
            <Navbar path="home"/>
            <SearchBar
              searchInput={searchInput} 
              handleSearchSubmit={handleSearchSubmit} 
              handleSearchChange={e => setSearchInput(e.target.value) } 
              setFilter1 = {e => setFilter1(e.target.value)}
              setFilter2 = {e => setFilter2(e.target.value)}
              setFilter3 = {e => setFilter3(e.target.value)}
            />
            <main className="books-container">
              {books.length ? books : <NoBooks />}
            </main>
          </Route>  

        </Switch>
        </BrowserRouter>  
      </div>
    </CurrentUser.Provider>
  );
}

export default App;
