import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

function MeetupItem(props) {
  const router = useRouter();
  const showDetailsHandler = () => {
    router.push("/" + props.id);
    console.log(props);
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image
            src={props.image}
            alt={props.title}
            width="5000"
            height="5000"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;