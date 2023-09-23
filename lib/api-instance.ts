'use client';

import { GlobalResponse } from "@/types/response";
import { getJwtToken, isLogin } from "./authentication";


export const METHOD_POST = "POST";
export const METHOD_GET = "GET";
export const METHOD_PUT = "PUT";
export const METHOD_PATCH = "PATCH";
export const METHOD_DELETE = "DELETE";
export const METHOD_OPTIONS = "OPTIONS";


export const globalFetch = async <T> (path : string, params : any, method = METHOD_POST) => {
    const baseurl = process.env.NEXT_PUBLIC_BACKEND_URL;
    

	const headers : {[key : string] : any} = {
		"Content-Type" : "application/json",
		"Accept" : "application/json",
        // "Access-Control-Allow-Private-Network": true
	};

    const check = await isLogin();
    
    if (check) {

        const token = await getJwtToken()
    
        headers['Authorization'] = `Bearer ${token}`;
    }

    const fullpath = `${baseurl}/${path}`;

    let response = null
    if (method != METHOD_GET) {
        response = await fetch(fullpath, {
            method: method,
            headers: headers,
            body: JSON.stringify(params)
        });
    }else {
        response = await fetch(fullpath, {
            method: method,
            headers: headers,
            // body: JSON.stringify(params)
        });
    }

    // console.log('response : ', response);

    const contentType = response.headers.get("Content-Type") || "";
    const isJson = contentType.includes("application/json");
    const data : GlobalResponse<T> = isJson ? await response.json() : await response.text();
    
    console.log('DATA : ', data);
    console.log('response : ', response);
    
    
    if (!response.ok) {
        if (isJson && Object.keys(data.validations).length) {
            console.log('masuk 1');
            
            throw new Error(JSON.stringify(data.validations));
        }
        if (isJson && Object.keys(data.error).length) {
            console.log('masuk 2');

            throw new Error(data.error.message || response.statusText);
        }
        console.log('masuk 3');

        throw new Error(data.message || response.statusText);
    }
    return data;
    // return res
}

export const uploadFiles = async <T> (path : string, files : FormData, method = METHOD_POST) => {
    const baseurl = process.env.NEXT_PUBLIC_BACKEND_URL;
    

	const headers : {[key : string] : any} = {
		// "Content-Type" : "multipart/form-data",
		// "Accept" : "application/json",
        // "Access-Control-Allow-Private-Network": true
	};

    const check = await isLogin();
    
    if (check) {

        const token = await getJwtToken()
    
        headers['Authorization'] = `Bearer ${token}`;
    }

    const fullpath = `${baseurl}/${path}`;

    console.log('FILES : ', files);
    

    const response = await fetch(fullpath, {
		method: method,
		headers: headers,
        body: files
	});

    // console.log('response : ', response);

    const contentType = response.headers.get("Content-Type") || "";
    const isJson = contentType.includes("application/json");
    const data : GlobalResponse<T> = isJson ? await response.json() : await response.text();
    
    console.log('DATA : ', data);
    console.log('response : ', response);
    
    
    if (!response.ok) {
        if (isJson && Object.keys(data.validations).length) {
            console.log('masuk 1');
            
            throw new Error(JSON.stringify(data.validations));
        }
        if (isJson && Object.keys(data.error).length) {
            console.log('masuk 2');

            throw new Error(data.error.message || response.statusText);
        }
        console.log('masuk 3');

        throw new Error(data.message || response.statusText);
    }
    return data;
    // return res
}