import { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
  const [users, setUsers] = useState([]);

  const handleSubmitdata = (data) => {
    setUsers(() => [...users, data]); 
  };

  const handleRemove = (id) => {
    setUsers(() => users.filter((items, index) => index !== id)); 
  };

  return (
    <>
      <div>
        <Cards usersdata={users} handleRemove={handleRemove} />
      </div>

      <div>
        <Form handleSubmitdata={handleSubmitdata} />
      </div>
    </>
  );
}

export default App;
