import Image from 'next/image'
import {Banner} from "@/app/components/banner";
import {Categories} from "@/app/components/categories";
import {Bestsellers} from "@/app/components/bestsellers";
import {Comments} from "@/app/components/comments";

export default function Home() {
  return (
      <main>
        <Banner/>
          <Bestsellers/>
          <Categories/>
          <Comments/>
      </main>
  );
}