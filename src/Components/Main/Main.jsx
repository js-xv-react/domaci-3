import React, {useEffect, useState} from 'react';
import Button from '../Button/Button';

const Main = () => {

    const [text, setText] = useState('black')

    const realSubmitHandler = (textToSet) => {
        setText(textToSet)
    }

    useEffect(() => {
        console.log('whatever')
    }, [text])

    return (
        <>
        <Button color='red' text={'red'} submitHandler={realSubmitHandler} />
        <Button color='green' text={'green'} submitHandler={realSubmitHandler} />
        <Button color='blue' text={'blue'} submitHandler={realSubmitHandler} />
        <br />
        <h1>this text is brought to you by {text} button</h1>
        </>
    )

}

export default Main