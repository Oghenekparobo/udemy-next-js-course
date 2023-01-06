import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "vatican museum",
//     image: "https://source.unsplash.com/onxv5tf0slg/600x300",
//     address: "the vatican",
//     description: "the vatican museum located in italy"
//   },
//   {
//     id: "m2",
//     title: "paris",
//     image: "https://source.unsplash.com/QAwciFlS1g4/600x300",
//     address: "paris",
//     description: "the beautiful city of paris"
//   },
//   {
//     id: "m3",
//     title: "kano",
//     image: "https://source.unsplash.com/zN4mtLHkHn4/600x300",
//     address: "kano",
//     description: "the beautiful city of kano"
//   }
// ];

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Dummy MeetUps</title>
        <meta  name="description" content="meet beautiful people in beautiful places"></meta>
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_DATA
//     }
//   };
// }
export async function getStaticProps() {
  // fetch data from api
  const client = await MongoClient.connect(
    "mongodb+srv://pablo:pablo@cluster0.yheg8r7.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description
      }))
    },
    revalidate: 10
  };
}

export default HomePage;
