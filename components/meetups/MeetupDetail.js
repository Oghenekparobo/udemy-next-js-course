import classes from "./meetupdetails.module.css";

const MeetupDetail = (props) => {
  return (
    <section className={classes.detail} >
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
      <h6>{props.address}</h6>
    </section>
  );
};

export default MeetupDetail;
