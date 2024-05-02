import "./list.css"
import React from 'react'
import Userinfo from "./userInfo/Userinfo"
import ChatList from "./chatList/ChatList"

const List = () => {
  return (
    <div className="list">
   <Userinfo/>
   <ChatList/>
     
    </div>
  )
}

export default List