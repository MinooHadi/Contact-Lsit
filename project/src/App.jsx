import "./App.css";
import { Contact, Contacts, Form, Modal } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const { contact, deletingId } = useSelector((state) => state.contact);

  return (
    <div className="App">
      <Form />
      <Contacts />
      {deletingId && <Modal />}
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
