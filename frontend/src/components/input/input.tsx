import { InputHTMLAttributes } from "react";
import { InputContainer, PrimaryInput } from "./styles";
import { SearchIcon } from "../_icons/search-icon";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    handleChange: (value: string ) => void
}

export function PrimaryInputWSearchIcon(props: InputProps){
    return (
        <InputContainer>
            <PrimaryInput 
                onChange={(event) => props.handleChange(event.target.value)} 
                {...props}
            />
            <SearchIcon/>
        </InputContainer>
    )
}