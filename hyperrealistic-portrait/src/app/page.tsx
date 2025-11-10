import Image from "next/image";

const prompt =
  [
    "hyperrealistic full body portrait of a stylish young man sitting confidently on a black metal chair",
    "minimalist studio, dark green long sleeve shirt with chest pockets, beige wide leg trousers with faint pinstripes",
    "white socks, glossy black platform dress shoes",
    "hands clasped, elbows on knees, calm assertive expression staring directly at camera",
    "soft turquoise gradient background, warm yellow spotlight halo behind head",
    "85mm lens, f/2.0, ISO 100, 1/125s, single softbox key light 45 degrees front left",
    "fill light 25 percent power on right side, backlight diffuser halo, tripod mounted, editorial fashion tone",
    "8K resolution, cinematic color grading, natural skin texture, realistic lighting falloff, depth of field focus face and shoes",
  ].join(", ");

const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
  prompt
)}?width=1536&height=2048&nologo=true&model=flux`;

const specs = [
  { label: "Lens", value: "85mm f/1.4" },
  { label: "Exposure", value: "ISO 100 · 1/125s · f/2.0" },
  { label: "Lighting", value: "Softbox key 45° left · 25% fill right · Diffused backlight" },
  { label: "Mood", value: "Calm, assertive, editorial fashion tone" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#69c7cf] via-[#84d7df] to-[#b8eef0] py-16 text-slate-900">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,_rgba(255,220,120,0.55)_0%,_rgba(255,220,120,0.0)_70%)] blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center md:gap-16 lg:px-12">
        <section className="mx-auto w-full max-w-[520px] rounded-[32px] border border-white/30 bg-white/30 backdrop-blur-xl shadow-[0_30px_80px_rgba(18,65,74,0.25)]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] border border-white/40 bg-slate-200/30 shadow-inner">
            <Image
              src={imageUrl}
              alt="Hyperrealistic portrait of a stylish young man seated in studio lighting."
              fill
              priority
              sizes="(max-width: 768px) 90vw, 520px"
              className="object-cover"
            />
          </div>
          <footer className="space-y-6 px-10 pb-12 pt-10">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Studio Portrait: Poised Confidence
            </h1>
            <p className="text-base leading-7 text-slate-700">
              Meticulous studio craftsmanship capturing contemporary poise. Refined wardrobe, considered lighting choreography,
              and cinematic grading deliver an editorial finish with natural presence.
            </p>
            <div className="grid gap-3 text-sm text-slate-800">
              {specs.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col rounded-2xl border border-white/50 bg-white/40 px-4 py-3 shadow-sm"
                >
                  <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {item.label}
                  </span>
                  <span className="text-base font-medium text-slate-900">{item.value}</span>
                </div>
              ))}
            </div>
          </footer>
        </section>

        <aside className="mx-auto w-full max-w-xl space-y-10 rounded-[40px] border border-white/30 bg-white/25 p-10 backdrop-blur-lg shadow-[0_25px_70px_rgba(16,70,78,0.2)]">
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold tracking-[-0.02em] text-slate-950">Creative Blueprint</h2>
            <p className="text-lg leading-8 text-slate-700">
              The concept combines tailored wardrobe styling with sculpted light ratios to honour texture and depth. Camera
              placement remains eye-level for an immediate, confident connection.
            </p>
          </div>
          <div className="grid gap-6 text-sm text-slate-800">
            <section className="space-y-2">
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-slate-500">Pose & Expression</h3>
              <p className="text-base leading-7">
                Elbows rest on knees with clasped hands to anchor the frame. The gaze stays uninterrupted, reinforcing the calm,
                assertive energy that drives the portrait narrative.
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-slate-500">Wardrobe Direction</h3>
              <p className="text-base leading-7">
                Tactile fabrics—dark green twill shirt with utilitarian pockets, soft pinstriped trousers, and mirror-polished
                platforms—ground the look with modern editorial flair.
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-slate-500">Lighting Design</h3>
              <p className="text-base leading-7">
                Key softbox sculpts highlights at 45°. A gentle fill restores detail on the shadow plane while a diffused backlight
                lifts the silhouette, creating the warm halo against the turquoise gradient.
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-slate-500">Color Treatment</h3>
              <p className="text-base leading-7">
                Cinematic grading emphasizes natural skin texture, rich greens, and luminous turquoise-yellow interplay. Depth-of-field
                prioritizes the subject&apos;s face and footwear for editorial emphasis.
              </p>
            </section>
          </div>
        </aside>
      </main>
    </div>
  );
}
