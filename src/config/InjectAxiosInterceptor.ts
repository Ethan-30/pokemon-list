import {useEffect} from 'react';
import setupInterceptors from "../service";

function InjectAxiosInterceptors() {

	useEffect(() => {
		setupInterceptors();
	}, []);

	return null;
}

export default InjectAxiosInterceptors;
