function PlayerCard({name, goals, position, onAdd, del}){
    return(
        <div>
            <h2>ფეხბურთელის გვარი: {name}</h2>
            <p>პოზიცია: {position}</p>
            <p>გოლების რაოდენობა: {goals}</p>

            <button onClick = {onAdd}>დაამატე ფავორიტებში</button>
        </div>
    );
}

export default PlayerCard;