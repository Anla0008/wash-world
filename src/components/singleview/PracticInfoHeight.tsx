import Checkmark from "../global/icons/grafik/Checkmark";

const PracticInfoHeight = () => {
  return (
    <section className="bg-(--gray-60) p-6 rounded-md flex flex-col items-center gap-4 text-center">
      <Checkmark size={75} color="var(--brand-green)" />
      <p>Højde: 2,60 m</p>
      <p>Sidespejl til sidespejl: 2,55 m</p>
    </section>
  );
};

export default PracticInfoHeight;
