const Input = (props) => {
  return (
    <div className="input-container ">
      <p className="text-smokeygray font-semibold ">{props.head}</p>
      <input
        type="text"
        className="border-2 rounded-md md:h-9 font-bold  px-5
        font-Poppins w-24 h-14 text-xl xl:w-38 hover:border-primary 
        hover:cursor-pointer focus:border-primary 2xl:h-18 md:text-4xl"
        placeholder={props.place} ref={props.Refrence} 
        />
      <p className="text-md text-red-600 italic">{props.error}</p>
    </div>
);
};

export default Input;
