import { getHero, fetchCharactersClassic } from "utils/utils";

const CharacterDetailView = ({ character }) => {
  return (
    <div>
      <h1>{character?.name}</h1>
      <p>{character?.description}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const characters = fetchCharactersClassic();

  const paths = characters?.map((character) => ({
    params: { id: character?.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const character = await getHero(id);

  console.log(hero);
  return { props: { character } };
}

export default CharacterDetailView;
