function SectionHeading({ children }) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-black">{children}</h2>
      <div className="h-2 w-24 mx-auto mt-4 bg-yellow-400 border-2 border-black" />
    </div>
  );
}

export default SectionHeading;
