
import { useRouter } from "next/router";

function DetailsPage() {
  const router = useRouter();
  const id = router.query.newsId;
  console.log(id);
  return <div>this is the details page</div>;
}

export default DetailsPage;
