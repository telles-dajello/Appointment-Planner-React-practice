import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"; 

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <>
    <form onSubmit={handleSubmit} >
      <label>
        <input 
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Appointment Name"
        />
      </label>
      <br />
      <label>
        <input 
        type="date"
        name="date"
        value={date}
        min={(getTodayString)}
        onChange={(e) => setDate(e.target.value)}
        required
        aria-label="Appointment Date"
        />
      </label>
      <br />
      <label>
        <input 
        type="time"
        name="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-label="Appointment Time"
        />
      </label>
      <br />
      <ContactPicker 
      name="contact"
      value={contact}
      contacts={contactNames}
      onChange={(e) => setContact(e.target.value)}
      />
      <br />
      <input type="submit" value="Add Appointment" />
    </form>
    </>
  );
};
