import classes from "./meetupdetails.module.css";
import Image from "next/image";


const MeetupDetail = (props) => {
  return (
    <section className={classes.detail} >
      <Image src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
      <h6>{props.address}</h6>
    </section>
  );
};

export default MeetupDetail;
