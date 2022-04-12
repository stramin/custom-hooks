import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {

	const isMounted = useRef(true)

	const [state, setState] = useState({
		data:null,
		load:true,
		erro:null
	});

	useEffect(() => {
		return ()=>{
			isMounted.current=false;
		}
	},[]);

	useEffect(() => {

		setState({...state,load:true});

		fetch(url)
			.then(resp=>resp.json())
			.then(data=>{

				setTimeout(()=>{
					if(isMounted.current){
						setState({
							loading:false,
							error:null,
							data
						});
					}
				},1000);
			})
	}, [url]);

	return state;
	
}
