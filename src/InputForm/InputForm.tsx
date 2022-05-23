import {useState} from "react";

interface InputFormProps {
    defaultValue?: string;
}


export const InputForm = (props?: InputFormProps) => {
    const [displayError, setDisplayError] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('default value')
    const [errorMessage, setErrorMessage] = useState<string>('')

    const formReadyToSubmit = !(displayError || !inputValue);

    const handleInputChange = (event: any) => {
        const messageLength = event.target.value.length;
        setInputValue(event.target.value);
        if (messageLength < 3 || messageLength > 20) {
            if (messageLength < 3) {
                setErrorMessage('User name are too short')
            }

            if (messageLength > 20) {
                setErrorMessage('User name are too long')
            }

            setDisplayError(true)
        } else {
            setDisplayError(false)
            setErrorMessage('')
        }
    }

    const handleSubmit = () => {
        if (formReadyToSubmit) {
            localStorage.setItem("inputValue", inputValue)
        }
    }


    return <div style={{display: "flex", flexDirection: 'column'}}>
        {displayError && <div style={{color: 'red'}}>{errorMessage}</div>}
        <div>User name:</div>
        <input onInput={handleInputChange} value={inputValue} type="text"/>
        <br/>
        <button onClick={handleSubmit} disabled={!formReadyToSubmit}>submit data</button>
    </div>
}
