import React from 'react';


const Search = (props: any) => {

  console.log('Search: ',props);
  return (
    <>
      <p>Search</p>
      {props.children}
    </>
  )
}

export default Search;