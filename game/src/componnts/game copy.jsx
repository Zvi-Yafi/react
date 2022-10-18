import React, { useState } from 'react';

const Game = () => {
    const [ren1, setRen1] = useState(Math.floor(Math.random() * 100))
    const [ren2, setRen2] = useState(Math.floor(Math.random() * 100))
    const [step1, setStep1] = useState(0)
    const [step2, setStep2] = useState(0)
    let [name1, setName1] = useState('enter your name!')
    let [name2, setName2] = useState('enter your name!')


    if (ren1 === 100) {
        alert('you win')
    } if (ren2 === 100) {
        alert('you win')
    }



    return (
        <div style={{
            display: 'inline-block',
            border: '1px solid red',
            textAlign: 'center',
            width: '100%',
            height: '70%'
        }}>
            <h1>go to 100</h1>

            <div style={{ display: 'inline-block', border: '2px solid blue' }}>
                <br />


                <h1 style={
                    { border: '2px solid yellow' }} >player 1:{name1}</h1><br />

                {name1 === 'enter your name!' && (
                    <div>
                        <input type="text"
                            onChange={(e) => {
                                name1 = e.target.value
                            }
                            } />
                        <button onClick={() => setName1(name1)}>Update name</button>
                    </div>
                )}

                <br />
                {ren2}
                <br />

                <button onClick={() => {
                    setRen2(ren2 + 1)
                    setStep2(step2 + 1)
                }}>Add 2</button>

                <button onClick={() => {
                    setRen2(ren2 - 1)
                    setStep2(step2 + 1)

                }}>reduce 2</button>

                <button onClick={() => {
                    setRen2(ren2 * 2)
                    setStep2(step2 + 1)
                }}>multiply 2</button>

                <button onClick={() => {
                    setRen2(Math.floor(ren2 / 2))
                    setStep2(step2 + 1)
                }}>  to part 2</button>

                <h2>number of steps: {step2}</h2>

            </div>
            <div style={{ display: 'inline-block', margin: '10px', border: '2px solid blue' }}>
                <br />


                <h1
                    style={
                        { border: '2px solid yellow' }} >
                    player 2:{name2}
                </h1><br />
                {name2 === 'enter your name!' && (
                    <div>
                        <input type="text"
                            onChange={(e) => {
                                name2 = e.target.value
                            }}
                        />
                        <button
                            onClick={() => setName2(name2)}
                        >Update name</button>
                    </div>)}

                <br />
                {ren1}<br />
                <button onClick={() => {
                    setRen1(ren1 + 1)
                    setStep1(step1 + 1)
                }}>Add 2</button>

                <button onClick={() => {
                    setRen1(ren1 - 1)
                    setStep1(step1 + 1)

                }}>reduce 2</button>

                <button onClick={() => {
                    setRen1(ren1 * 2)
                    setStep1(step1 + 1)

                }}>multiply 2</button>

                <button onClick={() => {
                    setRen1(Math.floor(ren1 / 2))
                    setStep1(step1 + 1)

                }}>to part 2</button>
                <h2>number of steps: {step1}</h2>
            </div>
        </div>
    )
}
export default Game
