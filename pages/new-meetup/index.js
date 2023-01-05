import Layout from "../../components/layout/Layout";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const addMeetUpHandler = (enteredMeetUpData) => {
    console.log(enteredMeetUpData);
  };
  return (
   
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
   
  );
}
