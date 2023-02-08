import { useRouter } from "next/router";
import useGetCharacterSWR from "hooks/useGetCharacter";
import Image from "next/image";

const HeroDetail = () => {
  const IMG_SIZE = "detail";

  const router = useRouter();
  const id = router.query.hero;
  const { data, error, isLoading } = useGetCharacterSWR(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  console.log(data);

  return (
    <div className="m-10 flex flex-col md:flex-row items-center">
      <Image
        className="flex w-32 h-32 h-50 md:w-52 md:h-52 lg:w-80 lg:h-80"
        height={400}
        width={450}
        src={`${data.thumbnail.path}/${IMG_SIZE}.${data.thumbnail.extension}`}
        alt={data?.name}
      />
      <div className="flex flex-col md:ml-10 flex-wrap">
        <h4 className="uppercase text-xl text-red-600 mb-4">Name:</h4>
        <h2 className="mb-3 text-xl">{data?.name}</h2>
        <p className="text-justify">{data?.description}</p>
        <h4 className="uppercase text-xl text-red-600 mb-4">Series: </h4>
        <ul>
          {data?.series.items.map((item) => (
            <li key={item?.name}>{item?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeroDetail;
