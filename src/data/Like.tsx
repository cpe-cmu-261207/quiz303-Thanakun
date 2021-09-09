import { useState } from 'react'

type TaskLike = {
    likeNum: number;
}

const Likeleast = ({ likeNum}: TaskLike) => {

    return (
    <div className='flex items-center'>
        <img className='w-4 h-4 mr-1'  src='/like.svg' style = {(likeNum > 0) ? {visibility:"visible"} : {visibility:"hidden"}} ></img>
        <p className='text-gray-500' style = {(likeNum > 0) ? {visibility:"visible"} : {visibility:"hidden"}}> {likeNum} คน </p>
    </div>)
}

export default Likeleast
