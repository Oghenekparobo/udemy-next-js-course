import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

export default function MeetupDetails(props) {
  return (
    <>
      <Head>
        <title>{props.meetUpData.title}</title>
        <meta name="description" content={props.meetUpData.description}></meta>
      </Head>
      <MeetupDetail
        title={props.meetUpData.title}
        image={props.meetUpData.image}
        address={props.meetUpData.address}
        description={props.meetUpData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://pablo:pablo@cluster0.yheg8r7.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString()
      }
    }))
  };
}
export async function getStaticProps(context) {
  const id = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://pablo:pablo@cluster0.yheg8r7.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetups = await meetupsCollection.findOne({
    _id: ObjectId(id)
  });
  client.close();

  return {
    props: {
      meetUpData: {
        id: selectedMeetups._id.toString(),
        title: selectedMeetups.title,
        image: selectedMeetups.image,
        address: selectedMeetups.address,
        description: selectedMeetups.description
      }
    }
  };
}
