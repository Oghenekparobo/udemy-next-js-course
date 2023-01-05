import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails(props) {
  return (
    <MeetupDetail
      id="m1"
      title="paris"
      image="https://source.unsplash.com/QAwciFlS1g4/600x300"
      address="france"
      description="the beautiful city of paris"
    />
  );
}


export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
      {
        params: {
          meetupId: 'm3',
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  const id = context.params.meetupId;
  console.log(id);
  return {
    props: {
      meetUpData: {
        id: id,
        title: "paris",
        image: "https://source.unsplash.com/QAwciFlS1g4/600x300",
        address: "france",
        description: "the beautiful city of paris"
      }
    }
  };
}
