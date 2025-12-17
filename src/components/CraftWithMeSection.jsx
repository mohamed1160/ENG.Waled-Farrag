import CraftWithMe from "./UI/CraftWithMe";

export default function CraftWithMeSection() {
  return (
      <section className="w-full mt-30 mb-30 pr-16 pl-16 flex flex-col gap-8">
          <p className="text-[42px] font-light w-[80%]">
              Great brands are built with intention. If you’re ready to create one with clarity and strategy, <span className="font-medium">I’d be glad to help you start.</span>
          </p>
          <CraftWithMe />
      </section>
  );
}
