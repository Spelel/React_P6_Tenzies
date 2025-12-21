import Die from './Die.jsx'
import React from 'react'
import NewNumberButton from './NewSetButton.jsx'
import { nanoid } from 'nanoid'
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
            .map(() => {
                return {
                    value: Math.ceil(Math.random()*6),
                    isHeld: true,
                    id: nanoid()
                }
            })
    }

    let [dice, setDice] = React.useState(generateAllNewDice())

    const diceElements = dice.map(num => <Die key={num.id} value={num.value} state={num.isHeld} />)

    function newDie() {
        setDice(generateAllNewDice)
    }

    diceElements.map(n => console.log(n.props.state))
    return <>
    <section className="flex justify-center items-center h-screen bg-[#0B2434]">
        <main className="flex flex-col justify-center items-center h-7/10 w-7/10 bg-[#F5F5F5] rounded-xl">
            <section className='grid grid-cols-5 gap-10 pb-10'>
                    {diceElements}
            </section>
            <NewNumberButton 
                newDieNumbers={newDie}
            />
        </main>
    </section>
    </>
}