import "./App.css";
import { Contact, Contacts, Form, Modal } from "./components";
import { useDispatch, useSelector } from "react-redux";


function App() {
  const dispatch = useDispatch()
  const { contact, deletingId } = useSelector((state) => state.contact);

  return (
    <div className="App">
      <Form />
      <Contacts />
      {deletingId && <Modal />}
    </div>
  );
}

export default App;
