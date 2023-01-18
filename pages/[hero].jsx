import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchHero } from "lib/utils";

const HeroDetail = () => {
  const [hero, setHero] = useState();
  const router = useRouter();
  const id = router.query.hero;

  useEffect(() => {
    fetchHero(id)
      .then((data) => setHero(data[0]))
      .catch((err) => console.error(err));
  }, []);

  // if (!hero) return;

  return (
    <>
      <h1>{id}</h1>
      {/* <h1>{hero?.id}</h1> */}
      <h3>{hero?.name}</h3>
    </>
  );
};

export default HeroDetail;
