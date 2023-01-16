import { useRouter } from "next/router";

const HeroDetail = () => {
  const router = useRouter();
  const heroId = router.query.hero;

  return <h1>Hero Id: {heroId}</h1>;
};

export default HeroDetail;
