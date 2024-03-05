

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="border-y-4 mx-auto text-center my-4 md:w-4/12">
      <p className="text-yellow-600 ">{subHeading}</p>
      <h3 className="text-3xl uppercase ">{heading}</h3>
    </div>
  );
};

export default SectionTitle;