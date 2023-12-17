import { PlayCircle } from "lucide-react";

interface iAppProps {
  title: string;
  overview: string;
  movieId: number;
  watchList: boolean;
  watchListId: string;
  youtubeUrl: string;
}

export default function MovieCard({
  movieId,
  overview,
  title,
  watchList,
  watchListId,
  youtubeUrl,
}: iAppProps) {
  return (
    <>
      <button className="-mt-14">
        <PlayCircle className="h-20 w-20" />
      </button>
    </>
  );
}
