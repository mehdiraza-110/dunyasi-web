import BrandCard, { BrandItem } from "./";

type SectionProps = {
  title: string;
  items: BrandItem[];
};

export default function BrandsSection({ title, items }: SectionProps) {
  return (
    <section className="space-y-4 mx-auto max-w-[1400px]">
      <h2 className="text-[30px] font-semibold text-black">{title}</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {items.map((b) => (
          <BrandCard key={b.id} {...b} />
        ))}
      </div>
    </section>
  );
}
