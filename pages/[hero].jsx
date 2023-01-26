import { useRouter } from "next/router";
import UseGetCharacterSWR from "hooks/useGetCharacter";

const HeroDetail = () => {
  const router = useRouter();
  const id = router.query.hero;
  const { data, error, isLoading } = UseGetCharacterSWR(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <section className="my-2">
      <h2 className="mb-3 text-xl ">{data?.name}</h2>
      <p className="text-justify">{data?.description}</p>
    </section>
  );
};

export default HeroDetail;
