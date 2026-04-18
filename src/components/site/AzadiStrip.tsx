import azadiMahotsav from "@/assets/Azadi-ka-Amrit-Mahotsav.jpg";

export function AzadiStrip() {
  return (
    <section className="bg-secondary/60 border-y border-border">
      <div className="w-full">
        <img
          src={azadiMahotsav}
          alt="Azadi Ka Amrit Mahotsav"
          className="w-full h-24 md:h-32 lg:h-36 object-cover"
        />
      </div>
    </section>
  );
}
