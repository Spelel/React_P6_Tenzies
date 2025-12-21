export default function Die(props) {
    if (props.state === false) {
        return <button className="h-25 w-25 shadow-xl/20 rounded-xl bg-white text-4xl font-bold cursor-pointer">{props.value}</button>
    } else {
        return <button className="h-25 w-25 shadow-xl/20 rounded-xl bg-[#59E391] text-4xl font-bold cursor-pointer">{props.value}</button>
    }
}



// <button className="h-25 w-25 shadow-xl/20 rounded-xl bg-white text-4xl font-bold cursor-pointer">{props.value}</button>