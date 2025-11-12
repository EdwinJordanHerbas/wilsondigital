// src/sections/promotions.tsx
export default function Promotions({ items = [] as Array<{_id:string; title:string; description?:string; imageUrl?:string; price?:number}> }) {
  if (!items.length) return null;
  return (
    <section id="promos" className="py-14">
      <div className="container-page">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Promociones</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(p => (
            <article key={p._id} className="card p-4">
              {p.imageUrl && (
                <img src={p.imageUrl} alt={p.title} className="h-44 w-full object-cover rounded-xl mb-3" />
              )}
              <h3 className="font-semibold">{p.title}</h3>
              {p.description && <p className="text-sm opacity-80 mt-1">{p.description}</p>}
              {typeof p.price === "number" && (
                <p className="mt-2 font-bold text-brand-700">{p.price.toFixed(2)} €</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
