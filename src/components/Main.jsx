import Die from './Die.jsx'
export default function Main() {

//    function generateAllNewDice() {
//     const newDice = []
//     for (let i=0; i < 10; i++) {
//         const rand = Math.ceil(Math.random()*6)
//         newDice.push(rand)
//     }
//     return newDice
//    }
//    console.log(generateAllNewDice())

//------------------------------------------------------------------------------------------------

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random()*6))
    }

    console.log(generateAllNewDice())

    return <>
    <section className="flex justify-center items-center h-screen bg-[#0B2434]">
        <main className="flex justify-center items-center h-7/10 w-7/10 bg-[#F5F5F5] rounded-xl">
            <section className='flex flex-col gap-12'>
                <div className='flex gap-12'>
                    <Die value={1}/>
                    <Die value={1}/>
                    <Die value={1}/>
                    <Die value={1}/>
                    <Die value={1}/>
                </div>
                <div className='flex gap-12'>
                    <Die value={1}/>
                    <Die value={1}/>
                    <Die value={1}/>
                    <Die value={1}/>
                    <Die value={1}/>
                </div>
            </section>
        </main>
    </section>
    </>
}