import UkHeader from "@components/UkHeader";
import UkContent from "@components/UkContent";

export const metadata = {
  title: "Home",
  description:
    "Cardinal Torch Company UK Limited — London-based trade intermediary connecting Sub-Saharan African and European commodity markets.",
};

const HomePage = () => {
  return (
    <>
      <UkHeader />
      <UkContent />
    </>
  );
};

export default HomePage;
