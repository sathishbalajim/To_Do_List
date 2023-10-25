/* import logo from './logo.svg';
 */import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import {useState} from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

 //Functional components//
function App(){
    const [item,setItem] = useState(JSON.parse(localStorage.getItem("todo_List"))
    );

  const [newItem,setNewItem] = useState('')
  const[search,setSearch] = useState('')
  const addItem =(item)=>{
    const id =item.length ? item[item.length-1].id +1 : 1;
    const addNewItem = {id,checked:false,item}
    const listItem =[...item,addNewItem]
    setItem(listItem)
    localStorage.setItem("todo_List",JSON.stringify(listItem)) 
  }

  const handleCheck = (id) =>{ 
    const listItems = item.map((item)=>item.id===id ?{...item,checked:!item.checked} : item)
    setItem(listItems) 
    localStorage.setItem("todo_List",JSON.stringify(listItems))
    }
    const handledelete = (id) =>{
      const listItems = item.filter((item)=>item.id!==id)
      setItem(listItems)
      localStorage.setItem("todo_List",JSON.stringify(listItems));
    }
    const handleSumbit =(e)=>{
      e.preventDefault()
      if(!newItem) return;
      console.log(newItem);
      addItem(newItem)
      setNewItem('')
    }


  return (
    <div className ="App">
        <Header
        title="To Do List"
        />
        <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSumbit={handleSumbit}
        />
        <SearchItem
        search={search}
        setSearch={setSearch}
        />
        <Content
        items={item.filter(item => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
        handleCheck={handleCheck}
        handledelete={handledelete}
        />
        <Footer
        length={item.length}
        />
    </div>
    );
}
export default App;