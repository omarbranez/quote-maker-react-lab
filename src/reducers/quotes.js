export default (state = [], action) => {
  switch(action.type){
    case "ADD_QUOTE":
      return state.concat(action.quote)
    case "REMOVE_QUOTE":
      return state.filter( (quote) => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      // const quoteUpvoted = state.find( (quote) => quote.id === action.quoteId) why doesn't FIND return the object?
      const quoteUpvoted = state.find( quote => quote.id === action.quoteId)
      quoteUpvoted.votes = quoteUpvoted.votes + 1
      // quoteUpvoted = {...quoteUpvoted, votes: quoteUpvoted.votes + 1}
      return [...state.slice(0,quoteUpvoted), ...state.slice(quoteUpvoted+1)]
    case "DOWNVOTE_QUOTE":
      const quoteDownvoted = state.find( quote => quote.id === action.quoteId)
      quoteDownvoted.votes > 0 ? quoteDownvoted.votes = quoteDownvoted.votes - 1 : quoteDownvoted
      // const quoteDownvoted = state.filter( (quote) => quote.id === action.quoteId ? quote.votes - 1 : quote)
      return [...state.slice(0, quoteDownvoted),  ...state.slice(quoteDownvoted+1)]
    default: 
      return state;
  }
}
