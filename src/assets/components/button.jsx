/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function Button({ title, id, lefticon, containerclass }) {
  return (
    <button
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerclass}`}
    >
      {lefticon}
      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        {title}
      </span>
    </button>
  );
}

export default Button;
