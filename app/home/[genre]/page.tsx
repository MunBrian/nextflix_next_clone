import { authOptions } from "@/app/utils/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import MovieCard from "@/app/components/MovieCard";
import prisma from "@/app/utils/db";

async function getData(category: string, userId: string) {
  switch (category) {
    case "shows": {
      const data = await prisma?.movie.findMany({
        where: {
          category: "show",
        },
        select: {
          id: true,
          title: true,
          imageString: true,
          youTubeString: true,
          overview: true,
          release: true,
          age: true,
          duration: true,
          WatchLists: {
            where: {
              userId: userId,
            },
          },
        },
      });

      return data;
    }
    case "movies": {
      const data = await prisma?.movie.findMany({
        where: {
          category: "movie",
        },
        select: {
          id: true,
          title: true,
          imageString: true,
          youTubeString: true,
          overview: true,
          release: true,
          age: true,
          duration: true,
          WatchLists: {
            where: {
              userId: userId,
            },
          },
        },
      });

      return data;
    }
    case "recently": {
      const data = await prisma?.movie.findMany({
        where: {
          category: "recent",
        },
        select: {
          id: true,
          title: true,
          imageString: true,
          youTubeString: true,
          overview: true,
          release: true,
          age: true,
          duration: true,
          WatchLists: {
            where: {
              userId: userId,
            },
          },
        },
      });

      return data;
    }
    default: {
      throw new Error();
    }
  }
}

export default async function CategoryPage({
  params,
}: {
  params: { genre: string };
}) {
  const session = await getServerSession(authOptions);
  const data = await getData(params.genre, session?.user?.email as string);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 mt-10 gap-6">
      {data?.map((movie) => (
        <div key={movie.id} className="relative h-48">
          <Image
            src={movie.imageString}
            width={500}
            height={400}
            className="rounded-sm w-full h-full absolute object-cover"
            alt="movie image"
            priority
          />

          <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100 ">
            <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center">
              <Image
                src={movie.imageString}
                width={800}
                height={800}
                alt="movie image"
                className="absolute w-full h-full -z-10 rounded-lg object-cover"
              />
              <MovieCard
                key={movie.id}
                movieId={movie.id}
                overview={movie.overview}
                title={movie.title}
                watchListId={movie.WatchLists[0]?.id}
                watchList={movie.WatchLists.length > 0 ? true : false}
                youtubeUrl={movie.youTubeString}
                age={movie.age}
                time={movie.duration}
                year={movie.release}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
