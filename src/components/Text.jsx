const Text = (props) => {
    return (
        <div className="flex">
        <p className='text-primary 2xl:text-8xl text-7xl font-bold italic'>{props.number == 0 ? '--' : props.number} </p><p className='xl:text-8xl text-6xl italic font-extrabold'>{props.text}</p>
        </div>
        )
};
export default Text;