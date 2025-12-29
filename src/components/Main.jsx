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


    function hold(id) {
        console.log(id)
        setDice(prevDice => prevDice.map(item => {
            return item.id === id ? {...item, isHeld: !item.isHeld} :item
        }))
    }

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                
                    value: Math.ceil(Math.random()*6),
                    isHeld: false,
                    id: nanoid()
                
            }))
    }

    let [dice, setDice] = React.useState(generateAllNewDice())

    const diceElements = dice.map(num => <Die 
                                            key={num.id} 
                                            value={num.value} 
                                            state={num.isHeld} 
                                            //------other hold
                                            // hold={hold}
                                            // id={num.isHeld}
                                            //------
                                            hold={()=>(hold(num.id))}
    />)

    function newDie() {
        setDice(prevDice => prevDice.map(die => {
            return die.isHeld === true ? die : {...die, value: Math.ceil(Math.random()*6)}
        }))
    }

    


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