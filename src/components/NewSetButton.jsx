export default function NewNumberButton(props) {
   const message = props.state === true ? 'New Game' : 'Roll'
   return <>
   <button className="bg-[#5035FF] border-none text-white font-medium tracking-wider text-4xl mt-8 py-6 px-15 rounded-xl cursor-pointer"onClick={props.newDieNumbers}>
         {message}      
      </button>
   </>
}