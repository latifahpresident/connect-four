import { DROP_TOKEN, GAME_START , CURRENT_PLAYER} from './actions.js'
const initialState = {
    active_game: false,
    current_player: null,
    winner: '',
    
    gameBoard: [
        [], // these are the column the token fills in lowest disc. inside each columns theres an item for the row
        [],
        [], //  [red [ yell  [yell
        [], //   yell  red    yell
        [], //   red   red    yell
        [], //   red]  yell]  yell]
        []
    ]
}

export default (state = initialState, action) => {
    console.log(' game active:', action.payload)

    switch(action.type) {
        case GAME_START: 
            return {
               
                active_game: !state.active_game
            }
        case CURRENT_PLAYER:
            return {
                current_player: action.payload
            }
        case DROP_TOKEN:
                const token = state.current_player
                const column = state.gameBoard[action.payload].concat(token)
                const gameBoard = state.gameBoard.slice()
                gameBoard[action.payload] = column
            return {
                current_player: state.current_player === 1 ? 2 : 1,
                gameBoard: gameBoard
            };

        default: 
            return state
            
    }

}

// current player
// gameboard
// 7 col 6 row
// active game
// winner