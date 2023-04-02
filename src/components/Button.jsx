const Button = (props) => {
  return (
    <div className="flex">
      <hr className="2xl:w-9/12 xl:w-8/12 md:h-0.5 mt-12 bg-backprime " />
      <button
        onClick={props.calculate}
        className="bg-primary mx-auto md:m-0 self-center rounded-full w-16 h-16 md:w-24 md:h-24 flex justify-center items-center hover:bg-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="44"
          viewBox="0 0 46 44"
        >
          <g fill="none" stroke="#FFF" strokeWidth="2">
            <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
          </g>
        </svg>
      </button>
    </div>
  );
};
export default Button;
