import Clock from "../global/icons/grafik/Clock";

const PracticInfoTime = () => {
  return (
    <section className="bg-(--gray-60) p-6 rounded-md flex flex-col items-center gap-4">
      <Clock size={75} color="var(--brand-green)" />
      <p>07.00 - 22.00</p>
    </section>
  );
};

export default PracticInfoTime;
