import { GameCard, CreateAdBanner, Slider } from '@/components';
import { useGamesQuery } from '@/hooks/queries';

function Home() {
  const { data: games } = useGamesQuery();

  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20 px-10">
      <img src="images/logo.svg" alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu
        <span className="bg-clip-text text-transparent px-3 bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D]">
          duo
        </span>
        está aqui
      </h1>

      {games && games.length > 0 && (
        <div className="mt-16 m-auto w-full">
          <Slider>
            {games?.map((game) => (
              <GameCard game={game} key={game.id} />
            ))}
          </Slider>
        </div>
      )}

      <CreateAdBanner />
    </div>
  );
}

export default Home;
