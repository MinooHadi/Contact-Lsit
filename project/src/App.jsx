import { Contact, Contacts, Form, Modal } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const { contact, deletingId } = useSelector((state) => state.contact);

  return (
    <div
      className={
        deletingId
          ? `bg-slate-300 w-2/3 p-5 m-auto flex flex-col gap-12 blur`
          : `bg-slate-300 w-2/3 p-5 m-auto flex flex-col gap-12 blur-none`
      }
    >
      <Form />
      <Contacts />
      {deletingId && <Modal />}
      <ToastContainer />
    </div>
  );
}

export default App;
