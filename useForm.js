import { useState } from "react";


export const useForm = (i = {}) => {

	const[form, setForm]=useState(i);

	const reset =()=>{
		setForm(i);
	}

	//const change=(e)=>{
	const changeForm=({target})=>{
		setForm({
			...form,
			[target.name]:target.value
		})
	}

	return [form,changeForm,reset];

}
