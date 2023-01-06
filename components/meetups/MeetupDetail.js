import classes from "./meetupdetails.module.css";
import Image from "next/image";


const MeetupDetail = (props) => {
  return (
    <section className={classes.detail} >
   <Image
            src={props.image}
            alt={props.title}
            width="5000"
            height="5000"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
      <h6>{props.address}</h6>
    </section>
  );
};

export default MeetupDetail;
