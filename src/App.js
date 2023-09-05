import React, { useCallback, useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  
    const addContact = useCallback(() => {(name, phoneNumber, email) => {
        const contactToAdd = {
        name: name,
        phoneNumber : phoneNumber ,
        email :  email
      };
      setContacts(prevState => [...prevState, contactToAdd]);
    };
  }, [contacts]);

    const addAppointment = useCallback(() => {(name, contact, date, time) =>{
    const appointmentToAdd = {
      name: name,
      contact: contact,
      date: date,
      time: time
    };

    setAppointments([...appointments,appointmentToAdd])
    }}, [appointments]);


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact} />  }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} addAppointment={addAppointment} /> }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
