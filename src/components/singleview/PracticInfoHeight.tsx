import Checkmark from "../global/icons/grafik/Checkmark";

const PracticInfoHeight = () => {
  return (
    <section className="bg-(--gray-60) p-4 rounded-md flex flex-col items-center gap-4 text-center text-sm">
      <Checkmark size={75} color="var(--brand-green)" />
      <p>
        Højde: 2,60 m <br></br>Sidespejl til sidespejl: 2,55 m
      </p>
    </section>
  );
};

export default PracticInfoHeight;
