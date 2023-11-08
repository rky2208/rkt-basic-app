import React from "react";
import { useGetAlbumsQuery } from "./src/services/jsonServer";

const App = ()=>{
    const {
        data: albums = [],
        isLoading,
        isFetching,
        isError,
        error,
      } = useGetAlbumsQuery({});
    
      if (isLoading || isFetching) {
        return <div>loading...</div>;
      }
    
      if (isError) {
        console.log({ error });
        return <div>{error.status}</div>;
      }
     console.log("A---",albums)
    return ( 
	<>
	<div style={{display:"flex", justifyContent:"center",alignItems:"center",fontWeight:"600"}}>Countries List With the Flag</div>
	{albums.map((album)=>(
        <div key={album.flags?.svg} 
		style={{
			display:"flex",
			width:"80%",
			gap:"10px",
			padding:"5px",
			margin:"2px",
			border:"1px solid grey",
			borderRadius:"4px",
			alignItems:"center"
			}}>
			<img src={album.flags?.svg} alt={album.flags?.alt} width="50" height="60"/>
        	<p>{album.name?.common}</p>
        </div>))
	}
	</>
	);
}

export default App;