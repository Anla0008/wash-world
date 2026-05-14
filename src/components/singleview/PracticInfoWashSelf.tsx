import SelfWash from "../global/icons/grafik/SelfWash";

const PracticInfoWashSelf = ({ car_wash_self }: { car_wash_self: number }) => {
  return (
    <section className="bg-(--gray-60) p-6 rounded-md flex flex-col items-center gap-4 text-center text-sm">
      <SelfWash size={100} />

      <p>{car_wash_self} Vaskselv</p>
    </section>
  );
};

export default PracticInfoWashSelf;
