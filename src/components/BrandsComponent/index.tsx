"use client";
import Image from "next/image";

export type BrandItem = {
  id: string;
  name: string;
  logo: string;
  href?: string;
};

export default function BrandCard({ name, logo }: BrandItem) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-6 h-[265px] transition">
      <span className="grid h-25 w-25 place-items-center rounded-full bg-slate-100">
        <Image src={logo} alt={name} width={40} height={40} className="h-10 w-10 object-contain" />
      </span>
      <p className="mt-5 text-[18px]  font-bold text-black">{name}</p>
    </div>
  );
}
