import {API_KEY} from '../config';
import {useState,useEffect} from 'react';

export default function useHandleUrl(){
    const [searchInput, setSearchInput] = useState("");
    const [filter1, setFilter1] = useState("all");
    const [filter2, setFilter2] = useState("reletive");
    const [filter3, setFilter3] = useState("all-books");
    const [data, setData] = useState([]);
    const [url, setUrl] = useState(`https://www.googleapis.com/books/v1/volumes?q=+subject:classic&orderBy:newest&maxResults=40&key=${API_KEY}`);
  
    //new fetch every time data changes
    useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(data => setData(data.items));
    }, [url]);
    
    //new url every time radio buttons changes
    useEffect(() => {
        if(searchInput){
            changeUrl();
        }
    }, [filter1, filter2, filter3]);

    //new url every time input changes
    async function handleSearchSubmit(e){
        e.preventDefault();
        changeUrl();
    };


    //build the url to fetch based on the input and radio buttons 
    function changeUrl(){
        let newUrl = "https://www.googleapis.com/books/v1/volumes?q=";

        if (filter1 == "title"){
            newUrl += `+intitle:${searchInput}`;
        }else if (filter1 == "author"){
            newUrl += `+inauthor:${searchInput}`;
        }else{
            newUrl += `${searchInput}`;
        };

        if (filter2 == 'newest'){
            newUrl += "&orderBy=newest";
        };

        if (filter3 == "free-ebooks"){
            newUrl += "&filter=free-ebooks";
        };
    
        newUrl += `&maxResults=40&key=${API_KEY}`;
        setUrl(newUrl);
    };

    return [setFilter1,setFilter2,setFilter3,setSearchInput,searchInput,handleSearchSubmit,data];
};