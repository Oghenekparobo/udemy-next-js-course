import Link from "next/link";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <h1>the news page</h1>
      <ul>
        <li>
            <Link href='news/heya' > heya</Link>
           
            </li>
        <li><Link href='news/alpha' > alpha</Link></li>
        <li><Link href='news/goodmorning' >goodmorning</Link></li>
        <li><Link href='news/hellobae' >hello bae</Link></li>
        <li><Link href='news/testing' >testing</Link></li>
       
      </ul>
    </Fragment>
  );
};

export default Home;
