const DoctorCard = ({ imgURL, changeBigDoctorImage, bigDoctorImg }) => {
    const handleClick = () => {
      if (bigDoctorImg !== imgURL.bigDoctor) {
        changeBigDoctorImage(imgURL.bigDoctor);
      }
    };
  
    return (
      <div
        className={`border-2 rounded-xl ${
          bigDoctorImg === imgURL.bigDoctor
            ? "border-coral-red"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
        <div className='flex justify-center items-center bg-card shadow-lg bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
          <img
            src={imgURL.thumbnail}
            alt='shoe colletion'
            width={127}
            height={103.34}
            className='object-contain'
          />
        </div>
      </div>
    );
  };
  
  export default DoctorCard;