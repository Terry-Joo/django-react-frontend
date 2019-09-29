import React from 'react'
import ReactMarkdown from 'react-markdown'
function Title(props) {
  return(
    <div className="App-title">
      {props.title}
    </div>
  )
}

function Content(props) {
  return(
    <div>
      <ReactMarkdown source={props.content}/>
    </div>
  )
}

function DateTime() {
  return(
    <div>

    </div>
  )
}
function Post(props) {
  return(
    <div>
      <Title title={props.title}/>
      <Content content={props.content}/>
      <DateTime/>
    </div>
  )
}


export default Post;