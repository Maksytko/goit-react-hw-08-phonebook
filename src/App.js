import "./App.css";
import Route from "react-dom";
// import ContactForm from "./components/ContactForm/ContactForm";
// import Filter from "./components/Filter/Filter";
// import ContactList from "./components/ContactList/ContactList";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import ContactsPage from "./components/ContactsPage/ContactsPage";

function App() {
  return (
    <div className="App">
      <Header>
        <Navigation />
      </Header>
      <Route path="/contacts">
        <ContactsPage />
      </Route>
    </div>
  );
}

export default App;
