import React, {useState} from "react";
import "./TopicSearch.scss";
import TextInput from "../../../components/Form/TextInput";


export default function TopicSearch() {
    const [searchText, setSearchText] = useState<string>("");
    
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };
    
    return (
        <section className='topic-search'>
            <h2>Topic Search</h2>
            
            <TextInput 
                id='topicSearch' 
                type='text' 
                isRequired={true} 
                value={searchText} 
                onChange={handleEmailChange}/>
            
        </section>
    );
}