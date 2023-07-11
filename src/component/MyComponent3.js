

function MyComponent3({title,content,writer}){

  return(

    <div>
      title:{title}<br/>
      content:{content}<br/>
      writer:{writer}<br/>
    </div>

  )
}

MyComponent3.defaultProps = {
  writer:'가영'
}

export default MyComponent3