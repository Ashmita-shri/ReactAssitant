import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DetailsView from "./DetailsView"
import "./SearchField.css"
import "./App.css"
// import { Context as OpenAppContext} from '../../Context/OpenAppContext';

//The input field data state goes here.
function SearchField(){
  // const [page,,value,] = useContext(OpenAppContext);
  const [searchItem, setSearchItem] = useState("");
  const [linkData, setLinkData] = useState([]);
  const [linkTitle, setLinkTitle] = useState([]);
  const [search, setSearch] = useState(false)

  // useEffect(() => {
  //   if(page === 'wiki'){
  //       setSearchItem(value);
  //   }
  // }, [page, value]);
   //make request and get data here

    async function makeRequestAndShow(e){
        e.preventDefault();   //preventing to the same screen
        const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchItem}&format=json&origin=*`;
        // const summaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${searchItem}`;
          try {
            const response = await axios.get(url);
          //  const summaryResponse = await axios.get(summaryUrl);
            setLinkData(response.data[3])
            setLinkTitle(response.data[1])
            //setSummaryData(summaryResponse.data)
            setSearch(true)

          } catch (error) {
            //setErrorMessage("The results are Not found")
            console.error(error);
          }

      }

      return (

    <div>
            <div  className = "nav-wrapper">
            <div className = "title" >
                 <h3>Wikipedia Viewer</h3>
            </div>
            <form>
            <div className = "item">
                <input type = "text" placeholder = "Search whatever you want from Wikipedia" value = {searchItem} onChange = {e => setSearchItem(e.target.value)}/>
            </div>
            <div className = "item">
                <button onClick = {makeRequestAndShow}>Search</button>
            </div>
            </form>
            </div>
          <section>
      {search && <p className = "searchNote">Wikipedia search results realted to the item are down below,</p>}
      {
        linkTitle.map((item,i) => <DetailsView name = {item} link = {linkData[i]} key = {i}/>)
      }

    </section>
   </div>

  )
}

export default SearchField;