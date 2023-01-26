import { getCharacter, getCharacters } from "lib/utils";

const CharacterDetailView = ({ character }) => {
  return (
    <div>
      <h1>{character?.name}</h1>
      <p>{character?.description}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const characters = getCharacters();

  const paths = characters?.map((character) => ({
    params: { id: character?.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const character = await getCharacter(id);

  console.log(hero);
  return { props: { character } };
}

export default CharacterDetailView;
