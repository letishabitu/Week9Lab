import React from 'react'

function NassaDisplay({nassa}) {


  

    const loaded = () => {
        return (
            <div className="board">
               {/* <h3>{nassa.collection.version}</h3>                             */}
               {nassa.collection.items.map((sub)=> 
                <>                               
                  
                  <img src = {sub.links?.[0].href} />
                  
                  </>

               )}      
               
               
            </div>
        )
    }

    const loading = () => {
        return <h1>No Data to Display</h1>
    }
    //The component must return some JSX
    return nassa ? loaded() : loading();
}

export default NassaDisplay