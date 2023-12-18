"use client";

import { Button } from "@/components/ui/button";
import { InfoIcon, PlayCircle } from "lucide-react";
import { useState } from "react";
import PlayVideoModal from "./PlayVideoModal";

interface iAppProps {
  release: number;
  id: number;
  age: number;
  duration: number;
  title: string;
  overview: string;
  youtubeUrl: string;
}

export default function MovieButtons({
  id,
  age,
  duration,
  overview,
  release,
  title,
  youtubeUrl,
}: iAppProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button className="text-lg font-medium" onClick={() => setOpen(true)}>
        {" "}
        <PlayCircle className="mr-2 h-6  w-6" /> Play
      </Button>
      <Button
        className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white"
        onClick={() => setOpen(true)}
      >
        <InfoIcon className="mr-2 h-6  w-6" /> Learn More
      </Button>

      <PlayVideoModal
        state={open}
        changeState={setOpen}
        age={age}
        duration={duration}
        overview={overview}
        release={release}
        title={title}
        youtubeUrl={youtubeUrl}
        key={id}
      />
    </>
  );
}
