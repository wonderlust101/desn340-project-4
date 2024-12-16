import React, {useState} from "react";

import "./TopicSearch.scss";

import TextInput from "../../../components/Form/TextInput";

import searchIcon from "/src/assets/images/search-icon.svg";

export default function TopicSearch() {
    const [searchText, setSearchText] = useState<string>("");
    
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };
    
    return (
        <section className='topic-search'>
            <h2>Topic Search</h2>
            
            <TextInput
                id='topicSearch' 
                type='text' 
                isRequired={true} 
                placeholder='How can we help you?'
                value={searchText} 
                icon={searchIcon}
                onChange={handleSearchChange}/>
            
        </section>
    );
}