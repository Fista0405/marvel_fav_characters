import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getHero } from "lib/utils";

const HeroDetail = () => {
  const [hero, setHero] = useState({});
  const [error, setError] = useState(null);
  const router = useRouter();
  const id = router.query.hero;

  useEffect(() => {
    const heroData = async () => {
      try {
        const data = await getHero(id);
        console.log("Data from getHero:", data);
        setHero(data);
      } catch (err) {
        setError(err);
      }
    };

    heroData();
  }, [id]);

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  if (!hero) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="my-2">
      <h2 className="mb-3 text-xl ">{hero?.name}</h2>
      <p className="text-justify">{hero?.description}</p>
    </section>
  );
};

export default HeroDetail;
