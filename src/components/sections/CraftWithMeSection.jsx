import CraftWithMe from "../UI/CraftWithMe";

export default function CraftWithMeSection() {
    return (
        <section className="w-full   px-6 md:px-16 flex flex-col gap-6 md:gap-8">
            <p className="text-xl sm:text-2xl md:text-[36px] font-light w-full sm:w-[90%] md:w-[85%]">
                Great brands are built with intention. If you’re ready to create one with clarity and strategy, <span className="font-semibold">I’d be glad to help you start.</span>
            </p>
            <div className="w-full flex justify-start md:justify-start">
                <CraftWithMe />
            </div>
        </section>
    );
}
