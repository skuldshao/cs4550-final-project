const CommentItem = ({item}) => {
    console.log(item)
    return (
        <div className="text-white">
            {item.comment}
        </div>
    )
}

export default CommentItem;