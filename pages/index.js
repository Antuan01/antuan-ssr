import Head from 'next/head';
import { index } from '../controllers/productController';
import Connect from '../db/connect';

export default function Home({data, plainData}) {
  return (
    <div>
   <p> Hola bebex: {data.usd}  </p> 
    {plainData.map((el) => (<p> {el.title} </p>))}
    </div>
  )
}

export async function getServerSideProps() {

    Connect();

    const results = await index();

    const raw = await fetch ("https://api.yadio.io/rate/VES");

    const data = await raw.json();

    const plainData = JSON.parse(JSON.stringify(results));

    return {
        props: {
            data,
            plainData
    },
}
}
