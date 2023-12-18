"use server";

import { revalidatePath } from "next/cache";

export async function addToWatchList(formData: FormData) {
  "use server";

  const movieId = formData.get("movieId");
  const pathname = formData.get("pathname") as string;

  const data = await prisma?.watchList.create({
    data: {
      userId: "aabbcc",
      movieId: Number(movieId),
    },
  });

  revalidatePath(pathname);
}

export async function removeFromWatchList(formData: FormData) {
  "use server";

  const watchListId = formData.get("watchListId") as string;
  const pathname = formData.get("pathname") as string;

  const data = await prisma?.watchList.delete({
    where: {
      id: watchListId,
    },
  });

  revalidatePath(pathname);
}
