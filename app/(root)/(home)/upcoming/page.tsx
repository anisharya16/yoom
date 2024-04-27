import CallList from "@/components/CallList";

const Upcoming = () => {
  return (
    <section className="flex flex-col size-full gap-10 text-white">
      <h1 className="text-3xl font-bold">Upcoming</h1>
      <CallList type="upcoming" />
    </section>
  );
};

export default Upcoming;
