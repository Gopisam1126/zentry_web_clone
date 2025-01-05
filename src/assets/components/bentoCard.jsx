/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function BentoCard({src, title, desc, isCommingSoon}) {
    return (
        <div className="relative size-full">
            <video src={src} loop muted autoPlay className="absolute left-0 top-0 size-full object-cover object-center"/>
            {title}
        </div>
    )
}

export default BentoCard;