import Head from 'next/head';
import Product from '../models/product';
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

const results = await Product.find(function (err, products) {
  if (err) return console.error(err);
  console.log(products)
});

    const raw = await fetch ("https://api.yadio.io/rate/VES");
    const data = await raw.json();

    console.log(results)

    const plainData = JSON.parse(JSON.stringify(results))

    console.log(plainData)

    return {
        props: {
            data,
            plainData
    },
}
}
