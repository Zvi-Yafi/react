import React, { useState } from 'react';




const Game = () => {
const actions = ['+1', '-1', '*2', '/2']

    const [arrOfplayer, setArrOfplayer] = useState([])

    function addPlayer() {
        arrOfplayer.push('1')
        setArrOfplayer([...arrOfplayer])
    }

    const [player, setPlayer] = useState({
        nameplayer: 'enter your name',
        step: 0
    })

    function Addsteps() {
        setPlayer(p => {
            return { ...p, step: player.step + 1 }
        })
    }
    function AddNum(e) {
        Addsteps()
        let b = eval(player.ran.toString() + e)
        setPlayer((p) => {
            return { ...p, ran: Math.floor(b) }
        })
    }
    function saveName() {
        setPlayer({ ...player })
    }

    return (

        <div className='game'>
            <button onClick={() => addPlayer()}>Add player</button>

            {arrOfplayer.map((i,idx) =>i=<div className='styleOfPlayer' key={idx}>
                <br />
                <div className='headerOfplayer'>
                    <h1 style={{ margin: '0 0 10px 0' }} >
                        {player.nameplayer} </h1>
                    {player.nameplayer === 'enter your name' &&
                        <div><input
                            onChange={(e) => {
                                player.nameplayer = e.target.value
                            }}
                            type="text"
                        />
                            <br />
                            <button onClick={saveName}>save name</button>
                        </div>}</div>
                {player.nameplayer !== 'enter your name' &&
                    <div>
                        {Math.floor(Math.random() * 100)}<br />
                        {actions.map((e, i) => <button onClick={() => AddNum(e)} key={i}>{e}</button>)}
                        <h3>number of steps: {player.step} </h3>
                    </div>}
            </div>)}
        </div >

    )
}
export default Game 
