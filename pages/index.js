import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMMY_DATA = [
  {
    id: "m1",
    title: "vatican museum",
    image: "https://source.unsplash.com/onxv5tf0slg/600x300",
    address: "the vatican",
    description: "the vatican museum located in italy"
  },
  {
    id: "m2",
    title: "paris",
    image: "https://source.unsplash.com/QAwciFlS1g4/600x300",
    address: "paris",
    description: "the beautiful city of paris"
  },
  {
    id: "m3",
    title: "kano",
    image: "https://source.unsplash.com/zN4mtLHkHn4/600x300",
    address: "kano",
    description: "the beautiful city of kano"
  }
];
const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  // fetch data from api
  return {
    props: { meetups: DUMMMY_DATA },
    revalidate: 10
  };
}

export default HomePage;
