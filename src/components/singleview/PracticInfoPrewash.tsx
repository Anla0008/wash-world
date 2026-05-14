// import PreWash from "../global/icons/grafik/PreWash";

// const PracticInfoPrewash = () => {
//   return (
//     <section className="bg-(--gray-60) p-6 rounded-md flex flex-col items-center gap-4 text-center">
//       <PreWash size={100} />
//       <p>2 højtryksforvask</p>
//     </section>
//   );
// };

// export default PracticInfoPrewash;

import PreWash from "../global/icons/grafik/PreWash";

type PracticInfoPrewashProps = {
  car_wash_high_pressure: number;
};

const PracticInfoPrewash = ({ car_wash_high_pressure }: PracticInfoPrewashProps) => {
  return (
    <section className="bg-(--gray-60) p-6 rounded-md flex flex-col items-center gap-4 text-center text-sm">
      <PreWash size={100} />
      <p>{car_wash_high_pressure} højtryksforvask</p>
    </section>
  );
};

export default PracticInfoPrewash;
