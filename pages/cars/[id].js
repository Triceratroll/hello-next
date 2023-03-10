import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Car({ car }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="styles.container">
      <Head>
        <title>
          {car.color} {car.id}
        </title>
      </Head>
      <h1>{id}</h1>
      <Image src={car.image} alt={car.id} width={400} height={300} />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: { car: data },
  };
}

// export async function getStaticProps({ params }) {
//   const req = await fetch(`http://localhost:3000/${params.id}.json`);
//   const data = await req.json();

//   return {
//     props: { car: data },
//   };
// }

// export async function getStaticPaths() {
//   const req = await fetch("http://localhost:3000/cars.json");
//   const data = await req.json();

//   const paths = data.map((car) => {
//     return { params: { id: car } };
//   });

//   return { paths, fallback: false };
// }
